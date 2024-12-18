/** @format */

import { FunctionComponent } from 'react';
import { NavigationBar } from '../../compoment';
import {
  CONTACT_ME_INPUTS,
  Inputs,
} from '../../static/constant/data/ContactMeInput';
import { Button } from '../../compoment';
import clsx from 'clsx';
import emailjs from '@emailjs/browser';
import { useForm, SubmitHandler } from 'react-hook-form';

interface contactProps {}

const Contact: FunctionComponent<contactProps> = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const sendEmailHandler: SubmitHandler<Inputs> = (data) => {
    console.log(data);
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
        'NudTZXCk8kRq5mPQH'
      )
      .then(
        (result) => {
          alert('Email sent successfully!');
          window.location.reload();
          console.log(result.text);
        },
        (error) => {
          alert('Failed to send email. Please try again later.');
          console.log(error.text);
        }
      );
  };
  return (
    <div
      className={clsx(
        'flex sm:flex-col items-start justify-start',
        'w-full min-h-screen',
        'bg-gradient-to-b from-[#1f2937] to-[#111827]',
        'overflow-y-auto'
      )}
    >
      <NavigationBar />
      <section
        className={clsx(
          'flex sm:flex-row flex-col sm:w-full',
          'mt-20 sm:mt-14 mb-10 space-y-10 px-4',
          'backdrop-blur-md bg-white/5 rounded-lg p-8 shadow-xl',
          'max-w-7xl mx-auto'
        )}
      >
        <div className={clsx('flex-1 w-full h-full flex flex-col')}>
          {/* 文字區 */}
          <div className={clsx('mb-8 text-start')}>
            {/* 標題 */}
            <h2 className="text-7xl font-semibold mb-4 text-white">Contact </h2>
            <h2 className="text-7xl font-semibold mb-4 text-sky-600">Me </h2>
          </div>
          {/* 內文區 */}

          <div className={clsx('text-lg text-white mb-8')}>
            <h2 className={clsx('text-2xl mb-4')}>let's work together</h2>

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
            'flex flex-col  flex-1 items-center justify-start min-h-screen'
          )}
        >
          <form onSubmit={handleSubmit(sendEmailHandler)} className="w-full">
            {CONTACT_ME_INPUTS.map((input) => (
              <div className={clsx('mb-4 w-ful')}>
                <label
                  className={clsx('block text-gray-400 text-sm font-bold mb-2')}
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
                      'w-11/12 h-12 rounded-md shadow-gray-200 shadow-sm font-semibold text-base',
                      'border-none outline-none bg-slate-600 text-black mb-2'
                    )}
                  />
                ) : (
                  <textarea
                    placeholder={`Enter your ${input.name}`}
                    {...register('Message')}
                    className={clsx(
                      'w-11/12 h-20 rounded-md shadow-gray-200 shadow-sm font-semibold text-base',
                      'border-none outline-none bg-slate-600 text-black mb-2 resize-none'
                    )}
                  />
                )}
              </div>
            ))}

            <Button
              type="submit"
              className={clsx(
                'w-11/12 h-14 rounded-3xl border-x-indigo-400 shadow-gray-200 shadow-sm',
                'inline-block px-2 py-3 no-underline tracking-wide font-semibold'
              )}
              onClickEvent={() => {}}
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
