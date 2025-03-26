
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { toast } from 'react-toastify';

const MentorSettings = () => {
  const [activeTab, setActiveTab] = useState('account');
  
  // Account settings
  const [accountSettings, setAccountSettings] = useState({
    email: 'michelle.brown@example.com',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    twoFactorEnabled: true
  });
  
  // Notification settings
  const [notificationSettings, setNotificationSettings] = useState({
    email: {
      assignments: true,
      messages: true,
      menteeActivity: true,
      platformUpdates: false
    },
    push: {
      assignments: true,
      messages: true,
      menteeActivity: false,
      platformUpdates: false
    }
  });
  
  // Availability settings
  const [availabilitySettings, setAvailabilitySettings] = useState({
    maxMentees: 5,
    sessionDuration: 30,
    timeZone: 'America/Los_Angeles',
    availabilitySlots: [
      { day: 'Monday', slots: [{ start: '16:00', end: '18:00' }] },
      { day: 'Wednesday', slots: [{ start: '16:00', end: '18:00' }] },
      { day: 'Friday', slots: [{ start: '14:00', end: '17:00' }] }
    ]
  });
  
  // Privacy settings
  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: 'public',
    showEmail: false,
    showPhone: false,
    allowDirectMessages: true
  });
  
  const handleAccountChange = (e) => {
    const { name, value } = e.target;
    setAccountSettings({
      ...accountSettings,
      [name]: value
    });
  };
  
  const handleNotificationChange = (category, type, value) => {
    setNotificationSettings({
      ...notificationSettings,
      [category]: {
        ...notificationSettings[category],
        [type]: value
      }
    });
  };
  
  const handleAvailabilityChange = (e) => {
    const { name, value } = e.target;
    setAvailabilitySettings({
      ...availabilitySettings,
      [name]: value
    });
  };
  
  const handlePrivacyChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPrivacySettings({
      ...privacySettings,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleTwoFactorToggle = () => {
    setAccountSettings({
      ...accountSettings,
      twoFactorEnabled: !accountSettings.twoFactorEnabled
    });
    
    if (!accountSettings.twoFactorEnabled) {
      toast.info('Two-factor authentication setup would be triggered here');
    } else {
      toast.info('Two-factor authentication disabled');
    }
  };
  
  const handleSaveAccount = (e) => {
    e.preventDefault();
    
    if (accountSettings.newPassword && accountSettings.newPassword !== accountSettings.confirmPassword) {
      toast.error('New passwords do not match');
      return;
    }
    
    toast.success('Account settings saved successfully');
  };
  
  const handleSaveNotifications = (e) => {
    e.preventDefault();
    toast.success('Notification preferences saved');
  };
  
  const handleSaveAvailability = (e) => {
    e.preventDefault();
    toast.success('Availability settings saved');
  };
  
  const handleSavePrivacy = (e) => {
    e.preventDefault();
    toast.success('Privacy settings saved');
  };
  
  const handleAddTimeSlot = (day) => {
    const updatedSlots = availabilitySettings.availabilitySlots.map(slot => {
      if (slot.day === day) {
        return {
          ...slot,
          slots: [...slot.slots, { start: '09:00', end: '10:00' }]
        };
      }
      return slot;
    });
    
    setAvailabilitySettings({
      ...availabilitySettings,
      availabilitySlots: updatedSlots
    });
  };
  
  const handleRemoveTimeSlot = (day, index) => {
    const updatedSlots = availabilitySettings.availabilitySlots.map(slot => {
      if (slot.day === day) {
        return {
          ...slot,
          slots: slot.slots.filter((_, i) => i !== index)
        };
      }
      return slot;
    });
    
    setAvailabilitySettings({
      ...availabilitySettings,
      availabilitySlots: updatedSlots
    });
  };
  
  const handleTimeSlotChange = (day, index, field, value) => {
    const updatedSlots = availabilitySettings.availabilitySlots.map(slot => {
      if (slot.day === day) {
        return {
          ...slot,
          slots: slot.slots.map((timeSlot, i) => {
            if (i === index) {
              return {
                ...timeSlot,
                [field]: value
              };
            }
            return timeSlot;
          })
        };
      }
      return slot;
    });
    
    setAvailabilitySettings({
      ...availabilitySettings,
      availabilitySlots: updatedSlots
    });
  };
  
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar tabs */}
          <div className="w-full md:w-64 bg-gray-50">
            <div className="p-4">
              <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Settings</h2>
              <nav className="mt-2 space-y-1">
                <button
                  onClick={() => setActiveTab('account')}
                  className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                    activeTab === 'account' 
                      ? 'bg-purple-100 text-purple-800' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon icon="tabler:user" className="h-5 w-5 mr-3" />
                  Account
                </button>
                <button
                  onClick={() => setActiveTab('notifications')}
                  className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                    activeTab === 'notifications' 
                      ? 'bg-purple-100 text-purple-800' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon icon="tabler:bell" className="h-5 w-5 mr-3" />
                  Notifications
                </button>
                <button
                  onClick={() => setActiveTab('availability')}
                  className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                    activeTab === 'availability' 
                      ? 'bg-purple-100 text-purple-800' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon icon="tabler:calendar" className="h-5 w-5 mr-3" />
                  Availability
                </button>
                <button
                  onClick={() => setActiveTab('privacy')}
                  className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                    activeTab === 'privacy' 
                      ? 'bg-purple-100 text-purple-800' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon icon="tabler:shield" className="h-5 w-5 mr-3" />
                  Privacy
                </button>
              </nav>
            </div>
          </div>
          
          {/* Main content */}
          <div className="flex-1 p-6">
            {/* Account Settings */}
            {activeTab === 'account' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Account Settings</h2>
                
                <form onSubmit={handleSaveAccount}>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-4">Email Address</h3>
                      <div className="max-w-md">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={accountSettings.email}
                          onChange={handleAccountChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-4">Change Password</h3>
                      <div className="max-w-md space-y-3">
                        <div>
                          <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            Current Password
                          </label>
                          <input
                            type="password"
                            id="currentPassword"
                            name="currentPassword"
                            value={accountSettings.currentPassword}
                            onChange={handleAccountChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            New Password
                          </label>
                          <input
                            type="password"
                            id="newPassword"
                            name="newPassword"
                            value={accountSettings.newPassword}
                            onChange={handleAccountChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm New Password
                          </label>
                          <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={accountSettings.confirmPassword}
                            onChange={handleAccountChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-4">Two-Factor Authentication</h3>
                      <div className="max-w-md">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-800">
                              {accountSettings.twoFactorEnabled ? 'Enabled' : 'Disabled'}
                            </p>
                            <p className="text-sm text-gray-500">
                              {accountSettings.twoFactorEnabled 
                                ? 'Your account is protected with two-factor authentication' 
                                : 'Add an extra layer of security to your account'
                              }
                            </p>
                          </div>
                          <button 
                            type="button"
                            onClick={handleTwoFactorToggle}
                            className={`px-4 py-2 rounded-md text-white ${
                              accountSettings.twoFactorEnabled 
                                ? 'bg-gray-600 hover:bg-gray-700' 
                                : 'bg-green-600 hover:bg-green-700'
                            }`}
                          >
                            {accountSettings.twoFactorEnabled ? 'Disable' : 'Enable'}
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-4">Account Actions</h3>
                      <div className="max-w-md">
                        <button 
                          type="button"
                          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                          onClick={() => toast.info('This would deactivate your account')}
                        >
                          Deactivate Account
                        </button>
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t border-gray-200">
                      <button
                        type="submit"
                        className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
            
            {/* Notification Settings */}
            {activeTab === 'notifications' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Notification Preferences</h2>
                
                <form onSubmit={handleSaveNotifications}>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-4">Email Notifications</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-800">Assignment Updates</p>
                            <p className="text-sm text-gray-500">
                              Get notified when a mentee submits or updates an assignment
                            </p>
                          </div>
                          <label className="inline-flex items-center cursor-pointer">
                            <input 
                              type="checkbox" 
                              className="sr-only peer"
                              checked={notificationSettings.email.assignments}
                              onChange={(e) => handleNotificationChange('email', 'assignments', e.target.checked)}
                            />
                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-purple-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                          </label>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-800">Messages</p>
                            <p className="text-sm text-gray-500">
                              Get notified when you receive a new message
                            </p>
                          </div>
                          <label className="inline-flex items-center cursor-pointer">
                            <input 
                              type="checkbox" 
                              className="sr-only peer"
                              checked={notificationSettings.email.messages}
                              onChange={(e) => handleNotificationChange('email', 'messages', e.target.checked)}
                            />
                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-purple-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                          </label>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-800">Mentee Activity</p>
                            <p className="text-sm text-gray-500">
                              Get notified about important mentee activities
                            </p>
                          </div>
                          <label className="inline-flex items-center cursor-pointer">
                            <input 
                              type="checkbox" 
                              className="sr-only peer"
                              checked={notificationSettings.email.menteeActivity}
                              onChange={(e) => handleNotificationChange('email', 'menteeActivity', e.target.checked)}
                            />
                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-purple-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                          </label>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-800">Platform Updates</p>
                            <p className="text-sm text-gray-500">
                              Get notified about platform news and updates
                            </p>
                          </div>
                          <label className="inline-flex items-center cursor-pointer">
                            <input 
                              type="checkbox" 
                              className="sr-only peer"
                              checked={notificationSettings.email.platformUpdates}
                              onChange={(e) => handleNotificationChange('email', 'platformUpdates', e.target.checked)}
                            />
                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-purple-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-4">Push Notifications</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-800">Assignment Updates</p>
                            <p className="text-sm text-gray-500">
                              Get notified when a mentee submits or updates an assignment
                            </p>
                          </div>
                          <label className="inline-flex items-center cursor-pointer">
                            <input 
                              type="checkbox" 
                              className="sr-only peer"
                              checked={notificationSettings.push.assignments}
                              onChange={(e) => handleNotificationChange('push', 'assignments', e.target.checked)}
                            />
                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-purple-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                          </label>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-800">Messages</p>
                            <p className="text-sm text-gray-500">
                              Get notified when you receive a new message
                            </p>
                          </div>
                          <label className="inline-flex items-center cursor-pointer">
                            <input 
                              type="checkbox" 
                              className="sr-only peer"
                              checked={notificationSettings.push.messages}
                              onChange={(e) => handleNotificationChange('push', 'messages', e.target.checked)}
                            />
                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-purple-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                          </label>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-800">Mentee Activity</p>
                            <p className="text-sm text-gray-500">
                              Get notified about important mentee activities
                            </p>
                          </div>
                          <label className="inline-flex items-center cursor-pointer">
                            <input 
                              type="checkbox" 
                              className="sr-only peer"
                              checked={notificationSettings.push.menteeActivity}
                              onChange={(e) => handleNotificationChange('push', 'menteeActivity', e.target.checked)}
                            />
                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-purple-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                          </label>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-800">Platform Updates</p>
                            <p className="text-sm text-gray-500">
                              Get notified about platform news and updates
                            </p>
                          </div>
                          <label className="inline-flex items-center cursor-pointer">
                            <input 
                              type="checkbox" 
                              className="sr-only peer"
                              checked={notificationSettings.push.platformUpdates}
                              onChange={(e) => handleNotificationChange('push', 'platformUpdates', e.target.checked)}
                            />
                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-purple-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t border-gray-200">
                      <button
                        type="submit"
                        className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                      >
                        Save Preferences
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
            
            {/* Availability Settings */}
            {activeTab === 'availability' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Availability Settings</h2>
                
                <form onSubmit={handleSaveAvailability}>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="maxMentees" className="block text-sm font-medium text-gray-700 mb-1">
                          Maximum Mentees
                        </label>
                        <input
                          type="number"
                          id="maxMentees"
                          name="maxMentees"
                          value={availabilitySettings.maxMentees}
                          onChange={handleAvailabilityChange}
                          min="1"
                          max="20"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="sessionDuration" className="block text-sm font-medium text-gray-700 mb-1">
                          Default Session Duration (minutes)
                        </label>
                        <select
                          id="sessionDuration"
                          name="sessionDuration"
                          value={availabilitySettings.sessionDuration}
                          onChange={handleAvailabilityChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                          <option value="15">15 minutes</option>
                          <option value="30">30 minutes</option>
                          <option value="45">45 minutes</option>
                          <option value="60">60 minutes</option>
                          <option value="90">90 minutes</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="timeZone" className="block text-sm font-medium text-gray-700 mb-1">
                          Time Zone
                        </label>
                        <select
                          id="timeZone"
                          name="timeZone"
                          value={availabilitySettings.timeZone}
                          onChange={handleAvailabilityChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                          <option value="America/Los_Angeles">Pacific Time (PT)</option>
                          <option value="America/Denver">Mountain Time (MT)</option>
                          <option value="America/Chicago">Central Time (CT)</option>
                          <option value="America/New_York">Eastern Time (ET)</option>
                          <option value="Europe/London">Greenwich Mean Time (GMT)</option>
                          <option value="Europe/Paris">Central European Time (CET)</option>
                          <option value="Asia/Tokyo">Japan Standard Time (JST)</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-4">Weekly Schedule</h3>
                      <div className="space-y-4">
                        {availabilitySettings.availabilitySlots.map((daySlot) => (
                          <div key={daySlot.day} className="p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="font-medium text-gray-800">{daySlot.day}</h4>
                              <button
                                type="button"
                                onClick={() => handleAddTimeSlot(daySlot.day)}
                                className="text-sm text-purple-600 hover:text-purple-800 flex items-center"
                              >
                                <Icon icon="tabler:plus" className="h-4 w-4 mr-1" />
                                Add Time Slot
                              </button>
                            </div>
                            
                            {daySlot.slots.map((slot, index) => (
                              <div key={index} className="flex items-center mt-2 space-x-2">
                                <div className="flex-1 grid grid-cols-2 gap-2">
                                  <div>
                                    <label className="block text-xs text-gray-500 mb-1">Start</label>
                                    <input
                                      type="time"
                                      value={slot.start}
                                      onChange={(e) => handleTimeSlotChange(daySlot.day, index, 'start', e.target.value)}
                                      className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-xs text-gray-500 mb-1">End</label>
                                    <input
                                      type="time"
                                      value={slot.end}
                                      onChange={(e) => handleTimeSlotChange(daySlot.day, index, 'end', e.target.value)}
                                      className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => handleRemoveTimeSlot(daySlot.day, index)}
                                  className="text-red-600 hover:text-red-800 p-1 mt-4"
                                >
                                  <Icon icon="tabler:trash" className="h-5 w-5" />
                                </button>
                              </div>
                            ))}
                            
                            {daySlot.slots.length === 0 && (
                              <p className="text-sm text-gray-500 italic">No availability set for {daySlot.day}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t border-gray-200">
                      <button
                        type="submit"
                        className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                      >
                        Save Availability
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
            
            {/* Privacy Settings */}
            {activeTab === 'privacy' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Privacy Settings</h2>
                
                <form onSubmit={handleSavePrivacy}>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-4">Profile Visibility</h3>
                      <div className="max-w-md">
                        <label htmlFor="profileVisibility" className="block text-sm font-medium text-gray-700 mb-1">
                          Who can see your profile
                        </label>
                        <select
                          id="profileVisibility"
                          name="profileVisibility"
                          value={privacySettings.profileVisibility}
                          onChange={handlePrivacyChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                          <option value="public">Public - Anyone on the platform</option>
                          <option value="mentees">Mentees Only - Only your assigned mentees</option>
                          <option value="private">Private - Only admins and you</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-4">Contact Information</h3>
                      <div className="max-w-md space-y-3">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="showEmail"
                            name="showEmail"
                            checked={privacySettings.showEmail}
                            onChange={handlePrivacyChange}
                            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                          />
                          <label htmlFor="showEmail" className="ml-2 block text-sm text-gray-700">
                            Show email address on profile
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="showPhone"
                            name="showPhone"
                            checked={privacySettings.showPhone}
                            onChange={handlePrivacyChange}
                            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                          />
                          <label htmlFor="showPhone" className="ml-2 block text-sm text-gray-700">
                            Show phone number on profile
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-4">Messaging</h3>
                      <div className="max-w-md">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="allowDirectMessages"
                            name="allowDirectMessages"
                            checked={privacySettings.allowDirectMessages}
                            onChange={handlePrivacyChange}
                            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                          />
                          <label htmlFor="allowDirectMessages" className="ml-2 block text-sm text-gray-700">
                            Allow direct messages from all mentees
                          </label>
                        </div>
                        <p className="text-xs text-gray-500 mt-1 ml-6">
                          If disabled, only your assigned mentees can message you
                        </p>
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t border-gray-200">
                      <button
                        type="submit"
                        className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                      >
                        Save Privacy Settings
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorSettings;
