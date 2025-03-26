import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import MentorLayout from '../components/MentorLayout';

const MentorDashboard = () => {
  // Mock data for the dashboard
  const stats = [
    { label: 'Active Mentees', value: 12, icon: 'tabler:users', color: 'bg-blue-500' },
    { label: 'Assignments to Review', value: 8, icon: 'tabler:clipboard-text', color: 'bg-purple-500' },
    { label: 'Messages', value: 5, icon: 'tabler:message-circle', color: 'bg-green-500' },
    { label: 'Upcoming Sessions', value: 3, icon: 'tabler:calendar', color: 'bg-amber-500' },
  ];
  
  const upcomingSessions = [
    { id: 1, student: 'Jamie Chen', time: '10:00 AM - 11:00 AM', date: 'Today', topic: 'Project Review' },
    { id: 2, student: 'Alex Smith', time: '2:30 PM - 3:30 PM', date: 'Today', topic: 'Career Guidance' },
    { id: 3, student: 'Taylor Williams', time: '9:00 AM - 10:00 AM', date: 'Tomorrow', topic: 'Weekly Check-in' },
  ];
  
  const pendingAssignments = [
    { id: 1, title: 'JavaScript Basics Quiz', student: 'Jamie Chen', submitted: '2 days ago' },
    { id: 2, title: 'React Component Project', student: 'Alex Smith', submitted: '1 day ago' },
    { id: 3, title: 'API Integration Assignment', student: 'Robin Lee', submitted: '4 hours ago' },
    { id: 4, title: 'UI/UX Design Mockup', student: 'Jordan Taylor', submitted: '3 days ago' },
  ];
  
  const recentActivities = [
    { type: 'review', message: 'You graded Jamie Chen\'s assignment', time: '2 hours ago' },
    { type: 'session', message: 'Session with Sasha Johnson completed', time: '5 hours ago' },
    { type: 'message', message: 'Alex Smith sent you a message', time: 'Yesterday' },
    { type: 'resource', message: 'You uploaded a new resource: "Advanced React Hooks"', time: 'Yesterday' },
  ];
  
  const activityIcons = {
    review: 'tabler:clipboard-check',
    session: 'tabler:video',
    message: 'tabler:message-circle',
    resource: 'tabler:file-upload',
  };

  return (
    <div className='border border-red-500 ml-64'>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Mentor Dashboard</h1>
        <p className="text-gray-600">Welcome back, Michelle. Here's what's happening with your mentees today.</p>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6 flex items-center">
            <div className={`${stat.color} text-white p-3 rounded-lg mr-4`}>
              <Icon icon={stat.icon} className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Upcoming Sessions */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="font-bold text-lg text-gray-800">Upcoming Sessions</h2>
            <Link to="/mentor-dashboard/schedule" className="text-purple-600 hover:text-purple-800 text-sm flex items-center">
              View All 
              <Icon icon="tabler:chevron-right" className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="p-4">
            {upcomingSessions.length > 0 ? (
              <div className="divide-y divide-gray-100">
                {upcomingSessions.map(session => (
                  <div key={session.id} className="py-3 flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-gray-800">{session.student}</h3>
                      <p className="text-gray-600 text-sm">{session.topic}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-800">{session.date}</p>
                      <p className="text-gray-600 text-sm">{session.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6">
                <p className="text-gray-500">No upcoming sessions.</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Pending Assignments */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="font-bold text-lg text-gray-800">Pending Assignments</h2>
            <Link to="/mentor-dashboard/assignments" className="text-purple-600 hover:text-purple-800 text-sm flex items-center">
              View All 
              <Icon icon="tabler:chevron-right" className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="p-4">
            {pendingAssignments.length > 0 ? (
              <div className="divide-y divide-gray-100">
                {pendingAssignments.map(assignment => (
                  <div key={assignment.id} className="py-3 flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-gray-800">{assignment.title}</h3>
                      <p className="text-gray-600 text-sm">By {assignment.student}</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500 text-sm mr-3">{assignment.submitted}</span>
                      <button className="text-purple-600 hover:text-purple-800">
                        <Icon icon="tabler:external-link" className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6">
                <p className="text-gray-500">No pending assignments.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h2 className="font-bold text-lg text-gray-800">Recent Activity</h2>
        </div>
        <div className="p-4">
          {recentActivities.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {recentActivities.map((activity, index) => (
                <div key={index} className="py-3 flex items-start">
                  <div className="bg-gray-100 p-2 rounded-lg mr-3">
                    <Icon icon={activityIcons[activity.type]} className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-gray-800">{activity.message}</p>
                    <p className="text-gray-500 text-sm">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6">
              <p className="text-gray-500">No recent activity.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MentorDashboard;
