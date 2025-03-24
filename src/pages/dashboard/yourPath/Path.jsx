import { Link } from "react-router-dom";
import { Progress } from "./components/Progress";
import { Icon } from "@iconify/react/dist/iconify.js";

const Path = () => {
  const modules = [
    {
      id: 1,
      title: "Introduction to Web Development",
      description: "Learn the fundamentals of HTML, CSS, and JavaScript",
      lessons: 5,
      progress: 100,
      completed: true,
    },
    {
      id: 2,
      title: "CSS Frameworks and Tools",
      description: "Modern styling techniques with Tailwind CSS",
      lessons: 6,
      progress: 100,
      completed: true,
    },
    {
      id: 3,
      title: "JavaScript Fundamentals",
      description: "Core concepts in JavaScript programming",
      lessons: 6,
      progress: 30,
      completed: false,
    },
    {
      id: 4,
      title: "React Basics",
      description: "Getting started with React development",
      lessons: 5,
      progress: 0,
      completed: false,
    },
  ];

  return (
    <div className="flex min-h-screen bg-white p-6">
      <div className="flex-1">
        <div className="mb-6">
          <h1 className="text-2xl font-bold font-epilogue">
            Your Learning Path
          </h1>
          <p className="text-gray300 mt-1 text-sm">
            Track your progress through the curriculum
          </p>
        </div>

        <div className="mb-8 border border-gray50 rounded-lg bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold font-epilogue">
            Overall Progress
          </h2>
          <p className="text-sm text-gray300 mt-1">
            You&apos;re making great progress on your learning journey
          </p>
          <div className="space-y-2 mt-4">
            <div className="flex justify-between text-sm font-medium">
              <span>51% Complete</span>
              <span className="text-gray300">2 of 4 modules</span>
            </div>
            <Progress value={51} className="h-2" />
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-3 font-epilogue">
          Quick Access
        </h3>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="border border-gray50 rounded-lg bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold font-epilogue">Latest Quiz</h3>
            <p className="text-sm text-gray300 mt-2 ">
              Test your knowledge on web development fundamentals.
            </p>
            <div className="mt-4">
              <Link
                to="dashboard/quiz/1"
                className="gap-2 font-epilogue text-sm inline-flex border border-gray100 py-2 px-2 rounded-md hover:bg-gray50"
              >
                <Icon icon="mdi:quiz-outline" className="h-4 w-4" />
                Take Quiz
              </Link>
            </div>
          </div>

          <div className="border border-gray50 rounded-lg bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Featured Article</h3>
            <p className="text-sm text-gray300 mt-2">
              Understanding Modern Web Development.
            </p>
            <div className="mt-4">
              <Link
                to="/dashboard/article/1"
                className="gap-2 font-epilogue text-sm inline-flex  border border-gray100 py-2 px-2 rounded-md hover:bg-gray50"
              >
                <Icon icon="mage:book" className="h-4 w-4" />
                Read Article
              </Link>
            </div>
          </div>

          <div className="border border-gray50 rounded-lg bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Continue Learning</h3>
            <p className="text-sm text-gray300 mt-2">
              Resume where you left off in CSS Frameworks.
            </p>
            <div className="mt-4">
              <Link
                to="/lesson/2"
                className="gap-2 font-epilogue text-sm inline-flex  border border-gray100 py-2 px-2 rounded-md hover:bg-gray50"
              >
                <Icon icon="mdi:arrow-right" className="h-4 w-4" />
                Continue
              </Link>
            </div>
          </div>
        </section>

        <div className="space-y-6">
          {modules.map((module) => (
            <div
              key={module.id}
              className="relative overflow-hidden border border-gray50 rounded-lg bg-card p-6 shadow shadow-gray50"
            >
              {module.completed && (
                <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 text-xs font-medium rounded-bl">
                  Completed
                </div>
              )}
              <h3 className="text-xl font-semibold flex items-center gap-2">
                {module.completed && (
                  <Icon
                    icon="mdi:check-circle"
                    className="h-5 w-5 text-green-500"
                  />
                )}
                {module.title}
              </h3>
              <p className="text-sm text-gray300 mt-1">{module.description}</p>
              <div className="flex justify-between items-center mt-4 text-sm text-gray300">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:clock" className="h-4 w-4" />
                  <span>{module.lessons} lessons</span>
                </div>
                <div className="w-1/2">
                  <div className="flex justify-between font-medium">
                    <span>{module.progress}% complete</span>
                  </div>
                  <Progress value={module.progress} className="h-2" />
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <Link
                  to={`/lesson/${module.id}`}
                  className="gap-2 font-epilogue text-sm inline-flex  border border-gray100 py-2 px-2 rounded-md hover:bg-gray50"
                >
                  <Icon icon="mage:book" className="h-4 w-4" />
                  View Lessons
                </Link>
                <Link
                  to={`/dashboard/quiz/${module.id}`}
                  className="gap-2 font-epilogue text-sm inline-flex  border border-gray100 py-2 px-2 rounded-md hover:bg-gray50"
                >
                  <Icon icon="mdi:help-circle" className="h-4 w-4" />
                  Take Quiz
                </Link>
                {!module.completed && module.progress > 0 && (
                  <Link to={`/lesson/${module.id}`} className="gap-2 ml-auto font-epilogue text-sm inline-flex bg-blue300 text-white  border border-gray100 py-2 px-2 rounded-md hover:bg-white hover:text-blue300 hover:border-blue300">
                    Continue
                  </Link>
                )}
                {!module.completed && module.progress === 0 && (
                  <Link to={`/lesson/${module.id}`} className="gap-2 ml-auto font-epilogue text-sm inline-flex bg-blue300 text-white   border border-gray100 py-2 px-2 rounded-md hover:bg-white hover:text-blue300 hover:border-blue300">
                    Start Module
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Path;
