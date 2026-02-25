/** @format */

import emailjs from '@emailjs/browser';
import clsx from 'clsx';
import { type FunctionComponent } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';

import { NavigationBar, Button } from '../../compoment';
import {
  CONTACT_ME_INPUTS,
  type Inputs,
} from '../../static/constant/data/ContactMeInput';

interface contactProps {}

const Contact: FunctionComponent<contactProps> = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const sendEmailHandler: SubmitHandler<Inputs> = (data) => {
    emailjs
      .send(
        'service_4ma43h6',
        'template_rkh0dkg',
        {
          from_name: data.Name,
          to_name: 'Wu.Harvey',
          message: data.Message,
          reply_to: data.Email,
          subject: data.Subject,
        },
        'NudTZXCk8kRq5mPQH',
      )
      .then(
        (_result) => {
          alert('Email sent successfully!');
          window.location.reload();
        },
        (_error) => {
          alert('Failed to send email. Please try again later.');
        },
      );
  };
  return (
    <div
      className={clsx(
        'flex items-start justify-start sm:flex-col',
        'min-h-screen w-full',
        'bg-linear-to-b from-[#1f2937] to-[#111827]',
        'overflow-y-auto',
      )}
    >
      <NavigationBar />
      <section
        className={clsx(
          'flex flex-col sm:w-full sm:flex-row',
          'mt-20 mb-10 space-y-10 px-4 sm:mt-14',
          'rounded-lg bg-white/5 p-8 shadow-xl backdrop-blur-md',
          'mx-auto max-w-7xl',
        )}
      >
        <div className={clsx('flex h-full w-full flex-1 flex-col')}>
          {/* 文字區 */}
          <div className={clsx('mb-8 text-start')}>
            {/* 標題 */}
            <h2 className="mb-4 text-7xl font-semibold text-white">Contact </h2>
            <h2 className="mb-4 text-7xl font-semibold text-sky-600">Me </h2>
          </div>
          {/* 內文區 */}

          <div className={clsx('mb-8 text-lg text-white')}>
            <h2 className={clsx('mb-4 text-2xl')}>let&apos;s work together</h2>

            <p>
              我是一名充滿熱誠的前端工程師,我正在尋找一份前端工作.
              {/* I am a passionate front-end developer seeking a front-end development position. */}
              我善於溝通並且具有一定的獨立工作能力,並且樂於學新知識,我具備一年的React的開發經驗,熟悉React生態系統,能夠快速高效地開發出高質量的用戶介面。
              {/* I excel in communication, possess strong independent working skills, and am eager to learn new knowledge. */}
              我擅長使用現代化的前端工具和框架,如Webpack、vite等,並且對性能優化有一定的理解和實踐經驗。
              {/* With one year of React development experience,I am well-versed in the React ecosystem and capable of quickly and efficiently developing high-quality user interfaces. I am proficient in using modern front-end tools and frameworks such as Webpack and Vite, and have a good understanding and practical experience in performance optimization. 
              I have strong teamwork skills and can work closely with designers and backend developers to drive product development forward. */}
              我有良好的團隊合作精神,能夠與設計師、後端工程師等緊密配合,共同推進產品開發。
            </p>
            <p className={clsx('mb-4')}>可以用右邊的表單去聯繫我</p>
            <p className={clsx('mb-4')}>我會盡快回覆您</p>
          </div>
        </div>

        <div
          className={clsx(
            'flex min-h-screen flex-1 flex-col items-center justify-start',
          )}
        >
          <form onSubmit={handleSubmit(sendEmailHandler)} className="w-full">
            {CONTACT_ME_INPUTS.map((input) => (
              <div key={input.name} className={clsx('w-ful mb-4')}>
                <label
                  className={clsx('mb-2 block text-sm font-bold text-gray-400')}
                  htmlFor="name"
                >
                  {input.label}
                </label>
                {input.type === 'text' || input.type === 'email' ? (
                  <input
                    type={input.type}
                    {...register(input.name, {
                      required: true,
                      pattern:
                        input.type === 'email' ? /^\S+@\S+$/i : undefined,
                    })}
                    placeholder={`Enter your ${input.name}`}
                    className={clsx(
                      'h-12 w-11/12 rounded-md text-base font-semibold shadow-sm shadow-gray-200',
                      'mb-2 border-none bg-slate-600 text-black outline-none',
                    )}
                  />
                ) : (
                  <textarea
                    placeholder={`Enter your ${input.name}`}
                    {...register('Message')}
                    className={clsx(
                      'h-20 w-11/12 rounded-md text-base font-semibold shadow-sm shadow-gray-200',
                      'mb-2 resize-none border-none bg-slate-600 text-black outline-none',
                    )}
                  />
                )}
              </div>
            ))}

            <Button
              type="submit"
              className={clsx(
                'h-14 w-11/12 rounded-3xl border-x-indigo-400 shadow-sm shadow-gray-200',
                'inline-block px-2 py-3 font-semibold tracking-wide no-underline',
              )}
              onClick={() => {}}
            >
              送出
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
