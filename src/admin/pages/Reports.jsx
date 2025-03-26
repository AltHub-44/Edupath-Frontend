
import  { useState } from 'react';
import { Icon } from '@iconify/react';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';

const AdminReports = () => {
  const [timeRange, setTimeRange] = useState('month');
  const [reportType, setReportType] = useState('overview');
  
  const activityData = {
    week: [
      { name: 'Mon', mentorSessions: 12, assignments: 8, resourceViews: 25 },
      { name: 'Tue', mentorSessions: 19, assignments: 10, resourceViews: 30 },
      { name: 'Wed', mentorSessions: 15, assignments: 12, resourceViews: 28 },
      { name: 'Thu', mentorSessions: 18, assignments: 15, resourceViews: 32 },
      { name: 'Fri', mentorSessions: 20, assignments: 5, resourceViews: 27 },
      { name: 'Sat', mentorSessions: 8, assignments: 3, resourceViews: 15 },
      { name: 'Sun', mentorSessions: 5, assignments: 2, resourceViews: 10 }
    ],
    month: [
      { name: 'Week 1', mentorSessions: 65, assignments: 45, resourceViews: 120 },
      { name: 'Week 2', mentorSessions: 72, assignments: 52, resourceViews: 145 },
      { name: 'Week 3', mentorSessions: 60, assignments: 48, resourceViews: 115 },
      { name: 'Week 4', mentorSessions: 78, assignments: 55, resourceViews: 150 }
    ],
    quarter: [
      { name: 'Jan', mentorSessions: 250, assignments: 180, resourceViews: 450 },
      { name: 'Feb', mentorSessions: 275, assignments: 200, resourceViews: 480 },
      { name: 'Mar', mentorSessions: 290, assignments: 210, resourceViews: 520 }
    ],
    year: [
      { name: 'Q1', mentorSessions: 815, assignments: 590, resourceViews: 1450 },
      { name: 'Q2', mentorSessions: 830, assignments: 610, resourceViews: 1520 },
      { name: 'Q3', mentorSessions: 860, assignments: 640, resourceViews: 1580 },
      { name: 'Q4', mentorSessions: 890, assignments: 670, resourceViews: 1650 }
    ]
  };
  
  // Mock data for user growth
  const userGrowthData = {
    week: [
      { name: 'Mon', mentors: 2, students: 15 },
      { name: 'Tue', mentors: 0, students: 12 },
      { name: 'Wed', mentors: 1, students: 18 },
      { name: 'Thu', mentors: 3, students: 20 },
      { name: 'Fri', mentors: 2, students: 22 },
      { name: 'Sat', mentors: 0, students: 10 },
      { name: 'Sun', mentors: 0, students: 8 }
    ],
    month: [
      { name: 'Week 1', mentors: 8, students: 75 },
      { name: 'Week 2', mentors: 5, students: 82 },
      { name: 'Week 3', mentors: 7, students: 68 },
      { name: 'Week 4', mentors: 10, students: 95 }
    ],
    quarter: [
      { name: 'Jan', mentors: 30, students: 320 },
      { name: 'Feb', mentors: 25, students: 280 },
      { name: 'Mar', mentors: 35, students: 350 }
    ],
    year: [
      { name: 'Q1', mentors: 90, students: 950 },
      { name: 'Q2', mentors: 110, students: 1050 },
      { name: 'Q3', mentors: 85, students: 850 },
      { name: 'Q4', mentors: 105, students: 1100 }
    ]
  };
  
  // Mock data for course popularity
  const coursePopularityData = [
    { name: 'Web Development', students: 350, fill: '#8884d8' },
    { name: 'Data Science', students: 280, fill: '#83a6ed' },
    { name: 'UI/UX Design', students: 200, fill: '#8dd1e1' },
    { name: 'Mobile Development', students: 180, fill: '#82ca9d' },
    { name: 'Machine Learning', students: 150, fill: '#a4de6c' },
    { name: 'Cybersecurity', students: 120, fill: '#d0ed57' }
  ];
  
  // Mock data for mentor performance
  const mentorPerformanceData = [
    { name: 'Michelle B.', rating: 4.9, students: 12, completionRate: 95 },
    { name: 'David L.', rating: 4.8, students: 15, completionRate: 92 },
    { name: 'Sarah K.', rating: 4.7, students: 10, completionRate: 90 },
    { name: 'James R.', rating: 4.5, students: 8, completionRate: 85 },
    { name: 'Anna M.', rating: 4.9, students: 14, completionRate: 96 },
    { name: 'Robert T.', rating: 4.6, students: 11, completionRate: 88 },
    { name: 'Emma S.', rating: 4.8, students: 13, completionRate: 93 }
  ];
  
  const generateReport = () => {
    // In a real application, this would generate a PDF or CSV report
    console.log('Generating report for:', reportType, 'over', timeRange);
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  };
  
  const handleDownloadReport = async () => {
    await generateReport();
    alert(`Downloaded ${reportType} report for the ${timeRange}`);
  };
  
  return (
    <div>
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Analytics & Reports</h1>
          <p className="text-gray-600">Monitor platform activity and performance metrics</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button 
            onClick={handleDownloadReport}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition-colors"
          >
            <Icon icon="tabler:download" className="h-5 w-5 mr-2" />
            Download Report
          </button>
        </div>
      </div>
      
      {/* Report Controls */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Report Type</label>
            <div className="flex flex-wrap gap-2">
              <button 
                className={`px-4 py-2 rounded-lg ${reportType === 'overview' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}
                onClick={() => setReportType('overview')}
              >
                Platform Overview
              </button>
              <button 
                className={`px-4 py-2 rounded-lg ${reportType === 'users' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}
                onClick={() => setReportType('users')}
              >
                User Growth
              </button>
              <button 
                className={`px-4 py-2 rounded-lg ${reportType === 'courses' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}
                onClick={() => setReportType('courses')}
              >
                Course Analytics
              </button>
              <button 
                className={`px-4 py-2 rounded-lg ${reportType === 'mentors' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}
                onClick={() => setReportType('mentors')}
              >
                Mentor Performance
              </button>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Time Range</label>
            <div className="flex gap-2">
              <button 
                className={`px-4 py-2 rounded-lg ${timeRange === 'week' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}
                onClick={() => setTimeRange('week')}
              >
                Week
              </button>
              <button 
                className={`px-4 py-2 rounded-lg ${timeRange === 'month' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}
                onClick={() => setTimeRange('month')}
              >
                Month
              </button>
              <button 
                className={`px-4 py-2 rounded-lg ${timeRange === 'quarter' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}
                onClick={() => setTimeRange('quarter')}
              >
                Quarter
              </button>
              <button 
                className={`px-4 py-2 rounded-lg ${timeRange === 'year' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}
                onClick={() => setTimeRange('year')}
              >
                Year
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Platform Overview Report */}
      {reportType === 'overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Icon icon="tabler:users" className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Users</p>
                  <p className="text-2xl font-bold">2,548</p>
                  <p className="text-xs text-green-600">+12% from last month</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Icon icon="tabler:calendar-event" className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Mentor Sessions</p>
                  <p className="text-2xl font-bold">385</p>
                  <p className="text-xs text-green-600">+8% from last month</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Icon icon="tabler:certificate" className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Course Completion</p>
                  <p className="text-2xl font-bold">73%</p>
                  <p className="text-xs text-green-600">+5% from last month</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Platform Activity</h2>
            <div style={{ height: '400px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={activityData[timeRange]}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="mentorSessions" name="Mentor Sessions" fill="#8884d8" />
                  <Bar dataKey="assignments" name="Assignments" fill="#82ca9d" />
                  <Bar dataKey="resourceViews" name="Resource Views" fill="#ffc658" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}
      
      {/* User Growth Report */}
      {reportType === 'users' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Icon icon="tabler:users" className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Students</p>
                  <p className="text-2xl font-bold">2,320</p>
                  <p className="text-xs text-green-600">+14% from last month</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Icon icon="tabler:user-check" className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Mentors</p>
                  <p className="text-2xl font-bold">228</p>
                  <p className="text-xs text-green-600">+5% from last month</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">User Growth</h2>
            <div style={{ height: '400px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={userGrowthData[timeRange]}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="students" 
                    name="Students" 
                    stroke="#8884d8" 
                    activeDot={{ r: 8 }} 
                    strokeWidth={2} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="mentors" 
                    name="Mentors" 
                    stroke="#82ca9d" 
                    strokeWidth={2} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">User Retention</h2>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h3 className="text-md font-medium text-gray-800 mb-3 text-center">Students</h3>
                <div style={{ height: '300px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[
                          { name: 'Active', value: 70, fill: '#82ca9d' },
                          { name: 'Inactive', value: 15, fill: '#ffc658' },
                          { name: 'Dropped', value: 15, fill: '#ff8042' }
                        ]}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      />
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-md font-medium text-gray-800 mb-3 text-center">Mentors</h3>
                <div style={{ height: '300px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[
                          { name: 'Active', value: 85, fill: '#82ca9d' },
                          { name: 'Inactive', value: 10, fill: '#ffc658' },
                          { name: 'Dropped', value: 5, fill: '#ff8042' }
                        ]}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      />
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Course Analytics Report */}
      {reportType === 'courses' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Icon icon="tabler:book" className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Courses</p>
                  <p className="text-2xl font-bold">42</p>
                  <p className="text-xs text-green-600">+3 from last month</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Icon icon="tabler:users" className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Active Enrollments</p>
                  <p className="text-2xl font-bold">1,875</p>
                  <p className="text-xs text-green-600">+8% from last month</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Icon icon="tabler:certificate" className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Completion Rate</p>
                  <p className="text-2xl font-bold">68%</p>
                  <p className="text-xs text-green-600">+4% from last month</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Course Popularity</h2>
            <div style={{ height: '400px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={coursePopularityData}
                  layout="vertical"
                  margin={{
                    top: 20,
                    right: 30,
                    left: 100,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis type="category" dataKey="name" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="students" name="Enrolled Students" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Course Ratings Distribution</h2>
            <div style={{ height: '300px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { name: '5 Stars', value: 45, fill: '#4CAF50' },
                      { name: '4 Stars', value: 35, fill: '#8BC34A' },
                      { name: '3 Stars', value: 15, fill: '#FFC107' },
                      { name: '2 Stars', value: 4, fill: '#FF9800' },
                      { name: '1 Star', value: 1, fill: '#F44336' }
                    ]}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}
      
      {/* Mentor Performance Report */}
      {reportType === 'mentors' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Icon icon="tabler:user-check" className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Active Mentors</p>
                  <p className="text-2xl font-bold">228</p>
                  <p className="text-xs text-green-600">+5% from last month</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Icon icon="tabler:star" className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Average Rating</p>
                  <p className="text-2xl font-bold">4.7</p>
                  <p className="text-xs text-green-600">+0.2 from last month</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Icon icon="tabler:clock" className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Avg. Response Time</p>
                  <p className="text-2xl font-bold">6.2 hrs</p>
                  <p className="text-xs text-green-600">-0.5 hrs from last month</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Top Performing Mentors</h2>
            <div style={{ height: '400px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={mentorPerformanceData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="rating" name="Rating (out of 5)" fill="#8884d8" />
                  <Bar dataKey="students" name="Active Students" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Mentor Completion Rates</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Mentor
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Rating
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Students
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Completion Rate
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Progress
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mentorPerformanceData.map((mentor, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {mentor.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {mentor.rating} <Icon icon="tabler:star" className="h-4 w-4 text-yellow-400 inline" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {mentor.students}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {mentor.completionRate}%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className={`h-2.5 rounded-full ${
                              mentor.completionRate > 90 ? 'bg-green-600' : 
                              mentor.completionRate > 80 ? 'bg-blue-600' : 
                              'bg-yellow-600'
                            }`}
                            style={{ width: `${mentor.completionRate}%` }}
                          ></div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminReports;
