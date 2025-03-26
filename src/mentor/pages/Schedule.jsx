const MentorSchedule = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Mentor Schedule</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Upcoming Sessions</h2>
          <div className="space-y-4">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Session with {['Alex', 'Jamie', 'Taylor'][index]}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {new Date(Date.now() + (index + 1) * 24 * 60 * 60 * 1000).toLocaleDateString()} at {['10:00 AM', '2:30 PM', '4:00 PM'][index]}
                    </p>
                    <p className="text-sm mt-2">
                      Topic: {['React Hooks Deep Dive', 'Career Path Planning', 'Project Review'][index]}
                    </p>
                  </div>
                  <div className="flex">
                    <button className="text-blue-600 hover:text-blue-800 mr-3 text-sm">
                      Reschedule
                    </button>
                    <button className="text-red-600 hover:text-red-800 text-sm">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-4">Available Time Slots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                <p className="font-medium">
                  {new Date(Date.now() + (index + 4) * 24 * 60 * 60 * 1000).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-500">
                  {['9:00 AM - 12:00 PM', '1:00 PM - 3:00 PM', '3:30 PM - 5:30 PM'][index % 3]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorSchedule;
