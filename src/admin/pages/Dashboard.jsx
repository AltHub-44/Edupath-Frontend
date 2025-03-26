
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  // Mock data for the dashboard
  const stats = [
    { label: 'Total Users', value: 2458, change: '+12%', icon: 'tabler:users', color: 'bg-blue-500' },
    { label: 'Active Courses', value: 42, change: '+3', icon: 'tabler:book', color: 'bg-green-500' },
    { label: 'Mentors', value: 86, change: '+5%', icon: 'tabler:user-check', color: 'bg-purple-500' },
    { label: 'Revenue', value: '$12,450', change: '+18%', icon: 'tabler:currency-dollar', color: 'bg-amber-500' },
  ];
  
  const recentUsers = [
    { id: 1, name: 'James Wilson', email: 'james@example.com', role: 'Student', joined: '2 hours ago' },
    { id: 2, name: 'Sophia Garcia', email: 'sophia@example.com', role: 'Student', joined: '5 hours ago' },
    { id: 3, name: 'Liam Johnson', email: 'liam@example.com', role: 'Mentor', joined: 'Yesterday' },
    { id: 4, name: 'Emma Martinez', email: 'emma@example.com', role: 'Student', joined: 'Yesterday' },
  ];
  
  const popularCourses = [
    { id: 1, title: 'Introduction to Web Development', students: 342, rating: 4.8 },
    { id: 2, title: 'Advanced JavaScript Concepts', students: 254, rating: 4.7 },
    { id: 3, title: 'UI/UX Design Fundamentals', students: 198, rating: 4.9 },
    { id: 4, title: 'Python for Data Science', students: 287, rating: 4.6 },
  ];
  
  const systemNotifications = [
    { type: 'warning', message: 'Storage space is running low (15% remaining)', time: '2 hours ago' },
    { type: 'success', message: 'System update completed successfully', time: '1 day ago' },
    { type: 'error', message: 'Failed login attempts detected from IP 192.168.1.4', time: '2 days ago' },
  ];
  
  const notificationIcons = {
    warning: 'tabler:alert-triangle',
    success: 'tabler:circle-check',
    error: 'tabler:alert-circle',
  };
  
  const notificationColors = {
    warning: 'text-amber-500',
    success: 'text-green-500',
    error: 'text-red-500',
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Welcome back, Alex. Here's what's happening with your platform today.</p>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start mb-4">
              <div className={`${stat.color} text-white p-3 rounded-lg`}>
                <Icon icon={stat.icon} className="h-6 w-6" />
              </div>
              <span className="text-green-500 bg-green-50 px-2 py-1 rounded text-xs font-medium">
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold">{stat.value}</h3>
            <p className="text-gray-600 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Recent Users */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="font-bold text-lg text-gray-800">Recent Users</h2>
            <Link to="/admin-dashboard/users" className="text-blue-600 hover:text-blue-800 text-sm flex items-center">
              View All 
              <Icon icon="tabler:chevron-right" className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joined</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentUsers.map(user => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-medium mr-3">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        user.role === 'Mentor' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.joined}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">
                        <Icon icon="tabler:edit" className="h-4 w-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Icon icon="tabler:trash" className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Popular Courses */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="font-bold text-lg text-gray-800">Popular Courses</h2>
            <Link to="/admin-dashboard/courses" className="text-blue-600 hover:text-blue-800 text-sm flex items-center">
              View All 
              <Icon icon="tabler:chevron-right" className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="p-4">
            {popularCourses.map(course => (
              <div key={course.id} className="mb-4 last:mb-0">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-gray-800">{course.title}</h3>
                  <div className="flex items-center text-amber-500">
                    <Icon icon="tabler:star-filled" className="h-4 w-4 mr-1" />
                    <span className="text-sm">{course.rating}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">{course.students} students enrolled</span>
                  <button className="text-blue-600 hover:text-blue-800">View Details</button>
                </div>
                <div className="mt-2 bg-gray-200 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 rounded-full" 
                    style={{ width: `${(course.students / 400) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* System Notifications */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h2 className="font-bold text-lg text-gray-800">System Notifications</h2>
        </div>
        <div className="p-4">
          {systemNotifications.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {systemNotifications.map((notification, index) => (
                <div key={index} className="py-3 flex items-start">
                  <div className={`p-2 rounded-lg mr-3 ${notificationColors[notification.type]} bg-opacity-10`}>
                    <Icon icon={notificationIcons[notification.type]} className={`h-5 w-5 ${notificationColors[notification.type]}`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800">{notification.message}</p>
                    <p className="text-gray-500 text-sm">{notification.time}</p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Icon icon="tabler:x" className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6">
              <p className="text-gray-500">No system notifications.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
