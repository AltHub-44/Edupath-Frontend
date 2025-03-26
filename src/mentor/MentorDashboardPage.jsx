
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { format } from 'date-fns';
import { toast } from 'react-toastify';

const MentorDashboardPage = () => {
  const today = new Date();
  
  const mentees = [
    { 
      id: 1, 
      name: "Alex Johnson", 
      progress: 75, 
      lastActive: "2023-08-05T14:30:00", 
      nextSession: "2023-08-15T10:00:00",
      avatar: "/lovable-uploads/63aab59d-bddb-43b1-963c-ab6f53489f3e.png",
      course: "Web Development"
    },
    { 
      id: 2, 
      name: "Samantha Lee", 
      progress: 42, 
      lastActive: "2023-08-07T09:15:00", 
      nextSession: "2023-08-12T15:30:00",
      avatar: "https://i.pravatar.cc/150?img=32",
      course: "Data Science"
    },
    { 
      id: 3, 
      name: "Michael Chen", 
      progress: 89, 
      lastActive: "2023-08-06T16:45:00", 
      nextSession: "2023-08-18T11:00:00",
      avatar: "https://i.pravatar.cc/150?img=68",
      course: "Mobile App Development"
    },
    { 
      id: 4, 
      name: "Emily Wilson", 
      progress: 35, 
      lastActive: "2023-08-01T10:20:00", 
      nextSession: "2023-08-10T14:00:00",
      avatar: "https://i.pravatar.cc/150?img=47",
      course: "UI/UX Design"
    },
  ];
  
  const pendingRequests = [
    { 
      id: 101, 
      name: "Jordan Smith", 
      message: "Looking for guidance in machine learning and AI.", 
      date: "2023-08-04T11:20:00",
      avatar: "https://i.pravatar.cc/150?img=51"
    },
    { 
      id: 102, 
      name: "Taylor Wright", 
      message: "Need help with full-stack development concepts.", 
      date: "2023-08-05T15:45:00",
      avatar: "https://i.pravatar.cc/150?img=33"
    },
  ];
  
  const sessions = [
    { 
      id: 201, 
      mentee: "Alex Johnson", 
      date: "2023-08-15T10:00:00", 
      duration: 60,
      topic: "Project Review",
      avatar: "/lovable-uploads/63aab59d-bddb-43b1-963c-ab6f53489f3e.png"
    },
    { 
      id: 202, 
      mentee: "Samantha Lee", 
      date: "2023-08-12T15:30:00", 
      duration: 45,
      topic: "Career Guidance",
      avatar: "https://i.pravatar.cc/150?img=32"
    },
    { 
      id: 203, 
      mentee: "Emily Wilson", 
      date: "2023-08-10T14:00:00", 
      duration: 30,
      topic: "Portfolio Review",
      avatar: "https://i.pravatar.cc/150?img=47"
    },
  ];
  
  const [activeTab, setActiveTab] = useState('overview');
  
  const handleAcceptRequest = (id) => {
    toast.success('Mentorship request accepted');
    // Logic to accept request would go here
  };
  
  const handleRejectRequest = (id) => {
    toast.info('Mentorship request declined');
    // Logic to reject request would go here
  };
  
  return (
    <div className="flex min-h-screen bg-gray-50">

      
      <div className={`flex-1`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-8 gap-4">
            <div>
              <h1 className="text-2xl font-bold">Mentor Dashboard</h1>
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
                  alt="Mentor" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Navigation Tabs */}
          <div className="mb-6 border-b border-gray-200">
            <nav className="flex flex-wrap -mb-px">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`mr-4 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'overview' 
                    ? 'border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Overview
              </button>
              <button 
                onClick={() => setActiveTab('mentees')}
                className={`mr-4 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'mentees' 
                    ? 'border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                My Mentees
              </button>
              <button 
                onClick={() => setActiveTab('requests')}
                className={`mr-4 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'requests' 
                    ? 'border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Requests
                {pendingRequests.length > 0 && (
                  <span className="ml-2 inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-100 text-blue-800 text-xs">
                    {pendingRequests.length}
                  </span>
                )}
              </button>
              <button 
                onClick={() => setActiveTab('schedule')}
                className={`mr-4 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'schedule' 
                    ? 'border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Schedule
              </button>
            </nav>
          </div>
          
          {/* Content based on active tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Stats Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Icon icon="tabler:users" className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Total Mentees</p>
                      <p className="text-2xl font-bold">{mentees.length}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Icon icon="tabler:clock" className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Upcoming Sessions</p>
                      <p className="text-2xl font-bold">{sessions.length}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Icon icon="tabler:user-plus" className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Pending Requests</p>
                      <p className="text-2xl font-bold">{pendingRequests.length}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Upcoming Sessions */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Upcoming Sessions</h2>
                <div className="space-y-4">
                  {sessions.map((session) => (
                    <div key={session.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full overflow-hidden">
                          <img src={session.avatar} alt={session.mentee} className="h-full w-full object-cover" />
                        </div>
                        <div>
                          <h3 className="font-medium">{session.mentee}</h3>
                          <p className="text-sm text-gray-500">{session.topic}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{format(new Date(session.date), 'MMM dd, h:mm a')}</p>
                        <p className="text-sm text-gray-500">{session.duration} minutes</p>
                      </div>
                    </div>
                  ))}
                </div>
                {sessions.length === 0 && (
                  <p className="text-gray-500 text-center py-4">No upcoming sessions</p>
                )}
              </div>
              
              {/* Recent Activity */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Recent Mentee Activity</h2>
                <div className="space-y-4">
                  {mentees
                    .sort((a, b) => new Date(b.lastActive) - new Date(a.lastActive))
                    .slice(0, 3)
                    .map((mentee) => (
                      <div key={mentee.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full overflow-hidden">
                            <img src={mentee.avatar} alt={mentee.name} className="h-full w-full object-cover" />
                          </div>
                          <div>
                            <h3 className="font-medium">{mentee.name}</h3>
                            <p className="text-sm text-gray-500">{mentee.course}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">Last active {format(new Date(mentee.lastActive), 'MMM dd, h:mm a')}</p>
                          <div className="mt-1 flex items-center gap-2">
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                              <div 
                                className="bg-blue-600 h-1.5 rounded-full" 
                                style={{ width: `${mentee.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-xs text-gray-500">{mentee.progress}%</span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'mentees' && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
                <h2 className="text-lg font-semibold">My Mentees</h2>
                <div className="relative w-full sm:w-64">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Icon icon="tabler:search" className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Search mentees..."
                  />
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Mentee
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Course
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Progress
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Next Session
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Last Active
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {mentees.map((mentee) => (
                      <tr key={mentee.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full overflow-hidden">
                              <img src={mentee.avatar} alt={mentee.name} className="h-full w-full object-cover" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{mentee.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{mentee.course}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                              <div 
                                className={`h-1.5 rounded-full ${
                                  mentee.progress > 75 ? 'bg-green-500' : 
                                  mentee.progress > 40 ? 'bg-blue-500' : 'bg-yellow-500'
                                }`} 
                                style={{ width: `${mentee.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-xs text-gray-500">{mentee.progress}%</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {format(new Date(mentee.nextSession), 'MMM dd, h:mm a')}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {format(new Date(mentee.lastActive), 'MMM dd, h:mm a')}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Link to={`/chat-with-mentor?mentee=${mentee.id}`} className="text-blue-600 hover:text-blue-900 mr-3">
                            Message
                          </Link>
                          <Link to={`/mentor-mentee/${mentee.id}`} className="text-blue-600 hover:text-blue-900">
                            View
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {mentees.length === 0 && (
                <p className="text-gray-500 text-center py-4">No mentees found</p>
              )}
            </div>
          )}
          
          {activeTab === 'requests' && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-6">Mentorship Requests</h2>
              
              {pendingRequests.length > 0 ? (
                <div className="space-y-4">
                  {pendingRequests.map((request) => (
                    <div key={request.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-full overflow-hidden">
                            <img src={request.avatar} alt={request.name} className="h-full w-full object-cover" />
                          </div>
                          <div>
                            <h3 className="font-medium text-lg">{request.name}</h3>
                            <p className="text-sm text-gray-500">
                              Requested {format(new Date(request.date), 'MMM dd, yyyy')}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2 w-full sm:w-auto">
                          <button 
                            onClick={() => handleAcceptRequest(request.id)}
                            className="flex-1 sm:flex-none px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          >
                            Accept
                          </button>
                          <button 
                            onClick={() => handleRejectRequest(request.id)}
                            className="flex-1 sm:flex-none px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          >
                            Decline
                          </button>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-gray-50 rounded-md">
                        <p className="text-gray-700">{request.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
                    <Icon icon="tabler:inbox" className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No pending requests</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    You don't have any pending mentorship requests at this time.
                  </p>
                </div>
              )}
            </div>
          )}
          
          {activeTab === 'schedule' && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
                <h2 className="text-lg font-semibold">My Schedule</h2>
                <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <Icon icon="tabler:plus" className="w-4 h-4 inline-block mr-1" />
                  Add Availability
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-3">Upcoming Sessions</h3>
                  {sessions.length > 0 ? (
                    <div className="space-y-3">
                      {sessions.map((session) => (
                        <div key={session.id} className="flex items-center justify-between bg-white p-3 rounded-md shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full overflow-hidden">
                              <img src={session.avatar} alt={session.mentee} className="h-full w-full object-cover" />
                            </div>
                            <div>
                              <p className="font-medium">{session.mentee}</p>
                              <p className="text-sm text-gray-500">{session.topic}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium">{format(new Date(session.date), 'MMM dd, h:mm a')}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <button className="text-xs text-blue-600 hover:text-blue-800">
                                Reschedule
                              </button>
                              <span className="text-gray-300">|</span>
                              <button className="text-xs text-red-600 hover:text-red-800">
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-2">No upcoming sessions</p>
                  )}
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">My Availability</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-3 rounded-md shadow-sm">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium">Mondays</h4>
                          <button className="text-gray-400 hover:text-gray-500">
                            <Icon icon="tabler:pencil" className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">9:00 AM - 12:00 PM</p>
                      </div>
                      
                      <div className="bg-white p-3 rounded-md shadow-sm">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium">Wednesdays</h4>
                          <button className="text-gray-400 hover:text-gray-500">
                            <Icon icon="tabler:pencil" className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">1:00 PM - 5:00 PM</p>
                      </div>
                      
                      <div className="bg-white p-3 rounded-md shadow-sm">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium">Fridays</h4>
                          <button className="text-gray-400 hover:text-gray-500">
                            <Icon icon="tabler:pencil" className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">10:00 AM - 3:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MentorDashboardPage;
