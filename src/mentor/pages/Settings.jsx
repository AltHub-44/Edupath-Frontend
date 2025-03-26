const MentorSettings = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Mentor Settings</h1>
      
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="md:grid md:grid-cols-3">
          <div className="md:col-span-1 bg-gray-50 p-6">
            <nav className="space-y-1">
              <a 
                href="#account" 
                className="text-blue-600 hover:bg-blue-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
              >
                Account Settings
              </a>
              <a 
                href="#availability" 
                className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
              >
                Availability & Schedule
              </a>
              <a 
                href="#notifications" 
                className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
              >
                Notifications
              </a>
              <a 
                href="#security" 
                className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
              >
                Security
              </a>
              <a 
                href="#integrations" 
                className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
              >
                Calendar Integrations
              </a>
              <a 
                href="#preferences" 
                className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
              >
                Mentoring Preferences
              </a>
              <a 
                href="#billing" 
                className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
              >
                Billing & Payments
              </a>
            </nav>
          </div>
          
          <div className="md:col-span-2 p-6">
            <section id="account" className="mb-10">
              <h2 className="text-lg font-medium mb-4">Account Settings</h2>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    defaultValue="Dr. Michael Chen" 
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    defaultValue="michael.chen@example.com" 
                  />
                </div>
                
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Professional Title
                  </label>
                  <input 
                    type="text" 
                    name="title" 
                    id="title" 
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    defaultValue="Senior Software Engineering Mentor" 
                  />
                </div>
                
                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                    Bio
                  </label>
                  <textarea 
                    name="bio" 
                    id="bio" 
                    rows={4}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    defaultValue="I'm a senior software engineer with over 10 years of experience building scalable web applications and distributed systems."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Profile Photo
                  </label>
                  <div className="mt-1 flex items-center">
                    <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                      <img 
                        src="/lovable-uploads/63aab59d-bddb-43b1-963c-ab6f53489f3e.png" 
                        alt="Profile" 
                        className="h-full w-full object-cover"
                      />
                    </span>
                    <button 
                      type="button"
                      className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Change
                    </button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Areas of Expertise
                  </label>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      React
                      <button type="button" className="ml-1.5 inline-flex text-blue-500 hover:text-blue-600">
                        <span className="sr-only">Remove</span>
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </span>
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      Node.js
                      <button type="button" className="ml-1.5 inline-flex text-blue-500 hover:text-blue-600">
                        <span className="sr-only">Remove</span>
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </span>
                    <button 
                      type="button"
                      className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200"
                    >
                      + Add more
                    </button>
                  </div>
                </div>
              </div>
            </section>
            
            <section id="availability" className="hidden">
              <h2 className="text-lg font-medium mb-4">Availability & Schedule</h2>
              {/* Availability settings would go here */}
            </section>
            
            <div className="mt-6 flex items-center justify-end">
              <button 
                type="button" 
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorSettings;
