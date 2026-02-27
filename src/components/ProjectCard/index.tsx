import clsx from 'clsx';
import { type FunctionComponent } from 'react';
import { ExternalLink } from 'lucide-react';

import { type Project } from './type';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  project,
  index,
}) => {
  return (
    <article
      className={clsx(
        'group relative flex flex-col overflow-hidden rounded-xl',
        'border border-white/10 bg-white/5',
        'transition-all duration-500',
        'hover:border-blue-500/30 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/5',
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-video w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

        {/* Hover overlay link */}
        {project.link && (
          <div className="absolute top-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                'flex h-9 w-9 items-center justify-center rounded-lg',
                'bg-black/60 text-white backdrop-blur-sm',
                'transition-colors hover:bg-blue-500',
              )}
              aria-label={`${project.title} Demo`}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        )}

        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="rounded-md bg-blue-500/90 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-blue-400">
          {project.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-slate-400">
          {project.featured
            ? (project.longDescription ?? project.description)
            : project.description}
        </p>

        {project.tags && project.tags.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-blue-500/20 bg-blue-500/10 px-2 py-0.5 font-mono text-xs text-blue-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
