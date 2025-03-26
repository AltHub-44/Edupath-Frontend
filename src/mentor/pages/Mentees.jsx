
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { toast } from 'react-toastify';

const MentorMentees = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [expandedMentee, setExpandedMentee] = useState(null);
  
  // Mock data for mentees
  const mentees = [
    { 
      id: 1, 
      name: 'Jamie Chen', 
      avatar: 'JC',
      email: 'jamie@example.com', 
      course: 'Web Development', 
      progress: 78, 
      lastActive: '2 hours ago',
      status: 'active',
      courses: [
        { id: 101, name: 'React Fundamentals', progress: 85, completion: '12/14 modules' },
        { id: 102, name: 'Backend with Node.js', progress: 62, completion: '5/8 modules' },
      ],
      assignments: [
        { id: 201, title: 'Build a Portfolio Site', status: 'submitted', dueDate: '2023-08-10', grade: null },
        { id: 202, title: 'API Integration Project', status: 'in-progress', dueDate: '2023-08-25', grade: null },
      ],
      notes: 'Jamie is making excellent progress, especially in frontend development. Needs some support with backend concepts.'
    },
    { 
      id: 2, 
      name: 'Alex Smith', 
      avatar: 'AS',
      email: 'alex@example.com', 
      course: 'UI/UX Design', 
      progress: 45, 
      lastActive: 'Yesterday',
      status: 'active',
      courses: [
        { id: 103, name: 'UI Design Principles', progress: 45, completion: '5/11 modules' },
        { id: 104, name: 'Figma Masterclass', progress: 30, completion: '3/10 modules' },
      ],
      assignments: [
        { id: 203, title: 'Design System Creation', status: 'submitted', dueDate: '2023-08-05', grade: 'A-' },
        { id: 204, title: 'Mobile App UI Design', status: 'not-started', dueDate: '2023-08-30', grade: null },
      ],
      notes: 'Alex has a good eye for design but needs more practice with creating cohesive systems.'
    },
    { 
      id: 3, 
      name: 'Taylor Williams', 
      avatar: 'TW',
      email: 'taylor@example.com', 
      course: 'JavaScript Masterclass', 
      progress: 92, 
      lastActive: '3 days ago',
      status: 'inactive',
      courses: [
        { id: 105, name: 'Advanced JavaScript', progress: 92, completion: '18/20 modules' },
        { id: 106, name: 'TypeScript Basics', progress: 75, completion: '6/8 modules' },
      ],
      assignments: [
        { id: 205, title: 'State Management System', status: 'graded', dueDate: '2023-07-25', grade: 'A+' },
        { id: 206, title: 'Data Visualization Project', status: 'submitted', dueDate: '2023-08-15', grade: null },
      ],
      notes: 'Taylor is excelling in JavaScript concepts, ready for more advanced topics.'
    },
    { 
      id: 4, 
      name: 'Jordan Taylor', 
      avatar: 'JT',
      email: 'jordan@example.com', 
      course: 'React & Redux', 
      progress: 65, 
      lastActive: 'Just now',
      status: 'active',
      courses: [
        { id: 107, name: 'React Hooks', progress: 70, completion: '7/10 modules' },
        { id: 108, name: 'Redux State Management', progress: 60, completion: '3/5 modules' },
      ],
      assignments: [
        { id: 207, title: 'Todo App with Redux', status: 'in-progress', dueDate: '2023-08-20', grade: null },
        { id: 208, title: 'Authentication System', status: 'not-started', dueDate: '2023-09-05', grade: null },
      ],
      notes: 'Jordan is making steady progress, particularly strong in component architecture.'
    },
    { 
      id: 5, 
      name: 'Robin Lee', 
      avatar: 'RL',
      email: 'robin@example.com', 
      course: 'Node.js Fundamentals', 
      progress: 32, 
      lastActive: '1 week ago',
      status: 'inactive',
      courses: [
        { id: 109, name: 'Express.js Basics', progress: 35, completion: '2/6 modules' },
        { id: 110, name: 'MongoDB Integration', progress: 28, completion: '1/4 modules' },
      ],
      assignments: [
        { id: 209, title: 'RESTful API Creation', status: 'overdue', dueDate: '2023-08-01', grade: null },
        { id: 210, title: 'Database Schema Design', status: 'not-started', dueDate: '2023-08-25', grade: null },
      ],
      notes: 'Robin has been less active recently, might need additional motivation and support.'
    },
  ];
  
  // Filter mentees based on search and filter
  const filteredMentees = mentees.filter(mentee => {
    const matchesSearch = mentee.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          mentee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          mentee.course.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filter === 'all') return matchesSearch;
    return matchesSearch && mentee.status === filter;
  });
  
  const statusBadgeClasses = (status) => {
    return status === 'active' 
      ? 'bg-green-100 text-green-800'
      : 'bg-gray-100 text-gray-800';
  };

  const assignmentStatusBadge = (status) => {
    switch(status) {
      case 'submitted':
        return 'bg-blue-100 text-blue-800';
      case 'graded':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'overdue':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleMenteeClick = (menteeId) => {
    if (expandedMentee === menteeId) {
      setExpandedMentee(null);
    } else {
      setExpandedMentee(menteeId);
    }
  };

  const handleSendMessage = (menteeId) => {
    toast.success('Message window opened');
    // Logic to open chat with mentee
  };

  const handleViewDetails = (menteeId) => {
    toast.info('Viewing full details');
    // Logic to view full mentee details
  };

  const handleAddNote = (menteeId) => {
    toast.success('Note added successfully');
    // Logic to add a note
  };
  
  return (
    <div>
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">My Mentees</h1>
          <p className="text-gray-600">Manage and track your mentees' progress</p>
        </div>
        {/* <div className="mt-4 md:mt-0">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-purple-700 transition-colors">
            <Icon icon="tabler:user-plus" className="h-5 w-5 mr-2" />
            Request New Mentee
          </button>
        </div> */}
      </div>
      
      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-1">
            <Icon icon="tabler:search" className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search mentees..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <button 
              className={`px-4 py-2 rounded-lg ${filter === 'all' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={`px-4 py-2 rounded-lg ${filter === 'active' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'}`}
              onClick={() => setFilter('active')}
            >
              Active
            </button>
            <button 
              className={`px-4 py-2 rounded-lg ${filter === 'inactive' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'}`}
              onClick={() => setFilter('inactive')}
            >
              Inactive
            </button>
          </div>
        </div>
      </div>
      
      {/* Mentees List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="space-y-4 p-4">
          {filteredMentees.length > 0 ? (
            filteredMentees.map((mentee) => (
              <div key={mentee.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <div 
                  className={`p-4 ${expandedMentee === mentee.id ? 'bg-purple-50' : 'bg-white'} cursor-pointer hover:bg-gray-50`}
                  onClick={() => handleMenteeClick(mentee.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-medium">
                        {mentee.avatar}
                      </div>
                      <div className="ml-4">
                        <div className="text-lg font-medium text-gray-900">{mentee.name}</div>
                        <div className="text-sm text-gray-500">{mentee.email}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${statusBadgeClasses(mentee.status)}`}>
                        {mentee.status.charAt(0).toUpperCase() + mentee.status.slice(1)}
                      </span>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSendMessage(mentee.id);
                        }}
                        className="text-purple-600 hover:text-purple-900 p-2"
                      >
                        <Icon icon="tabler:message-circle" className="h-5 w-5" />
                      </button>
                      <Icon 
                        icon={expandedMentee === mentee.id ? "tabler:chevron-up" : "tabler:chevron-down"} 
                        className="h-5 w-5 text-gray-500"
                      />
                    </div>
                  </div>
                </div>
                
                {expandedMentee === mentee.id && (
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Overview */}
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-800 mb-4">Overview</h3>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm text-gray-500">Primary Course</p>
                            <p className="font-medium">{mentee.course}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Overall Progress</p>
                            <div className="flex items-center mt-1">
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-purple-600 h-2 rounded-full" 
                                  style={{ width: `${mentee.progress}%` }}
                                ></div>
                              </div>
                              <span className="ml-2 text-sm text-gray-600">{mentee.progress}%</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Last Active</p>
                            <p className="font-medium">{mentee.lastActive}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Courses */}
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-800 mb-4">Enrolled Courses</h3>
                        <div className="space-y-3">
                          {mentee.courses.map(course => (
                            <div key={course.id} className="bg-white p-3 rounded-md shadow-sm">
                              <div className="font-medium text-gray-800">{course.name}</div>
                              <div className="flex items-center mt-2">
                                <div className="w-full bg-gray-200 rounded-full h-1.5">
                                  <div 
                                    className="bg-blue-500 h-1.5 rounded-full" 
                                    style={{ width: `${course.progress}%` }}
                                  ></div>
                                </div>
                                <span className="ml-2 text-xs text-gray-600">{course.progress}%</span>
                              </div>
                              <p className="text-xs text-gray-500 mt-1">{course.completion}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Assignments */}
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-800 mb-4">Assignments</h3>
                        <div className="space-y-3">
                          {mentee.assignments.map(assignment => (
                            <div key={assignment.id} className="bg-white p-3 rounded-md shadow-sm">
                              <div className="font-medium text-gray-800">{assignment.title}</div>
                              <div className="flex justify-between items-center mt-2">
                                <span className={`px-2 py-0.5 text-xs rounded-full ${assignmentStatusBadge(assignment.status)}`}>
                                  {assignment.status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                </span>
                                <span className="text-xs text-gray-500">
                                  Due: {new Date(assignment.dueDate).toLocaleDateString()}
                                </span>
                              </div>
                              {assignment.grade && (
                                <p className="text-sm font-medium text-green-700 mt-1">Grade: {assignment.grade}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Notes and Actions */}
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-semibold text-gray-800">Mentor Notes</h3>
                        <button 
                          onClick={() => handleAddNote(mentee.id)}
                          className="text-sm text-purple-600 hover:text-purple-800 flex items-center"
                        >
                          <Icon icon="tabler:plus" className="h-4 w-4 mr-1" />
                          Add Note
                        </button>
                      </div>
                      <p className="text-gray-700">{mentee.notes}</p>
                      
                      <div className="mt-6 flex justify-end space-x-3">
                        <button 
                          onClick={() => handleViewDetails(mentee.id)}
                          className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          View Full Profile
                        </button>
                        <button 
                          onClick={() => handleSendMessage(mentee.id)}
                          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                        >
                          Message
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-10">
              <Icon icon="tabler:search-off" className="h-10 w-10 text-gray-400 mx-auto mb-2" />
              <h3 className="text-lg font-medium text-gray-900">No mentees found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MentorMentees;
