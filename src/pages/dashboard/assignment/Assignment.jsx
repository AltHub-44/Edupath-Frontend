
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { format } from 'date-fns';

const Assignments = () => {
  const isMobile = window.innerWidth < 768;
  const today = new Date();
  
  const assignments = [
    { 
      id: 1, 
      title: "Programming Project: Build a Web App", 
      course: "Web Development", 
      dueDate: "2023-08-15", 
      status: "in-progress",
      progress: 65,
      description: "Create a functional web application using React and a backend of your choice."
    },
    { 
      id: 2, 
      title: "Algorithm Design Analysis", 
      course: "Data Structures", 
      dueDate: "2023-08-10", 
      status: "overdue",
      progress: 25,
      description: "Analyze and compare the efficiency of different sorting algorithms."
    },
    { 
      id: 3, 
      title: "Database Schema Design", 
      course: "Database Systems", 
      dueDate: "2023-08-22", 
      status: "upcoming",
      progress: 0,
      description: "Design a normalized database schema for an e-commerce application."
    },
    { 
      id: 4, 
      title: "Research Paper: AI Ethics", 
      course: "Artificial Intelligence", 
      dueDate: "2023-09-05", 
      status: "upcoming",
      progress: 10,
      description: "Write a 10-page research paper on ethical considerations in AI development."
    },
    { 
      id: 5, 
      title: "Network Security Analysis", 
      course: "Cybersecurity", 
      dueDate: "2023-07-30", 
      status: "completed",
      progress: 100,
      description: "Conduct a security analysis of a given network configuration."
    },
  ];

  const [filter, setFilter] = useState('all');
  
  const getStatusBadge = (status) => {
    switch(status) {
      case 'completed':
        return (
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
            <Icon icon="tabler:check-circle" className="w-3 h-3 mr-1" /> Completed
          </span>
        );
      case 'in-progress':
        return (
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
            <Icon icon="tabler:clock" className="w-3 h-3 mr-1" /> In Progress
          </span>
        );
      case 'overdue':
        return (
          <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
            <Icon icon="tabler:alert-circle" className="w-3 h-3 mr-1" /> Overdue
          </span>
        );
      case 'upcoming':
        return (
          <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
            <Icon icon="tabler:calendar" className="w-3 h-3 mr-1" /> Upcoming
          </span>
        );
      default:
        return null;
    }
  };

  const filteredAssignments = filter === 'all' 
    ? assignments 
    : assignments.filter(assignment => assignment.status === filter);
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      
      <div className={`flex-1`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-8 gap-4">
            <div>
              <h1 className="text-2xl font-bold">Assignments</h1>
              <p className="text-gray-500">{format(today, 'MMMM dd, yyyy')}</p>
            </div>

          </div>
          
          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Icon icon="tabler:check-circle" className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Completed</p>
                  <p className="text-2xl font-bold">5</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Icon icon="tabler:clock" className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">In Progress</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <Icon icon="tabler:alert-circle" className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Overdue</p>
                  <p className="text-2xl font-bold">1</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Assignments List */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
              <h2 className="text-xl font-semibold">Your Assignments</h2>
              <div className="w-full sm:w-auto">
                <div className="inline-flex rounded-md shadow-sm" role="group">
                  <button
                    type="button"
                    onClick={() => setFilter('all')}
                    className={`px-4 py-2 text-sm font-medium rounded-l-lg ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                  >
                    All
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilter('in-progress')}
                    className={`px-4 py-2 text-sm font-medium ${filter === 'in-progress' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                  >
                    In Progress
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilter('upcoming')}
                    className={`px-4 py-2 text-sm font-medium ${filter === 'upcoming' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                  >
                    Upcoming
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilter('completed')}
                    className={`px-4 py-2 text-sm font-medium rounded-r-lg ${filter === 'completed' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                  >
                    Completed
                  </button>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              {filteredAssignments.map((assignment) => (
                <div key={assignment.id} className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-all duration-200">
                  <div className="flex flex-col sm:flex-row justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{assignment.title}</h3>
                      <p className="text-gray-500 text-sm">{assignment.course}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusBadge(assignment.status)}
                      <span className="text-sm text-gray-500">Due: {format(new Date(assignment.dueDate), 'MMM dd')}</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between items-center mb-1 text-sm">
                      <span>Progress</span>
                      <span>{assignment.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          assignment.status === 'overdue' 
                            ? 'bg-red-500' 
                            : assignment.status === 'completed' 
                              ? 'bg-green-500' 
                              : 'bg-blue-500'
                        }`} 
                        style={{ width: `${assignment.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Link 
                      to={`/dashboard/assignment/${assignment.id}`} 
                      className="text-xs px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignments;
