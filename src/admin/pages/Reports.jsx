
import { useState } from 'react';

const AdminReports = () => {
  const [timeRange, setTimeRange] = useState('month');
  
  // This would normally fetch data from an API
  const getChartData = () => {
    return {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          name: 'Students',
          data: [65, 78, 90, 105, 125, 138, 150, 167, 180, 195, 210, 225]
        },
        {
          name: 'Mentors',
          data: [12, 14, 15, 17, 19, 20, 21, 22, 23, 24, 25, 26]
        }
      ]
    };
  };
  
  const chartData = getChartData();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Analytics & Reports</h1>
      
     
      <section className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-sm font-medium text-gray-500">Total Students</h2>
          <p className="mt-2 text-3xl font-semibold">836</p>
          <div className="mt-2 flex items-center text-sm">
            <span className="text-green-500 font-medium">↑ 12%</span>
            <span className="text-gray-500 ml-1">from last month</span>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-sm font-medium text-gray-500">Active Mentors</h2>
          <p className="mt-2 text-3xl font-semibold">42</p>
          <div className="mt-2 flex items-center text-sm">
            <span className="text-green-500 font-medium">↑ 5%</span>
            <span className="text-gray-500 ml-1">from last month</span>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-sm font-medium text-gray-500">Course Completion</h2>
          <p className="mt-2 text-3xl font-semibold">73%</p>
          <div className="mt-2 flex items-center text-sm">
            <span className="text-green-500 font-medium">↑ 8%</span>
            <span className="text-gray-500 ml-1">from last month</span>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-sm font-medium text-gray-500">Avg. Session Duration</h2>
          <p className="mt-2 text-3xl font-semibold">47m</p>
          <div className="mt-2 flex items-center text-sm">
            <span className="text-red-500 font-medium">↓ 3%</span>
            <span className="text-gray-500 ml-1">from last month</span>
          </div>
        </div>
      </section>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h2 className="text-lg font-semibold">Growth Overview</h2>
          <div className="flex space-x-2 mt-2 sm:mt-0">
            <button 
              className={`px-3 py-1 text-sm font-medium rounded-md ${
                timeRange === 'week' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
              }`}
              onClick={() => setTimeRange('week')}
            >
              Week
            </button>
            <button 
              className={`px-3 py-1 text-sm font-medium rounded-md ${
                timeRange === 'month' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
              }`}
              onClick={() => setTimeRange('month')}
            >
              Month
            </button>
            <button 
              className={`px-3 py-1 text-sm font-medium rounded-md ${
                timeRange === 'year' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
              }`}
              onClick={() => setTimeRange('year')}
            >
              Year
            </button>
          </div>
        </div>
        
        {/* Chart placeholder */}
        <div className="h-80 w-full bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-12 w-12 mx-auto text-gray-400" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M3 3a1 1 0 000 2h10a1 1 0 100-2H3zm0 4a1 1 0 000 2h6a1 1 0 100-2H3zm0 4a1 1 0 100 2h4a1 1 0 100-2H3zm12-3a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" 
                clipRule="evenodd" 
              />
            </svg>
            <p className="mt-2 text-sm text-gray-500">
              Chart visualization would be displayed here <br />
              (Using Recharts in a real implementation)
            </p>
          </div>
        </div>
        
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {chartData.datasets.map((dataset, i) => (
            <div key={i} className="flex items-center">
              <span className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-blue-500' : 'bg-green-500'} mr-2`}></span>
              <span className="text-sm text-gray-700">{dataset.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Top Courses by Enrollment</h2>
          <div className="space-y-4">
            {[
              { name: 'Web Development Fundamentals', students: 243, completion: 78 },
              { name: 'Data Science and Machine Learning', students: 178, completion: 65 },
              { name: 'Mobile App Development', students: 120, completion: 82 },
              { name: 'UI/UX Design Principles', students: 95, completion: 70 },
              { name: 'Cloud Computing Essentials', students: 87, completion: 62 },
            ].map((course, index) => (
              <div key={index} className="flex items-center">
                <div className="w-9 text-right mr-4 text-sm text-gray-500">{index + 1}.</div>
                <div className="flex-1">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-medium text-gray-900">{course.name}</h3>
                    <span className="text-sm text-gray-500">{course.students} students</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-2 bg-blue-600 rounded-full" 
                      style={{ width: `${course.completion}%` }}
                    ></div>
                  </div>
                  <div className="mt-1 text-xs text-gray-500 text-right">{course.completion}% completion rate</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Top Performing Mentors</h2>
          <div className="space-y-4">
            {[
              { name: 'Dr. Michael Chen', rating: 4.9, students: 23, feedback: 97 },
              { name: 'Prof. Sarah Johnson', rating: 4.8, students: 18, feedback: 95 },
              { name: 'James Wilson', rating: 4.7, students: 15, feedback: 92 },
              { name: 'Dr. Emily Roberts', rating: 4.7, students: 12, feedback: 90 },
              { name: 'Alex Thompson', rating: 4.6, students: 9, feedback: 89 },
            ].map((mentor, index) => (
              <div key={index} className="flex items-center">
                <div className="w-9 text-right mr-4 text-sm text-gray-500">{index + 1}.</div>
                <div className="flex-1">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-medium text-gray-900">{mentor.name}</h3>
                    <div className="flex items-center">
                      <span className="text-sm font-medium">{mentor.rating}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{mentor.students} active students</span>
                    <span>{mentor.feedback}% positive feedback</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-end">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Download Full Report
        </button>
      </div>
    </div>
  );
};

export default AdminReports;
