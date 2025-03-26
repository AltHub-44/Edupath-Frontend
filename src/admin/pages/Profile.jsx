
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { toast } from 'react-toastify';

const MentorProfile = () => {
  // Mock data
  const [profile, setProfile] = useState({
    name: 'Michelle Brown',
    title: 'Senior Software Engineer',
    bio: 'Passionate software engineer with over 10 years of experience in full-stack development. I specialize in React, Node.js, and cloud architecture. I enjoy mentoring junior developers and helping them grow in their careers.',
    email: 'michelle.brown@example.com',
    phone: '(555) 123-4567',
    location: 'San Francisco, CA',
    company: 'TechInnovate Inc.',
    website: 'https://michellebrown.dev',
    availability: 'Weekdays 4-8pm PST',
    expertise: ['React', 'Node.js', 'JavaScript', 'TypeScript', 'AWS', 'Database Design', 'System Architecture'],
    education: [
      { 
        degree: 'M.S. Computer Science', 
        institution: 'Stanford University', 
        year: '2013',
        logo: 'https://via.placeholder.com/150'
      },
      { 
        degree: 'B.S. Computer Science', 
        institution: 'UC Berkeley', 
        year: '2011',
        logo: 'https://via.placeholder.com/150'
      }
    ],
    experience: [
      {
        title: 'Senior Software Engineer',
        company: 'TechInnovate Inc.',
        period: '2018 - Present',
        description: 'Lead developer for cloud-based enterprise solutions. Managed a team of 5 engineers.'
      },
      {
        title: 'Software Engineer',
        company: 'DataSys Corp',
        period: '2013 - 2018',
        description: 'Full-stack developer working on customer-facing applications.'
      }
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/michellebrown',
      github: 'https://github.com/mbrown',
      twitter: 'https://twitter.com/michelletech'
    }
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({ ...profile });
  const [newExpertise, setNewExpertise] = useState('');
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile({
      ...editedProfile,
      [name]: value
    });
  };
  
  const handleSocialLinkChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile({
      ...editedProfile,
      socialLinks: {
        ...editedProfile.socialLinks,
        [name]: value
      }
    });
  };
  
  const handleAddExpertise = () => {
    if (newExpertise.trim() && !editedProfile.expertise.includes(newExpertise.trim())) {
      setEditedProfile({
        ...editedProfile,
        expertise: [...editedProfile.expertise, newExpertise.trim()]
      });
      setNewExpertise('');
    }
  };
  
  const handleRemoveExpertise = (skill) => {
    setEditedProfile({
      ...editedProfile,
      expertise: editedProfile.expertise.filter(item => item !== skill)
    });
  };
  
  const handleCancel = () => {
    setIsEditing(false);
    setEditedProfile({ ...profile });
  };
  
  const handleSave = () => {
    setProfile({ ...editedProfile });
    setIsEditing(false);
    toast.success('Profile updated successfully');
  };
  
  return (
    <div>
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
        {!isEditing ? (
          <button 
            onClick={() => setIsEditing(true)}
            className="mt-3 md:mt-0 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center"
          >
            <Icon icon="tabler:edit" className="h-5 w-5 mr-2" />
            Edit Profile
          </button>
        ) : (
          <div className="mt-3 md:mt-0 flex space-x-3">
            <button 
              onClick={handleCancel}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={handleSave}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {/* Profile header */}
        <div className="bg-purple-700 h-32 relative">
          <div className="absolute bottom-0 left-6 transform translate-y-1/2">
            <div className="h-24 w-24 rounded-full bg-purple-200 border-4 border-white flex items-center justify-center text-purple-700 text-2xl font-bold">
              MB
            </div>
          </div>
        </div>
        
        <div className="pt-16 px-6 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Profile details */}
            <div className="md:col-span-2 space-y-6">
              {/* Basic info */}
              <div>
                {isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={editedProfile.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Professional Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={editedProfile.title}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Bio
                      </label>
                      <textarea
                        name="bio"
                        value={editedProfile.bio}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      ></textarea>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-gray-800">{profile.name}</h2>
                    <p className="text-purple-600 font-medium">{profile.title}</p>
                    <p className="mt-4 text-gray-700">{profile.bio}</p>
                  </>
                )}
              </div>
              
              {/* Experience */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Experience</h3>
                <div className="space-y-4">
                  {profile.experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-purple-200 pl-4 py-1">
                      <h4 className="font-medium text-gray-800">{exp.title}</h4>
                      <p className="text-purple-600">{exp.company}</p>
                      <p className="text-sm text-gray-500">{exp.period}</p>
                      <p className="mt-1 text-gray-700">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Education */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Education</h3>
                <div className="space-y-4">
                  {profile.education.map((edu, index) => (
                    <div key={index} className="flex items-start">
                      <div className="h-12 w-12 rounded-md bg-gray-200 flex-shrink-0"></div>
                      <div className="ml-4">
                        <h4 className="font-medium text-gray-800">{edu.degree}</h4>
                        <p className="text-purple-600">{edu.institution}</p>
                        <p className="text-sm text-gray-500">{edu.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Expertise */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Areas of Expertise</h3>
                {isEditing ? (
                  <div>
                    <div className="flex mb-3">
                      <input
                        type="text"
                        value={newExpertise}
                        onChange={(e) => setNewExpertise(e.target.value)}
                        placeholder="Add a skill"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      <button
                        onClick={handleAddExpertise}
                        className="px-3 py-2 bg-purple-600 text-white rounded-r-md hover:bg-purple-700"
                      >
                        <Icon icon="tabler:plus" className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {editedProfile.expertise.map((skill, index) => (
                        <div key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full flex items-center">
                          <span>{skill}</span>
                          <button
                            onClick={() => handleRemoveExpertise(skill)}
                            className="ml-2 text-purple-800 hover:text-purple-900"
                          >
                            <Icon icon="tabler:x" className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {profile.expertise.map((skill, index) => (
                      <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Contact info */}
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>
                
                {isEditing ? (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={editedProfile.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={editedProfile.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={editedProfile.location}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={editedProfile.company}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Website
                      </label>
                      <input
                        type="url"
                        name="website"
                        value={editedProfile.website}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Icon icon="tabler:mail" className="h-5 w-5 text-gray-500 mr-3" />
                      <span className="text-gray-800">{profile.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Icon icon="tabler:phone" className="h-5 w-5 text-gray-500 mr-3" />
                      <span className="text-gray-800">{profile.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Icon icon="tabler:map-pin" className="h-5 w-5 text-gray-500 mr-3" />
                      <span className="text-gray-800">{profile.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Icon icon="tabler:building" className="h-5 w-5 text-gray-500 mr-3" />
                      <span className="text-gray-800">{profile.company}</span>
                    </div>
                    <div className="flex items-center">
                      <Icon icon="tabler:world" className="h-5 w-5 text-gray-500 mr-3" />
                      <a href={profile.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {profile.website.replace('https://', '')}
                      </a>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Mentoring</h3>
                
                {isEditing ? (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Availability
                    </label>
                    <input
                      type="text"
                      name="availability"
                      value={editedProfile.availability}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Availability</p>
                      <p className="font-medium text-gray-800">{profile.availability}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Active Mentees</p>
                      <p className="font-medium text-gray-800">4</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Mentoring Since</p>
                      <p className="font-medium text-gray-800">January 2022</p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Social Links</h3>
                
                {isEditing ? (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        LinkedIn
                      </label>
                      <input
                        type="url"
                        name="linkedin"
                        value={editedProfile.socialLinks.linkedin}
                        onChange={handleSocialLinkChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        GitHub
                      </label>
                      <input
                        type="url"
                        name="github"
                        value={editedProfile.socialLinks.github}
                        onChange={handleSocialLinkChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Twitter
                      </label>
                      <input
                        type="url"
                        name="twitter"
                        value={editedProfile.socialLinks.twitter}
                        onChange={handleSocialLinkChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex space-x-3">
                    <a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                      <Icon icon="tabler:brand-linkedin" className="h-6 w-6" />
                    </a>
                    <a href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black">
                      <Icon icon="tabler:brand-github" className="h-6 w-6" />
                    </a>
                    <a href={profile.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                      <Icon icon="tabler:brand-twitter" className="h-6 w-6" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;
