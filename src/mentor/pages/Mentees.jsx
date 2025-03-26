
import { useState } from 'react';
import { Icon } from '@iconify/react';
import MentorLayout from '../components/MentorLayout';

const MentorMentees = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  
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
      status: 'active'
    },
    { 
      id: 2, 
      name: 'Alex Smith', 
      avatar: 'AS',
      email: 'alex@example.com', 
      course: 'UI/UX Design', 
      progress: 45, 
      lastActive: 'Yesterday',
      status: 'active'
    },
    { 
      id: 3, 
      name: 'Taylor Williams', 
      avatar: 'TW',
      email: 'taylor@example.com', 
      course: 'JavaScript Masterclass', 
      progress: 92, 
      lastActive: '3 days ago',
      status: 'inactive'
    },
    { 
      id: 4, 
      name: 'Jordan Taylor', 
      avatar: 'JT',
      email: 'jordan@example.com', 
      course: 'React & Redux', 
      progress: 65, 
      lastActive: 'Just now',
      status: 'active'
    },
    { 
      id: 5, 
      name: 'Robin Lee', 
      avatar: 'RL',
      email: 'robin@example.com', 
      course: 'Node.js Fundamentals', 
      progress: 32, 
      lastActive: '1 week ago',
      status: 'inactive'
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
  
  return (
    <div>
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">My Mentees</h1>
          <p className="text-gray-600">Manage and track your mentees' progress</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-purple-700 transition-colors">
            <Icon icon="tabler:user-plus" className="h-5 w-5 mr-2" />
            Request New Mentee
          </button>
        </div>
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
                  Status
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
              {filteredMentees.map((mentee) => (
                <tr key={mentee.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-200 flex items-center justify-center text-purple-700">
                        {mentee.avatar}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{mentee.name}</div>
                        <div className="text-sm text-gray-500">{mentee.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{mentee.course}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                      <div 
                        className="bg-purple-600 h-2.5 rounded-full" 
                        style={{ width: `${mentee.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500">{mentee.progress}% complete</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusBadgeClasses(mentee.status)}`}>
                      {mentee.status.charAt(0).toUpperCase() + mentee.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {mentee.lastActive}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-purple-600 hover:text-purple-900 mr-3">
                      <Icon icon="tabler:message-circle" className="h-5 w-5" />
                    </button>
                    <button className="text-purple-600 hover:text-purple-900 mr-3">
                      <Icon icon="tabler:eye" className="h-5 w-5" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      <Icon icon="tabler:dots-vertical" className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredMentees.length === 0 && (
          <div className="text-center py-10">
            <Icon icon="tabler:search-off" className="h-10 w-10 text-gray-400 mx-auto mb-2" />
            <h3 className="text-lg font-medium text-gray-900">No mentees found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MentorMentees;
