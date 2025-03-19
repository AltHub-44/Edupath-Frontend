import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Header from "../components/header";
import brainImage from "@/assets/brain.png";
import mentra from "@/assets/mentra.png";

const tasks = [
  {
    id: 1,
    text: "Watch a video on fractions before Friday",
    type: "video",
    link: "/tasks/video/1",
  },
  {
    id: 2,
    text: "Answer 3 quiz questions about basic algebra",
    type: "quiz",
    link: "/tasks/quiz/2",
  },
  {
    id: 3,
    text: "Read an article on problem-solving strategies and summarize it",
    type: "article",
    link: "/tasks/article/3",
  },
];

const taskStyles = {
  video: { bgColor: "bg-[#2563EB]", icon: "mdi:video" },
  quiz: { bgColor: "bg-[#10B981]", icon: "mdi:help-circle" },
  article: { bgColor: "bg-[#F59E0B]", icon: "mdi:book-open" },
};

const Dashboard = () => {
  return (
    <div>
      <main className="px-4 sm:px-6 lg:pr-8 mt-4">
        <section className="flex flex-col lg:flex-row justify-between items-center bg-green200 rounded-2xl py-6 px-6 sm:px-8">
          <div className="text-white text-left">
            <h4 className="text-lg">Welcome 👋</h4>
            <h2 className="text-2xl sm:text-3xl mt-1">Mike Adewale</h2>
            <p className="mt-6 text-base sm:text-lg">
              We are happy to have you onboard{" "}
            </p>
            <p className="text-sm sm:text-base">
              Let’s kick-start your personalized learning journey.
            </p>
          </div>
          <img
            src={brainImage}
            alt="brain"
            className="w-32 sm:w-40 lg:w-auto hidden lg:block"
          />
        </section>

        <section className="mt-8 flex flex-col lg:flex-row gap-4">
          <div className="bg-white w-full lg:w-7/12 p-4 sm:p-5 rounded-2xl">
            <p className="text-lg font-semibold font-epilogue">Your Profile is ready</p>

            <div className="bg-blue400 text-white mt-4 p-3 rounded-lg">
              <h3 className="font-epilogue">Meet Your Mentor</h3>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end lg:gap-4 mt-4">
                <p className="text-sm font-light sm:w-8/12">
                  Hey! You’ve been assigned a new mentor, Mr. Yusuf. Your first
                  chat with him is coming up soon—don’t forget to bring your
                  questions!
                </p>
                <Link
                  to="/mentor"
                  className="mt-3 sm:mt-0 flex items-center gap-2 text-xs bg-red100 p-2 rounded"
                >
                  <Icon icon="hugeicons:mentoring" className="text-lg" /> Go to
                  Mentor Profile
                </Link>
              </div>
            </div>

            <div className="bg-blue400 text-white mt-4 p-3 rounded-lg">
              <h3 className="font-epilogue">Kickstart Your Learning</h3>
              <ul className="mt-3 space-y-3">
                {tasks.map((task) => {
                  const { bgColor, icon } = taskStyles[task.type] || {};
                  return (
                    <li
                      key={task.id}
                      className="flex justify-between items-center text-sm font-light"
                    >
                      <span>✔ {task.text}</span>
                      <Link
                        to={task.link}
                        className={`flex items-center gap-2 text-white px-3 py-1 rounded ${bgColor}`}
                      >
                        <Icon icon={icon} className="text-lg" /> Open
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-4">
                <Link
                  to="/tasks"
                  className="inline-flex items-center gap-2 text-sm bg-red100 px-2 py-1 rounded"
                >
                  <Icon icon="mdi:clipboard-list-outline" className="text-lg" />{" "}
                  View All Tasks
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white w-full lg:w-5/12 rounded-2xl mt-4 lg:mt-0 p-4 sm:p-6">
            <h2 className="text-lg font-semibold font-epilogue mb-6 lg:mb-10">Meet Mentra</h2>
            <div className="flex justify-center">
              <img src={mentra} alt="" className="w-8/12 rounded" />
            </div>
            <p className="mt-6 text-sm leading-6 text-center lg:text-left">
              Hi! I’m Mentra, your AI mentor. Your profile is all set up! 🎉
              Now, let’s kick-start your learning journey with personalized
              lessons, career advice, and expert guidance tailored just for you.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link
                to="/mentra"
                className="inline-block text-center mt-6 text-sm px-3 bg-blue300 hover:bg-white hover:text-blue300 hover:border hover:border-blue300 text-white py-2 rounded"
              >
                Chat With Mentra
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
