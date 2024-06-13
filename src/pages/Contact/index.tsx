/** @format */

import { FunctionComponent } from "react";
import { NavigationBar } from "../../compoment";
import clsx from "clsx";

interface contactProps {}

const Contact: FunctionComponent<contactProps> = () => {
  return (
    <div className="flex flex-col items-start justify-start w-screen min-h-screen bg-slate-700 overflow-y-scroll">
      <NavigationBar />
      <section className="flex w-full mt-16 mb-10 space-y-10 px-4">
        <div className={clsx("flex-1 w-full h-ful flex flex-col p-2 m-2")}>
          {/* 文字區 */}
          <div className={clsx("mb-8 text-start")}>
            {/* 標題 */}
            <h2 className="text-7xl font-semibold mb-4 text-white">Contact </h2>
            <h2 className="text-7xl font-semibold mb-4 text-sky-600">me </h2>
          </div>
          {/* 內文區 */}

          <div className={clsx("text-lg text-white mb-8")}>
            <h2 className={clsx("text-2xl mb-4")}>let's work together</h2>

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
            <p className={clsx("mb-4")}>可以用右邊的表單去聯繫我</p>
            <p className={clsx("mb-4")}>我會盡快回覆您</p>
          </div>
        </div>

        <div
          className={clsx(
            "flex flex-col  flex-1 items-center justify-start min-h-screen"
          )}
        >
          <form action="" className="w-full">
            <div className={clsx("mb-4 w-ful")}>
              <label
                className={clsx("block text-gray-400 text-sm font-bold mb-2")}
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                className={clsx(
                  "w-full h-12 rounded-md shadow-gray-200 shadow-sm"
                )}
              />
            </div>
            <div className={clsx("mb-4")}>
              <label
                className={clsx("block text-gray-400 text-sm font-bold mb-2")}
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                className={clsx(
                  "w-full h-12 rounded-md shadow-gray-200 shadow-sm"
                )}
              />
            </div>
            <div className={clsx("mb-4")}>
              <label
                className={clsx("block text-gray-400 text-sm font-bold mb-2")}
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                className={clsx(
                  "w-full h-12 rounded-md shadow-gray-200 shadow-sm"
                )}
              />
            </div>
            <div className={clsx("mb-4")}>
              <label
                className={clsx("block text-gray-400 text-sm font-bold mb-2")}
                htmlFor="message"
              >
                Message
              </label>
              <input
                type="text"
                name="message"
                className={clsx(
                  "w-full h-12 rounded-md shadow-gray-200 shadow-sm"
                )}
              />
            </div>

            <button
              type="submit"
              name="submit-Button"
              className={clsx(
                "w-full h-14 rounded-md border-x-indigo-400 shadow-gray-200 shadow-sm"
              )}
            >
              送出
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
