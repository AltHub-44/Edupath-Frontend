
import { useState } from 'react';
import { Icon } from '@iconify/react';

const MentorAssignments = () => {
  const [filter, setFilter] = useState('pending');
  
  // Mock data for assignments
  const assignments = [
    {
      id: 1,
      title: 'JavaScript Basics Quiz',
      student: 'Jamie Chen',
      submitted: '2023-08-15T14:30:00',
      status: 'pending',
      course: 'Web Development Fundamentals',
      dueDate: '2023-08-20',
    },
    {
      id: 2,
      title: 'React Component Project',
      student: 'Alex Smith',
      submitted: '2023-08-14T09:15:00',
      status: 'pending',
      course: 'React & Redux',
      dueDate: '2023-08-18',
    },
    {
      id: 3,
      title: 'API Integration Assignment',
      student: 'Robin Lee',
      submitted: '2023-08-15T10:45:00',
      status: 'pending',
      course: 'Backend Development',
      dueDate: '2023-08-22',
    },
    {
      id: 4,
      title: 'User Authentication Implementation',
      student: 'Taylor Williams',
      submitted: '2023-08-10T16:20:00',
      status: 'graded',
      grade: 92,
      feedback: 'Excellent work! Your implementation is very secure.',
      course: 'Security Fundamentals',
      dueDate: '2023-08-15',
    },
    {
      id: 5,
      title: 'Database Schema Design',
      student: 'Jordan Taylor',
      submitted: '2023-08-11T11:05:00',
      status: 'graded',
      grade: 85,
      feedback: 'Good work overall. Consider normalizing your tables further.',
      course: 'Database Management',
      dueDate: '2023-08-16',
    },
    {
      id: 6,
      title: 'UI/UX Design Mockup',
      student: 'Jamie Chen',
      submitted: '2023-08-12T13:40:00',
      status: 'graded',
      grade: 95,
      feedback: 'Outstanding design! Very intuitive and accessible.',
      course: 'UI/UX Design Principles',
      dueDate: '2023-08-17',
    },
  ];
  
  // Filter assignments by status
  const filteredAssignments = assignments.filter(assignment => {
    if (filter === 'all') return true;
    return assignment.status === filter;
  });
  
  // Format date for display
  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  // Format time since submission
  const getTimeSince = (dateString) => {
    const submitted = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now - submitted) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    if (diffInHours < 48) return 'Yesterday';
    return `${Math.floor(diffInHours / 24)} days ago`;
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Assignments</h1>
        <p className="text-gray-600">Review and grade your mentees' assignments</p>
      </div>
      
      {/* Filter Tabs */}
      <div className="mb-6 border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              filter === 'all'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setFilter('all')}
          >
            All Assignments
          </button>
          <button
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              filter === 'pending'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setFilter('pending')}
          >
            Pending Review
          </button>
          <button
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              filter === 'graded'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setFilter('graded')}
          >
            Graded
          </button>
        </nav>
      </div>
      
      {/* Assignments List */}
      <div className="grid gap-4">
        {filteredAssignments.length > 0 ? (
          filteredAssignments.map(assignment => (
            <div key={assignment.id} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-5 border-b border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{assignment.title}</h3>
                    <p className="text-gray-600 text-sm">Submitted by {assignment.student}</p>
                  </div>
                  <div className="mt-2 md:mt-0 flex items-center">
                    {assignment.status === 'pending' ? (
                      <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
                        Pending Review
                      </span>
                    ) : (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
                        <Icon icon="tabler:check" className="h-3 w-3 mr-1" />
                        Graded: {assignment.grade}%
                      </span>
                    )}
                    <span className="text-gray-500 text-sm ml-4">
                      {getTimeSince(assignment.submitted)}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <h4 className="text-xs uppercase text-gray-500 font-medium mb-1">Course</h4>
                    <p className="text-gray-800">{assignment.course}</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase text-gray-500 font-medium mb-1">Due Date</h4>
                    <p className="text-gray-800">{formatDate(assignment.dueDate)}</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase text-gray-500 font-medium mb-1">Submission Date</h4>
                    <p className="text-gray-800">{formatDate(assignment.submitted)}</p>
                  </div>
                </div>
                
                {assignment.status === 'graded' && (
                  <div className="border-t border-gray-100 pt-4 mt-4">
                    <h4 className="text-xs uppercase text-gray-500 font-medium mb-2">Your Feedback</h4>
                    <p className="text-gray-800">{assignment.feedback}</p>
                  </div>
                )}
                
                <div className="mt-6 flex justify-end">
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 mr-3">
                    View Submission
                  </button>
                  {assignment.status === 'pending' ? (
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                      Grade Assignment
                    </button>
                  ) : (
                    <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200">
                      Edit Feedback
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white rounded-lg shadow p-10 text-center">
            <Icon icon="tabler:clipboard" className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-1">No assignments found</h3>
            <p className="text-gray-500">
              {filter === 'pending' 
                ? "Great job! You've reviewed all pending assignments."
                : "No assignments match the current filter."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MentorAssignments;
