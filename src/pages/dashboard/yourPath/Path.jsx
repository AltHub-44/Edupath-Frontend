import { Icon } from "@iconify/react/dist/iconify.js";
import { Progress } from "./components/Progress";

const Path = () => {
  const paths = [
    {
      id: 1,
      title: "Mathematics Fundamentals",
      description: "Master the basics of algebra, geometry, and calculus",
      progress: 75,
      modules: [
        { title: "Algebra Foundations", completed: true },
        { title: "Geometry Basics", completed: true },
        { title: "Introduction to Calculus", completed: false },
        { title: "Advanced Problem Solving", completed: false },
      ],
    },
    {
      id: 2,
      title: "Scientific Inquiry",
      description:
        "Explore scientific methods and key concepts across disciplines",
      progress: 50,
      modules: [
        { title: "Scientific Method", completed: true },
        { title: "Physics Principles", completed: true },
        { title: "Chemistry Fundamentals", completed: false },
        { title: "Biology Basics", completed: false },
      ],
    },
    {
      id: 3,
      title: "Literature & Composition",
      description: "Develop critical reading and effective writing skills",
      progress: 25,
      modules: [
        { title: "Critical Reading Strategies", completed: true },
        { title: "Essay Structure", completed: false },
        { title: "Literary Analysis", completed: false },
        { title: "Creative Writing", completed: false },
      ],
    },
  ];

  return (
    <div className=" min-h-screen bg-gray-50 w-full">
      <div>
        <div className=" px-4 sm:px-6 py-4 sm:py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Your Learning Path</h1>
            <p className="text-gray-500 mt-2">
              Track your educational journey and see what&apos;s next
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-blue-800">Completed</h3>
                <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                  4 modules
                </span>
              </div>
              <Progress value={40} className="h-2 mb-2" />
              <p className="text-sm text-blue-600">40% of your journey</p>
            </div>

            <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-amber-800">In Progress</h3>
                <span className="bg-amber-200 text-amber-800 px-2 py-1 rounded text-sm font-medium">
                  3 modules
                </span>
              </div>
              <Progress value={30} className="h-2 bg-amber-200 mb-2">
                <div
                  className="h-full bg-amber-500 transition-all"
                  style={{ transform: `translateX(-${100 - 30}%)` }}
                />
              </Progress>
              <p className="text-sm text-amber-600">30% of your journey</p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-green-800">Upcoming</h3>
                <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-sm font-medium">
                  5 modules
                </span>
              </div>
              <Progress value={30} className="h-2 bg-green-200 mb-2">
                <div
                  className="h-full bg-green-500 transition-all"
                  style={{ transform: `translateX(-${100 - 30}%)` }}
                />
              </Progress>
              <p className="text-sm text-green-600">30% remaining</p>
            </div>
          </div>

          <div className="space-y-8">
            {paths.map((path) => (
              <div
                key={path.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="p-6 border-b border-gray-100">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h2 className="text-xl font-bold">{path.title}</h2>
                      <p className="text-gray-500 mt-1">{path.description}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-32">
                        <Progress value={path.progress} className="h-2 mb-1" />
                        <p className="text-xs text-gray-500 text-right">
                          {path.progress}% Complete
                        </p>
                      </div>
                      <button>
                        Continue{" "}
                        <Icon
                          icon="formkit:arrowright"
                          size={16}
                          className="ml-1"
                        />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6">
                  <h3 className="font-medium mb-4 text-gray-700 flex items-center">
                    <Icon icon="ri:book-open-line" size={16} className="mr-2" />{" "}
                    Modules
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {path.modules.map((module, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100"
                      >
                        {module.completed ? (
                          <Icon
                            icon="material-symbols:check-circle-outline-rounded"
                            size={18}
                            className="text-green-500"
                          />
                        ) : (
                          <Icon
                            icon="material-symbols-light:circle-outline"
                            size={18}
                            className="text-gray-300"
                          />
                        )}
                        <span
                          className={`
                          font-medium",
                          ${
                            module.completed ? "text-gray-700" : "text-gray-500"
                          }`}
                        >
                          {module.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Path;
