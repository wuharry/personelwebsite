import { describe, expect, it } from 'vitest';

import { summarizeGitHubActivity, type GitHubEvent } from './fetcher';

const createEvent = (
  overrides: Partial<GitHubEvent> & Pick<GitHubEvent, 'id'>,
): GitHubEvent => ({
  type: 'PushEvent',
  created_at: '2026-08-31T04:00:00.000Z',
  repo: { name: 'wuharry/personelwebsite' },
  payload: {},
  ...overrides,
});

describe('summarizeGitHubActivity', () => {
  it('aggregates repository and weekly push counts', () => {
    const events = [
      createEvent({ id: '1', payload: { size: 3 } }),
      createEvent({
        id: '2',
        created_at: '2026-08-30T04:00:00.000Z',
        repo: { name: 'wuharry/another-project' },
        payload: { commits: [{ message: 'one' }, { message: 'two' }] },
      }),
      createEvent({
        id: '3',
        repo: { name: 'wuharry/another-project' },
        payload: { head: 'new', before: 'old' },
      }),
      createEvent({ id: '4', type: 'WatchEvent' }),
    ];

    const result = summarizeGitHubActivity(events, new Date(2026, 7, 31, 12));

    expect(result.totalCommits).toBe(6);
    expect(result.repoCommitMap).toEqual([
      { repo: 'personelwebsite', commits: 3 },
      { repo: 'another-project', commits: 3 },
    ]);
    expect(result.weeklyCommits).toHaveLength(7);
    expect(result.weeklyCommits.at(-1)).toEqual({ date: '08-31', commits: 4 });
    expect(result.weeklyCommits.at(-2)).toEqual({ date: '08-30', commits: 2 });
    expect(result.events).toHaveLength(4);
  });

  it('caps recent events and ignores empty pushes', () => {
    const events = Array.from({ length: 8 }, (_, index) =>
      createEvent({
        id: String(index),
        payload: { head: 'same', before: 'same' },
      }),
    );

    const result = summarizeGitHubActivity(events);

    expect(result.events).toHaveLength(6);
    expect(result.totalCommits).toBe(0);
  });
});
