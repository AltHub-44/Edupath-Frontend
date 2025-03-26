
const MentorResources = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Mentor Resources</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Teaching Materials</h2>
          <div className="space-y-4">
            {[
              { title: 'Effective Mentoring Guide', type: 'PDF', size: '2.4 MB' },
              { title: 'Student Assessment Framework', type: 'DOC', size: '1.1 MB' },
              { title: 'Interactive Learning Exercises', type: 'ZIP', size: '8.7 MB' },
            ].map((resource, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                <div className="flex items-center">
                  <div className="mr-3 bg-blue-100 text-blue-600 p-2 rounded">
                    <span className="font-semibold">{resource.type}</span>
                  </div>
                  <div>
                    <p className="font-medium">{resource.title}</p>
                    <p className="text-sm text-gray-500">{resource.size}</p>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-800">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Mentor Community</h2>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
              <h3 className="font-medium text-blue-800">Monthly Mentor Meetup</h3>
              <p className="text-sm mt-1">Next session: May 15, 2023 at 3:00 PM</p>
              <button className="mt-3 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm">
                Join Meeting
              </button>
            </div>
            
            <div className="border border-gray-200 rounded-lg divide-y">
              <div className="p-4">
                <h3 className="font-medium">Discussion Forums</h3>
                <p className="text-sm text-gray-500 mt-1">Connect with other mentors</p>
              </div>
              <div className="p-4">
                <h3 className="font-medium">Resource Sharing</h3>
                <p className="text-sm text-gray-500 mt-1">Share materials with colleagues</p>
              </div>
              <div className="p-4">
                <h3 className="font-medium">Mentoring Techniques</h3>
                <p className="text-sm text-gray-500 mt-1">Best practices and methods</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Training & Development</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: 'Effective Feedback', duration: '45 mins', completed: true },
            { title: 'Student Motivation', duration: '60 mins', completed: true },
            { title: 'Conflict Resolution', duration: '30 mins', completed: false },
            { title: 'Learning Styles', duration: '50 mins', completed: false },
            { title: 'Remote Mentoring', duration: '40 mins', completed: false },
            { title: 'Progress Tracking', duration: '35 mins', completed: false },
          ].map((course, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <h3 className="font-medium">{course.title}</h3>
                {course.completed && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    Completed
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500 mt-1">Duration: {course.duration}</p>
              <button 
                className={`mt-3 w-full py-2 rounded-md text-sm ${
                  course.completed 
                    ? 'bg-gray-100 text-gray-600' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {course.completed ? 'Review' : 'Start'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorResources;
