import { useState } from 'react';

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState('general');
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Admin Settings</h1>
      
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/4 bg-gray-50 p-4 md:p-6">
            <nav className="space-y-1">
              <button 
                onClick={() => setActiveTab('general')}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'general' 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-gray-900 hover:bg-gray-100'
                }`}
              >
                General Settings
              </button>
              <button 
                onClick={() => setActiveTab('appearance')}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'appearance' 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-gray-900 hover:bg-gray-100'
                }`}
              >
                Appearance
              </button>
              <button 
                onClick={() => setActiveTab('registration')}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'registration' 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-gray-900 hover:bg-gray-100'
                }`}
              >
                User Registration
              </button>
              <button 
                onClick={() => setActiveTab('notifications')}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'notifications' 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-gray-900 hover:bg-gray-100'
                }`}
              >
                Email Notifications
              </button>
              <button 
                onClick={() => setActiveTab('security')}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'security' 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-gray-900 hover:bg-gray-100'
                }`}
              >
                Security
              </button>
              <button 
                onClick={() => setActiveTab('integrations')}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'integrations' 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-gray-900 hover:bg-gray-100'
                }`}
              >
                Integrations
              </button>
              <button 
                onClick={() => setActiveTab('billing')}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'billing' 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-gray-900 hover:bg-gray-100'
                }`}
              >
                Billing & Payments
              </button>
              <button 
                onClick={() => setActiveTab('api')}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'api' 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-gray-900 hover:bg-gray-100'
                }`}
              >
                API Settings
              </button>
            </nav>
          </div>
          
          <div className="md:w-3/4 p-4 md:p-6">
            {activeTab === 'general' && (
              <div>
                <h2 className="text-lg font-medium mb-6">General Settings</h2>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="platform-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Platform Name
                    </label>
                    <input 
                      type="text" 
                      id="platform-name" 
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      defaultValue="EduMentor" 
                    />
                    <p className="mt-1 text-sm text-gray-500">
                      This is how your platform will be displayed to users.
                    </p>
                  </div>
                  
                  <div>
                    <label htmlFor="admin-email" className="block text-sm font-medium text-gray-700 mb-1">
                      Administrator Email
                    </label>
                    <input 
                      type="email" 
                      id="admin-email" 
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      defaultValue="admin@edumentor.com" 
                    />
                    <p className="mt-1 text-sm text-gray-500">
                      System notifications and alerts will be sent to this email.
                    </p>
                  </div>
                  
                  <div>
                    <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 mb-1">
                      Default Timezone
                    </label>
                    <select 
                      id="timezone"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      defaultValue="America/Los_Angeles"
                    >
                      <option value="America/Los_Angeles">Pacific Time (US & Canada)</option>
                      <option value="America/Denver">Mountain Time (US & Canada)</option>
                      <option value="America/Chicago">Central Time (US & Canada)</option>
                      <option value="America/New_York">Eastern Time (US & Canada)</option>
                      <option value="Europe/London">London</option>
                      <option value="Europe/Paris">Paris</option>
                      <option value="Asia/Tokyo">Tokyo</option>
                      <option value="Australia/Sydney">Sydney</option>
                    </select>
                    <p className="mt-1 text-sm text-gray-500">
                      All dates and times will be displayed in this timezone by default.
                    </p>
                  </div>
                  
                  <div>
                    <label htmlFor="date-format" className="block text-sm font-medium text-gray-700 mb-1">
                      Date Format
                    </label>
                    <select 
                      id="date-format"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      defaultValue="MM/DD/YYYY"
                    >
                      <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                      <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                      <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                    </select>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="maintenance-mode"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="maintenance-mode" className="font-medium text-gray-700">
                        Maintenance Mode
                      </label>
                      <p className="text-gray-500">
                        When enabled, only administrators can access the platform.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'registration' && (
              <div>
                <h2 className="text-lg font-medium mb-6">User Registration Settings</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="allow-registration"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        defaultChecked
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="allow-registration" className="font-medium text-gray-700">
                        Allow New Registrations
                      </label>
                      <p className="text-gray-500">
                        When disabled, new users cannot register on the platform.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="email-verification"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        defaultChecked
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="email-verification" className="font-medium text-gray-700">
                        Require Email Verification
                      </label>
                      <p className="text-gray-500">
                        New users must verify their email address before they can log in.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="mentor-approval"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        defaultChecked
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="mentor-approval" className="font-medium text-gray-700">
                        Manual Approval for Mentors
                      </label>
                      <p className="text-gray-500">
                        Require administrator approval for new mentor accounts.
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="default-role" className="block text-sm font-medium text-gray-700 mb-1">
                      Default User Role
                    </label>
                    <select 
                      id="default-role"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      defaultValue="student"
                    >
                      <option value="student">Student</option>
                      <option value="mentor">Mentor</option>
                    </select>
                    <p className="mt-1 text-sm text-gray-500">
                      Default role assigned to new users upon registration.
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Other settings tabs would go here */}
            {activeTab !== 'general' && activeTab !== 'registration' && (
              <div className="text-center py-16">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Settings
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  This settings panel would contain options for {activeTab}.
                </p>
              </div>
            )}
            
            <div className="mt-8 flex justify-end">
              <button 
                type="button"
                className="mr-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancel
              </button>
              <button 
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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

export default AdminSettings;
