import  { useState } from "react";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify";

const AdminCourses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const courses = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      category: "Development",
      level: "Beginner",
      thumbnail: "https://via.placeholder.com/150",
      duration: "12 weeks",
      price: "$499",
      enrolled: 1245,
      rating: 4.8,
      featured: true,
      status: "active",
      createdAt: "2023-01-15",
    },
    {
      id: 2,
      title: "Advanced JavaScript Masterclass",
      category: "Development",
      level: "Advanced",
      thumbnail: "https://via.placeholder.com/150",
      duration: "8 weeks",
      price: "$349",
      enrolled: 876,
      rating: 4.7,
      featured: false,
      status: "active",
      createdAt: "2023-02-10",
    },
    {
      id: 3,
      title: "UI/UX Design Essentials",
      category: "Design",
      level: "Intermediate",
      thumbnail: "https://via.placeholder.com/150",
      duration: "10 weeks",
      price: "$399",
      enrolled: 932,
      rating: 4.9,
      featured: true,
      status: "active",
      createdAt: "2023-03-05",
    },
    {
      id: 4,
      title: "Data Science Fundamentals",
      category: "Data",
      level: "Beginner",
      thumbnail: "https://via.placeholder.com/150",
      duration: "14 weeks",
      price: "$599",
      enrolled: 754,
      rating: 4.6,
      featured: false,
      status: "active",
      createdAt: "2023-01-22",
    },
    {
      id: 5,
      title: "Machine Learning with Python",
      category: "Data",
      level: "Advanced",
      thumbnail: "https://via.placeholder.com/150",
      duration: "16 weeks",
      price: "$699",
      enrolled: 542,
      rating: 4.8,
      featured: true,
      status: "active",
      createdAt: "2023-03-15",
    },
    {
      id: 6,
      title: "Mobile App Development with React Native",
      category: "Development",
      level: "Intermediate",
      thumbnail: "https://via.placeholder.com/150",
      duration: "10 weeks",
      price: "$449",
      enrolled: 687,
      rating: 4.7,
      featured: false,
      status: "draft",
      createdAt: "2023-04-01",
    },
    {
      id: 7,
      title: "Cloud Computing Fundamentals",
      category: "Infrastructure",
      level: "Beginner",
      thumbnail: "https://via.placeholder.com/150",
      duration: "8 weeks",
      price: "$299",
      enrolled: 421,
      rating: 4.5,
      featured: false,
      status: "inactive",
      createdAt: "2023-02-28",
    },
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      categoryFilter === "all" ||
      course.category.toLowerCase() === categoryFilter.toLowerCase();
    const matchesStatus =
      statusFilter === "all" || course.status === statusFilter;

    return matchesSearch && matchesCategory && matchesStatus;
  });


  

  return (
    <div>
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Resources</h1>
          <p className="text-gray-600">
            Manage videos, content, and articles
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition-colors"
          >
            <Icon icon="tabler:plus" className="h-5 w-5 mr-2" />
            Add new Resource
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-1">
            <Icon
              icon="tabler:search"
              className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
            />
            <input
              type="text"
              placeholder="Search courses..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div>
              <label
                htmlFor="categoryFilter"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Category
              </label>
              <select
                id="categoryFilter"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="development">Development</option>
                <option value="design">Design</option>
                <option value="data">Data</option>
                <option value="infrastructure">Infrastructure</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="statusFilter"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Status
              </label>
              <select
                id="statusFilter"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="draft">Draft</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Courses grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow overflow-hidden"
          >
            <div className="relative h-48 bg-gray-200">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    course.status === "active"
                      ? "bg-green-100 text-green-800"
                      : course.status === "draft"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {course.status.charAt(0).toUpperCase() +
                    course.status.slice(1)}
                </span>
              </div>
              {course.featured && (
                <div className="absolute top-2 left-2">
                  <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium">
                    Featured
                  </span>
                </div>
              )}
            </div>

            <div className="p-4">
              <h3 className="font-medium text-lg text-gray-900 mb-1">
                {course.title}
              </h3>
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-gray-600">{course.category}</span>
              </div>

              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <Icon
                    icon="tabler:users"
                    className="h-4 w-4 text-gray-500 mr-1"
                  />
                  <span className="text-sm text-gray-600">
                    {course.enrolled} enrolled
                  </span>
                </div>
                <div className="flex items-center">
                  <Icon
                    icon="tabler:star"
                    className="h-4 w-4 text-yellow-400 mr-1"
                  />
                  <span className="text-sm text-gray-600">{course.rating}</span>
                </div>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => toast.info(`Editing ${course.title}`)}
                  className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <Icon icon="tabler:edit" className="h-4 w-4 mr-1" />
                  Edit
                </button>
                <div className="relative group">
                  <button className="px-3 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors">
                    <Icon icon="tabler:dots-vertical" className="h-4 w-4" />
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                    <button
                      onClick={() => handleFeatureToggle(course.id)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {course.featured
                        ? "Remove from Featured"
                        : "Add to Featured"}
                    </button>
                    <button
                      onClick={() => handleStatusChange(course.id, "active")}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Set as Active
                    </button>
                    <button
                      onClick={() => handleStatusChange(course.id, "draft")}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Set as Draft
                    </button>
                    <button
                      onClick={() => handleStatusChange(course.id, "inactive")}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Set as Inactive
                    </button>
                    <button
                      onClick={() => handleDeleteCourse(course.id)}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {filteredCourses.length === 0 && (
          <div className="col-span-full text-center py-10">
            <Icon
              icon="tabler:book-off"
              className="h-10 w-10 text-gray-400 mx-auto mb-2"
            />
            <h3 className="text-lg font-medium text-gray-900">
              No courses found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>

    </div>
  );
};

export default AdminCourses;
