
import { useState } from 'react';
import { Icon } from '@iconify/react';

const AdminCourses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [view, setView] = useState('grid');
  
  // Mock data for courses
  const courses = [
    {
      id: 1,
      title: 'Introduction to Web Development',
      instructor: 'Liam Johnson',
      category: 'Development',
      level: 'Beginner',
      students: 342,
      rating: 4.8,
      published: true,
      image: 'https://via.placeholder.com/300x200/6366f1/FFFFFF?text=Web+Dev',
      lastUpdated: '2023-07-15',
    },
    {
      id: 2,
      title: 'Advanced JavaScript Concepts',
      instructor: 'Sophia Garcia',
      category: 'Development',
      level: 'Advanced',
      students: 254,
      rating: 4.7,
      published: true,
      image: 'https://via.placeholder.com/300x200/8b5cf6/FFFFFF?text=JavaScript',
      lastUpdated: '2023-06-22',
    },
    {
      id: 3,
      title: 'UI/UX Design Fundamentals',
      instructor: 'Noah Brown',
      category: 'Design',
      level: 'Intermediate',
      students: 198,
      rating: 4.9,
      published: true,
      image: 'https://via.placeholder.com/300x200/ec4899/FFFFFF?text=UI/UX',
      lastUpdated: '2023-08-03',
    },
    {
      id: 4,
      title: 'Python for Data Science',
      instructor: 'Emma Martinez',
      category: 'Data Science',
      level: 'Intermediate',
      students: 287,
      rating: 4.6,
      published: true,
      image: 'https://via.placeholder.com/300x200/06b6d4/FFFFFF?text=Python',
      lastUpdated: '2023-05-11',
    },
    {
      id: 5,
      title: 'Mobile App Development with React Native',
      instructor: 'William Davis',
      category: 'Mobile',
      level: 'Intermediate',
      students: 176,
      rating: 4.5,
      published: true,
      image: 'https://via.placeholder.com/300x200/0ea5e9/FFFFFF?text=React+Native',
      lastUpdated: '2023-07-28',
    },
    {
      id: 6,
      title: 'Blockchain Fundamentals',
      instructor: 'Olivia Taylor',
      category: 'Blockchain',
      level: 'Beginner',
      students: 89,
      rating: 4.3,
      published: false,
      image: 'https://via.placeholder.com/300x200/14b8a6/FFFFFF?text=Blockchain',
      lastUpdated: '2023-08-10',
    },
  ];
  
  // Filter courses based on search and filter
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filter === 'all') return matchesSearch;
    if (filter === 'published') return matchesSearch && course.published;
    if (filter === 'draft') return matchesSearch && !course.published;
    
    return matchesSearch;
  });
  
  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  // Get category badge color
  const getCategoryColor = (category) => {
    switch(category.toLowerCase()) {
      case 'development':
        return 'bg-blue-100 text-blue-800';
      case 'design':
        return 'bg-pink-100 text-pink-800';
      case 'data science':
        return 'bg-cyan-100 text-cyan-800';
      case 'mobile':
        return 'bg-sky-100 text-sky-800';
      case 'blockchain':
        return 'bg-teal-100 text-teal-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  // Get level badge color
  const getLevelColor = (level) => {
    switch(level.toLowerCase()) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-amber-100 text-amber-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Courses Management</h1>
          <p className="text-gray-600">Create, manage and monitor all courses on the platform</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition-colors">
            <Icon icon="tabler:plus" className="h-5 w-5 mr-2" />
            Create New Course
          </button>
        </div>
      </div>
      
      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="relative flex-1">
            <Icon icon="tabler:search" className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search courses..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <button 
              className={`px-4 py-2 rounded-lg ${filter === 'all' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={`px-4 py-2 rounded-lg ${filter === 'published' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}
              onClick={() => setFilter('published')}
            >
              Published
            </button>
            <button 
              className={`px-4 py-2 rounded-lg ${filter === 'draft' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}
              onClick={() => setFilter('draft')}
            >
              Draft
            </button>
          </div>
          
          <div className="flex items-center bg-gray-100 rounded-lg p-1">
            <button
              className={`p-2 rounded ${view === 'grid' ? 'bg-white shadow' : ''}`}
              onClick={() => setView('grid')}
            >
              <Icon icon="tabler:layout-grid" className="h-5 w-5 text-gray-700" />
            </button>
            <button
              className={`p-2 rounded ${view === 'list' ? 'bg-white shadow' : ''}`}
              onClick={() => setView('list')}
            >
              <Icon icon="tabler:list" className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Courses Grid or List */}
      {filteredCourses.length > 0 ? (
        view === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map(course => (
              <div key={course.id} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="relative">
                  <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-2 right-2">
                    {course.published ? (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        Published
                      </span>
                    ) : (
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                        Draft
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">By {course.instructor}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(course.category)}`}>
                      {course.category}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${getLevelColor(course.level)}`}>
                      {course.level}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center">
                      <Icon icon="tabler:users" className="h-4 w-4 text-gray-500 mr-1" />
                      <span className="text-sm text-gray-600">{course.students} students</span>
                    </div>
                    <div className="flex items-center text-amber-500">
                      <Icon icon="tabler:star-filled" className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-500 mb-4">
                    Last updated: {formatDate(course.lastUpdated)}
                  </div>
                  
                  <div className="flex justify-between">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      View Details
                    </button>
                    <div>
                      <button className="text-gray-500 hover:text-gray-700 p-1 rounded hover:bg-gray-100 mr-1">
                        <Icon icon="tabler:edit" className="h-4 w-4" />
                      </button>
                      <button className="text-gray-500 hover:text-gray-700 p-1 rounded hover:bg-gray-100">
                        <Icon icon="tabler:dots-vertical" className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Course
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Instructor
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Students
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Rating
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredCourses.map(course => (
                    <tr key={course.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded overflow-hidden">
                            <img src={course.image} alt={course.title} className="h-10 w-10 object-cover" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{course.title}</div>
                            <div className="flex flex-wrap gap-1 mt-1">
                              <span className={`text-xs px-1.5 py-0.5 rounded-full ${getCategoryColor(course.category)}`}>
                                {course.category}
                              </span>
                              <span className={`text-xs px-1.5 py-0.5 rounded-full ${getLevelColor(course.level)}`}>
                                {course.level}
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {course.instructor}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {course.students}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-amber-500">
                          <Icon icon="tabler:star-filled" className="h-4 w-4 mr-1" />
                          <span className="text-sm font-medium">{course.rating}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {course.published ? (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            Published
                          </span>
                        ) : (
                          <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                            Draft
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">
                          View
                        </button>
                        <button className="text-blue-600 hover:text-blue-900 mr-3">
                          Edit
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
                          <Icon icon="tabler:dots-vertical" className="h-5 w-5 inline" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      ) : (
        <div className="bg-white rounded-lg shadow p-10 text-center">
          <Icon icon="tabler:book-off" className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-1">No courses found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default AdminCourses;
