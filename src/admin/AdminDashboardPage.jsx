
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { format } from 'date-fns';
import Sidebar from '../components/Sidebar';
import { useIsMobile } from '../hooks/use-mobile';
import { toast } from 'react-toastify';

const AdminDashboardPage = () => {
  const isMobile = useIsMobile();
  const today = new Date();
  
  // Sample data
  const users = [
    { 
      id: 1, 
      name: "Alex Johnson", 
      email: "alex.j@example.com",
      role: "student",
      joinDate: "2023-06-15T10:30:00",
      status: "active", 
      avatar: "/lovable-uploads/63aab59d-bddb-43b1-963c-ab6f53489f3e.png",
    },
    { 
      id: 2, 
      name: "Samantha Lee", 
      email: "samantha.lee@example.com",
      role: "student",
      joinDate: "2023-07-02T14:45:00",
      status: "active", 
      avatar: "https://i.pravatar.cc/150?img=32",
    },
    { 
      id: 3, 
      name: "Dr. Michael Chen", 
      email: "m.chen@example.com",
      role: "mentor",
      joinDate: "2023-04-18T09:15:00",
      status: "active", 
      avatar: "https://i.pravatar.cc/150?img=68",
    },
    { 
      id: 4, 
      name: "Emily Wilson", 
      email: "e.wilson@example.com",
      role: "student",
      joinDate: "2023-08-01T16:20:00",
      status: "pending", 
      avatar: "https://i.pravatar.cc/150?img=47",
    },
    { 
      id: 5, 
      name: "Professor James Harris", 
      email: "j.harris@example.com",
      role: "mentor",
      joinDate: "2023-05-11T11:30:00",
      status: "active", 
      avatar: "https://i.pravatar.cc/150?img=51",
    },
  ];
  
  const courses = [
    { 
      id: 101, 
      title: "Web Development Fundamentals", 
      students: 243,
      mentors: 3,
      modules: 12,
      status: "active", 
      lastUpdated: "2023-07-28T14:30:00",
    },
    { 
      id: 102, 
      title: "Data Science and Machine Learning", 
      students: 178,
      mentors: 4,
      modules: 10,
      status: "active", 
      lastUpdated: "2023-08-05T09:45:00",
    },
    { 
      id: 103, 
      title: "Mobile App Development", 
      students: 120,
      mentors: 2,
      modules: 8,
      status: "active", 
      lastUpdated: "2023-07-15T16:20:00",
    },
    { 
      id: 104, 
      title: "UI/UX Design Principles", 
      students: 95,
      mentors: 2,
      modules: 6,
      status: "draft", 
      lastUpdated: "2023-08-02T10:15:00",
    },
  ];
  
  const reports = [
    { 
      id: 201, 
      title: "Monthly User Growth", 
      type: "line",
      lastUpdated: "2023-08-07T12:30:00",
    },
    { 
      id: 202, 
      title: "Course Completion Rates", 
      type: "bar",
      lastUpdated: "2023-08-05T15:45:00",
    },
    { 
      id: 203, 
      title: "Mentor Performance", 
      type: "radar",
      lastUpdated: "2023-08-06T09:20:00",
    },
    { 
      id: 204, 
      title: "Revenue Breakdown", 
      type: "pie",
      lastUpdated: "2023-08-07T10:15:00",
    },
  ];
  
  const [activeTab, setActiveTab] = useState('dashboard');
  const [userSearchQuery, setUserSearchQuery] = useState('');
  const [courseSearchQuery, setCourseSearchQuery] = useState('');
  const [userRoleFilter, setUserRoleFilter] = useState('all');
  const [userStatusFilter, setUserStatusFilter] = useState('all');
  
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(userSearchQuery.toLowerCase()) || 
                         user.email.toLowerCase().includes(userSearchQuery.toLowerCase());
    const matchesRole = userRoleFilter === 'all' || user.role === userRoleFilter;
    const matchesStatus = userStatusFilter === 'all' || user.status === userStatusFilter;
    
    return matchesSearch && matchesRole && matchesStatus;
  });
  
  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(courseSearchQuery.toLowerCase())
  );
  
  const handleApproveUser = (userId) => {
    toast.success('User approved successfully');
    // Logic for approving user would go here
  };
  
  const handleRejectUser = (userId) => {
    toast.info('User rejected');
    // Logic for rejecting user would go here
  };
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className={`flex-1 ${isMobile ? "ml-0" : "ml-60"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-8 gap-4">
            <div>
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <p className="text-gray-500">{format(today, 'MMMM dd, yyyy')}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <button className="relative p-2 rounded-full hover:bg-gray-100">
                  <Icon icon="tabler:bell" className="w-5 h-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
              </div>
              <div className="h-10 w-10 rounded-full overflow-hidden border border-gray-200">
                <img 
                  src="/lovable-uploads/63aab59d-bddb-43b1-963c-ab6f53489f3e.png" 
                  alt="Admin" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Navigation Tabs */}
          <div className="mb-6 border-b border-gray-200">
            <nav className="flex flex-wrap -mb-px">
              <button 
                onClick={() => setActiveTab('dashboard')}
                className={`mr-4 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'dashboard' 
                    ? 'border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Dashboard
              </button>
              <button 
                onClick={() => setActiveTab('users')}
                className={`mr-4 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'users' 
                    ? 'border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Users
              </button>
              <button 
                onClick={() => setActiveTab('courses')}
                className={`mr-4 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'courses' 
                    ? 'border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Courses
              </button>
              <button 
                onClick={() => setActiveTab('reports')}
                className={`mr-4 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'reports' 
                    ? 'border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Reports
              </button>
              <button 
                onClick={() => setActiveTab('settings')}
                className={`mr-4 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'settings' 
                    ? 'border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Settings
              </button>
            </nav>
          </div>
          
          {/* Content based on active tab */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Stats Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Icon icon="tabler:users" className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Total Students</p>
                      <p className="text-2xl font-bold">836</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center">
                      <Icon icon="tabler:arrow-up-right" className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-green-500 text-sm">12%</span>
                      <span className="text-gray-500 text-sm ml-1">from last month</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Icon icon="tabler:user-check" className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Active Mentors</p>
                      <p className="text-2xl font-bold">24</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center">
                      <Icon icon="tabler:arrow-up-right" className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-green-500 text-sm">4%</span>
                      <span className="text-gray-500 text-sm ml-1">from last month</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Icon icon="tabler:book" className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Active Courses</p>
                      <p className="text-2xl font-bold">16</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center">
                      <Icon icon="tabler:arrow-up-right" className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-green-500 text-sm">2</span>
                      <span className="text-gray-500 text-sm ml-1">new this month</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="bg-yellow-100 p-3 rounded-full">
                      <Icon icon="tabler:certificate" className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Certificates Issued</p>
                      <p className="text-2xl font-bold">523</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center">
                      <Icon icon="tabler:arrow-up-right" className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-green-500 text-sm">18%</span>
                      <span className="text-gray-500 text-sm ml-1">from last month</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Recent Activity & Pending Approvals */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
                  <div className="space-y-4">
                    <div className="flex gap-4 p-3 rounded-lg hover:bg-gray-50">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <Icon icon="tabler:user-plus" className="h-5 w-5 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-900">
                          <span className="font-medium">Emily Wilson</span> registered as a new student
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {format(new Date('2023-08-07T14:23:00'), 'MMM d, h:mm a')}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 p-3 rounded-lg hover:bg-gray-50">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                          <Icon icon="tabler:check" className="h-5 w-5 text-green-600" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-900">
                          <span className="font-medium">Alex Johnson</span> completed "Advanced React Patterns" module
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {format(new Date('2023-08-07T11:05:00'), 'MMM d, h:mm a')}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 p-3 rounded-lg hover:bg-gray-50">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                          <Icon icon="tabler:certificate" className="h-5 w-5 text-purple-600" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-900">
                          <span className="font-medium">Samantha Lee</span> earned "Data Science Fundamentals" certificate
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {format(new Date('2023-08-06T15:47:00'), 'MMM d, h:mm a')}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 p-3 rounded-lg hover:bg-gray-50">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                          <Icon icon="tabler:message-circle" className="h-5 w-5 text-yellow-600" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-900">
                          <span className="font-medium">Dr. Michael Chen</span> posted a new announcement in "Mobile App Development"
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {format(new Date('2023-08-06T09:32:00'), 'MMM d, h:mm a')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-lg font-semibold mb-4">Pending Approvals</h2>
                  
                  <div className="space-y-4">
                    {users
                      .filter(user => user.status === 'pending')
                      .map(user => (
                        <div key={user.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full overflow-hidden">
                              <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                            </div>
                            <div>
                              <h3 className="font-medium">{user.name}</h3>
                              <div className="flex items-center text-sm text-gray-500">
                                <span>{user.email}</span>
                                <span className="mx-1">•</span>
                                <span className="capitalize">{user.role}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button 
                              onClick={() => handleApproveUser(user.id)}
                              className="px-3 py-1.5 bg-blue-600 text-white text-xs font-medium rounded-md hover:bg-blue-700"
                            >
                              Approve
                            </button>
                            <button 
                              onClick={() => handleRejectUser(user.id)}
                              className="px-3 py-1.5 border border-gray-300 text-gray-700 text-xs font-medium rounded-md hover:bg-gray-50"
                            >
                              Reject
                            </button>
                          </div>
                        </div>
                      ))
                    }
                    
                    {users.filter(user => user.status === 'pending').length === 0 && (
                      <div className="text-center py-8">
                        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
                          <Icon icon="tabler:check" className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="mt-2 text-sm font-medium text-gray-900">All caught up!</h3>
                        <p className="mt-1 text-sm text-gray-500">
                          No pending approvals at this time.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Popular Courses */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold">Popular Courses</h2>
                  <Link to="/admin/courses" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    View all
                  </Link>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Course
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Students
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Mentors
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Completion Rate
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {courses
                        .filter(course => course.status === 'active')
                        .sort((a, b) => b.students - a.students)
                        .slice(0, 3)
                        .map((course) => (
                          <tr key={course.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">{course.title}</div>
                              <div className="text-sm text-gray-500">{course.modules} modules</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{course.students}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{course.mentors}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="w-full h-2 bg-gray-200 rounded-full">
                                  <div 
                                    className="h-2 bg-blue-600 rounded-full" 
                                    style={{ width: `${Math.floor(Math.random() * 60) + 40}%` }}
                                  ></div>
                                </div>
                                <span className="ml-2 text-sm text-gray-500">{Math.floor(Math.random() * 60) + 40}%</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Active
                              </span>
                            </td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'users' && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <h2 className="text-lg font-semibold">User Management</h2>
                <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <Icon icon="tabler:plus" className="w-4 h-4 inline-block mr-1" />
                  Add User
                </button>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between mb-6 gap-4">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Icon icon="tabler:search" className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Search users..."
                    value={userSearchQuery}
                    onChange={(e) => setUserSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex gap-3">
                  <select
                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={userRoleFilter}
                    onChange={(e) => setUserRoleFilter(e.target.value)}
                  >
                    <option value="all">All Roles</option>
                    <option value="student">Students</option>
                    <option value="mentor">Mentors</option>
                    <option value="admin">Admins</option>
                  </select>
                  <select
                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={userStatusFilter}
                    onChange={(e) => setUserStatusFilter(e.target.value)}
                  >
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="pending">Pending</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        User
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Role
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Joined
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredUsers.map((user) => (
                      <tr key={user.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full overflow-hidden">
                              <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{user.name}</div>
                              <div className="text-sm text-gray-500">{user.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 capitalize">{user.role}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            user.status === 'active' ? 'bg-green-100 text-green-800' : 
                            user.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {user.status === 'active' ? 'Active' : 
                             user.status === 'pending' ? 'Pending' : 'Inactive'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {format(new Date(user.joinDate), 'MMM d, yyyy')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end gap-2">
                            <Link to={`/admin/users/${user.id}`} className="text-blue-600 hover:text-blue-900">
                              Edit
                            </Link>
                            <span className="text-gray-300">|</span>
                            <button className="text-red-600 hover:text-red-900">
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {filteredUsers.length === 0 && (
                <div className="text-center py-8">
                  <Icon icon="tabler:user-off" className="h-12 w-12 mx-auto text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No users found</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Try adjusting your search or filter to find what you're looking for.
                  </p>
                </div>
              )}
            </div>
          )}
          
          {activeTab === 'courses' && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <h2 className="text-lg font-semibold">Course Management</h2>
                <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <Icon icon="tabler:plus" className="w-4 h-4 inline-block mr-1" />
                  Create Course
                </button>
              </div>
              
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Icon icon="tabler:search" className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Search courses..."
                  value={courseSearchQuery}
                  onChange={(e) => setCourseSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {filteredCourses.map((course) => (
                  <div key={course.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">{course.title}</h3>
                      <span className={`px-2 text-xs leading-5 font-semibold rounded-full ${
                        course.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {course.status === 'active' ? 'Active' : 'Draft'}
                      </span>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Students:</span>
                        <span className="font-medium">{course.students}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Mentors:</span>
                        <span className="font-medium">{course.mentors}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Modules:</span>
                        <span className="font-medium">{course.modules}</span>
                      </div>
                    </div>
                    <div className="mt-4 text-xs text-gray-500">
                      Last updated {format(new Date(course.lastUpdated), 'MMM d, yyyy')}
                    </div>
                    <div className="mt-4 flex justify-end gap-2">
                      <Link 
                        to={`/admin/courses/${course.id}`} 
                        className="px-3 py-1.5 bg-blue-600 text-white text-xs font-medium rounded-md hover:bg-blue-700"
                      >
                        Edit
                      </Link>
                      <button className="px-3 py-1.5 border border-gray-300 text-gray-700 text-xs font-medium rounded-md hover:bg-gray-50">
                        Preview
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredCourses.length === 0 && (
                <div className="text-center py-8">
                  <Icon icon="tabler:book-off" className="h-12 w-12 mx-auto text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No courses found</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Try adjusting your search or create a new course.
                  </p>
                </div>
              )}
            </div>
          )}
          
          {activeTab === 'reports' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-6">Analytics Reports</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {reports.map((report) => (
                    <div key={report.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">{report.title}</h3>
                        <span className="text-xs text-gray-500">
                          {report.type.charAt(0).toUpperCase() + report.type.slice(1)} Chart
                        </span>
                      </div>
                      <div className="mt-4 h-40 bg-gray-100 rounded-md flex items-center justify-center">
                        <Icon icon={`tabler:chart-${report.type}`} className="h-12 w-12 text-gray-400" />
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-xs text-gray-500">
                          Updated {format(new Date(report.lastUpdated), 'MMM d, yyyy')}
                        </span>
                        <Link 
                          to={`/admin/reports/${report.id}`} 
                          className="text-blue-600 hover:text-blue-800 text-sm"
                        >
                          View Full Report
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold">Generate Custom Report</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label htmlFor="report-type" className="block text-sm font-medium text-gray-700 mb-1">
                      Report Type
                    </label>
                    <select
                      id="report-type"
                      className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                      <option>User Growth</option>
                      <option>Course Completion</option>
                      <option>Revenue Analysis</option>
                      <option>Mentor Performance</option>
                      <option>Content Engagement</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="date-range" className="block text-sm font-medium text-gray-700 mb-1">
                      Date Range
                    </label>
                    <select
                      id="date-range"
                      className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                      <option>Last 7 days</option>
                      <option>Last 30 days</option>
                      <option>Last 90 days</option>
                      <option>Last 12 months</option>
                      <option>Custom range...</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="format" className="block text-sm font-medium text-gray-700 mb-1">
                      Format
                    </label>
                    <select
                      id="format"
                      className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                      <option>PDF</option>
                      <option>Excel</option>
                      <option>CSV</option>
                    </select>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <button 
                    className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={() => toast.info('Generating report...')}
                  >
                    Generate Report
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-6">Platform Settings</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium mb-4">General</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Platform Name</p>
                          <p className="text-sm text-gray-500">The name of your learning platform</p>
                        </div>
                        <div className="w-64">
                          <input 
                            type="text" 
                            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            defaultValue="EduMentor"
                          />
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Time Zone</p>
                          <p className="text-sm text-gray-500">Default time zone for platform</p>
                        </div>
                        <div className="w-64">
                          <select
                            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            defaultValue="UTC-7"
                          >
                            <option value="UTC-12">UTC-12</option>
                            <option value="UTC-11">UTC-11</option>
                            <option value="UTC-10">UTC-10</option>
                            <option value="UTC-9">UTC-9</option>
                            <option value="UTC-8">UTC-8</option>
                            <option value="UTC-7">UTC-7 (PDT)</option>
                            <option value="UTC-6">UTC-6 (MDT)</option>
                            <option value="UTC-5">UTC-5 (CDT)</option>
                            <option value="UTC-4">UTC-4 (EDT)</option>
                            <option value="UTC-3">UTC-3</option>
                            <option value="UTC-2">UTC-2</option>
                            <option value="UTC-1">UTC-1</option>
                            <option value="UTC+0">UTC+0</option>
                            <option value="UTC+1">UTC+1 (CET)</option>
                            <option value="UTC+2">UTC+2</option>
                            <option value="UTC+3">UTC+3</option>
                            <option value="UTC+4">UTC+4</option>
                            <option value="UTC+5">UTC+5</option>
                            <option value="UTC+5:30">UTC+5:30 (IST)</option>
                            <option value="UTC+6">UTC+6</option>
                            <option value="UTC+7">UTC+7</option>
                            <option value="UTC+8">UTC+8</option>
                            <option value="UTC+9">UTC+9 (JST)</option>
                            <option value="UTC+10">UTC+10</option>
                            <option value="UTC+11">UTC+11</option>
                            <option value="UTC+12">UTC+12</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-sm font-medium mb-4">Registration</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Allow New Registrations</p>
                          <p className="text-sm text-gray-500">Enable new user sign-ups</p>
                        </div>
                        <div>
                          <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" defaultChecked className="sr-only peer" />
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Require Email Verification</p>
                          <p className="text-sm text-gray-500">Users must verify email before accessing platform</p>
                        </div>
                        <div>
                          <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" defaultChecked className="sr-only peer" />
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Manual Approval for Mentors</p>
                          <p className="text-sm text-gray-500">Admin approval required for mentor accounts</p>
                        </div>
                        <div>
                          <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" defaultChecked className="sr-only peer" />
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-sm font-medium mb-4">Email Notifications</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Send Welcome Email</p>
                          <p className="text-sm text-gray-500">New users receive a welcome email</p>
                        </div>
                        <div>
                          <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" defaultChecked className="sr-only peer" />
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Course Completion Emails</p>
                          <p className="text-sm text-gray-500">Email sent when a user completes a course</p>
                        </div>
                        <div>
                          <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" defaultChecked className="sr-only peer" />
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Weekly Activity Digest</p>
                          <p className="text-sm text-gray-500">Weekly summary email of platform activity</p>
                        </div>
                        <div>
                          <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" defaultChecked className="sr-only peer" />
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <button 
                    className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={() => toast.success('Settings saved successfully')}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
