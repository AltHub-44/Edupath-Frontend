
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { toast } from 'react-toastify';

const AdminMentors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [showAddModal, setShowAddModal] = useState(false);
  
  const [newMentor, setNewMentor] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialization: '',
    experience: '',
    availability: 'part-time',
    bio: ''
  });
  
  const mentors = [
    {
      id: 1,
      name: 'Michelle Brown',
      avatar: 'MB',
      email: 'michelle.brown@example.com',
      specialization: 'Web Development',
      experience: '8 years',
      availability: 'Full-time',
      rating: 4.9,
      mentees: 12,
      status: 'active',
      joinDate: '2022-03-15'
    },
    {
      id: 2,
      name: 'David Lewis',
      avatar: 'DL',
      email: 'david.lewis@example.com',
      specialization: 'Data Science',
      experience: '10 years',
      availability: 'Part-time',
      rating: 4.8,
      mentees: 15,
      status: 'active',
      joinDate: '2022-01-10'
    },
    {
      id: 3,
      name: 'Sarah Kim',
      avatar: 'SK',
      email: 'sarah.kim@example.com',
      specialization: 'UI/UX Design',
      experience: '6 years',
      availability: 'Full-time',
      rating: 4.7,
      mentees: 10,
      status: 'active',
      joinDate: '2022-05-22'
    },
    {
      id: 4,
      name: 'James Rodriguez',
      avatar: 'JR',
      email: 'james.rodriguez@example.com',
      specialization: 'Mobile Development',
      experience: '7 years',
      availability: 'Part-time',
      rating: 4.5,
      mentees: 8,
      status: 'inactive',
      joinDate: '2022-02-18'
    },
    {
      id: 5,
      name: 'Anna Martinez',
      avatar: 'AM',
      email: 'anna.martinez@example.com',
      specialization: 'Cybersecurity',
      experience: '9 years',
      availability: 'Full-time',
      rating: 4.9,
      mentees: 14,
      status: 'active',
      joinDate: '2022-04-05'
    },
    {
      id: 6,
      name: 'Robert Taylor',
      avatar: 'RT',
      email: 'robert.taylor@example.com',
      specialization: 'Product Management',
      experience: '12 years',
      availability: 'Part-time',
      rating: 4.6,
      mentees: 11,
      status: 'pending',
      joinDate: '2022-06-15'
    },
    {
      id: 7,
      name: 'Emma Smith',
      avatar: 'ES',
      email: 'emma.smith@example.com',
      specialization: 'Machine Learning',
      experience: '5 years',
      availability: 'Full-time',
      rating: 4.8,
      mentees: 13,
      status: 'active',
      joinDate: '2022-05-01'
    }
  ];
  
  // Filter and sort mentors
  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          mentor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          mentor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || mentor.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  }).sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'rating') {
      return b.rating - a.rating;
    } else if (sortBy === 'mentees') {
      return b.mentees - a.mentees;
    } else if (sortBy === 'joinDate') {
      return new Date(b.joinDate) - new Date(a.joinDate);
    }
    return 0;
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMentor({
      ...newMentor,
      [name]: value
    });
  };
  
  const handleAddMentor = (e) => {
    e.preventDefault();
    
    if (!newMentor.firstName || !newMentor.lastName || !newMentor.email || !newMentor.specialization) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    // In a real app, this would send the mentor data to an API
    toast.success('Mentor added successfully');
    
    // Reset form and close modal
    setNewMentor({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      specialization: '',
      experience: '',
      availability: 'part-time',
      bio: ''
    });
    setShowAddModal(false);
  };
  
  const handleStatusChange = (mentorId, newStatus) => {
    toast.success(`Mentor status updated to ${newStatus}`);
  };
  
  const handleDeleteMentor = (mentorId) => {
    toast.info('Mentor deleted successfully');
  };
  
  return (
    <div>
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Mentors</h1>
          <p className="text-gray-600">Manage mentors and their assignments</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button 
            onClick={() => setShowAddModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition-colors"
          >
            <Icon icon="tabler:user-plus" className="h-5 w-5 mr-2" />
            Add New Mentor
          </button>
        </div>
      </div>
      
      {/* Search and filters */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-1">
            <Icon icon="tabler:search" className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search mentors..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-4">
            <div>
              <label htmlFor="statusFilter" className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                id="statusFilter"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
              </select>
            </div>
            <div>
              <label htmlFor="sortBy" className="block text-sm font-medium text-gray-700 mb-1">
                Sort By
              </label>
              <select
                id="sortBy"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="name">Name</option>
                <option value="rating">Rating</option>
                <option value="mentees">Mentees</option>
                <option value="joinDate">Join Date</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mentor
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Specialization
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Availability
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rating
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mentees
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredMentors.map((mentor) => (
                <tr key={mentor.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-200 flex items-center justify-center text-blue-700">
                        {mentor.avatar}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{mentor.name}</div>
                        <div className="text-sm text-gray-500">{mentor.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{mentor.specialization}</div>
                    <div className="text-sm text-gray-500">{mentor.experience} experience</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{mentor.availability}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-900 mr-1">{mentor.rating}</span>
                      <Icon icon="tabler:star" className="h-4 w-4 text-yellow-400" />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {mentor.mentees}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      mentor.status === 'active' ? 'bg-green-100 text-green-800' : 
                      mentor.status === 'inactive' ? 'bg-gray-100 text-gray-800' : 
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {mentor.status.charAt(0).toUpperCase() + mentor.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end items-center space-x-2">
                      <div className="relative group">
                        <button className="text-blue-600 hover:text-blue-900">
                          <Icon icon="tabler:edit" className="h-5 w-5" />
                        </button>
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                          <button 
                            onClick={() => handleStatusChange(mentor.id, 'active')}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Set as Active
                          </button>
                          <button 
                            onClick={() => handleStatusChange(mentor.id, 'inactive')}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Set as Inactive
                          </button>
                        </div>
                      </div>
                      <button 
                        className="text-gray-600 hover:text-gray-900"
                        onClick={() => toast.info(`Viewing ${mentor.name}'s profile`)}
                      >
                        <Icon icon="tabler:eye" className="h-5 w-5" />
                      </button>
                      <button 
                        className="text-red-600 hover:text-red-900"
                        onClick={() => handleDeleteMentor(mentor.id)}
                      >
                        <Icon icon="tabler:trash" className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredMentors.length === 0 && (
          <div className="text-center py-10">
            <Icon icon="tabler:users" className="h-10 w-10 text-gray-400 mx-auto mb-2" />
            <h3 className="text-lg font-medium text-gray-900">No mentors found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
      
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">Add New Mentor</h2>
                <button 
                  onClick={() => setShowAddModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <Icon icon="tabler:x" className="h-6 w-6" />
                </button>
              </div>
              
              <form onSubmit={handleAddMentor}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={newMentor.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={newMentor.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={newMentor.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={newMentor.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="specialization" className="block text-sm font-medium text-gray-700 mb-1">
                      Specialization *
                    </label>
                    <select
                      id="specialization"
                      name="specialization"
                      value={newMentor.specialization}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select specialization</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile Development">Mobile Development</option>
                      <option value="Data Science">Data Science</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Machine Learning">Machine Learning</option>
                      <option value="Cybersecurity">Cybersecurity</option>
                      <option value="Product Management">Product Management</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                      Years of Experience
                    </label>
                    <input
                      type="text"
                      id="experience"
                      name="experience"
                      value={newMentor.experience}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
                      Availability
                    </label>
                    <select
                      id="availability"
                      name="availability"
                      value={newMentor.availability}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="full-time">Full-time</option>
                      <option value="part-time">Part-time</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    rows={4}
                    value={newMentor.bio}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Briefly describe the mentor's background and expertise..."
                  />
                </div>
                
                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Add Mentor
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminMentors;
