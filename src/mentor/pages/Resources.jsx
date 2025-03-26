
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { toast } from 'react-toastify';

const MentorResources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [selectedResource, setSelectedResource] = useState(null);
  const [assignModalOpen, setAssignModalOpen] = useState(false);
  
  // Mock data for resources
  const resources = [
    {
      id: 1,
      title: 'Complete Web Development Roadmap',
      description: 'A comprehensive guide to becoming a full-stack web developer, from HTML/CSS basics to advanced frameworks and deployment.',
      category: 'Guide',
      author: 'Admin',
      dateAdded: '2023-07-15',
      type: 'PDF',
      size: '2.4 MB',
      views: 1254,
      downloads: 876,
      thumbnailUrl: 'https://via.placeholder.com/300x200',
      tags: ['web development', 'career path', 'programming']
    },
    {
      id: 2,
      title: 'JavaScript: The Modern Parts',
      description: 'Learn the most important features of modern JavaScript (ES6+) with practical examples and exercises.',
      category: 'Tutorial',
      author: 'Admin',
      dateAdded: '2023-06-22',
      type: 'Video',
      size: '450 MB',
      views: 743,
      downloads: 512,
      thumbnailUrl: 'https://via.placeholder.com/300x200',
      tags: ['javascript', 'ES6', 'programming']
    },
    {
      id: 3,
      title: 'Database Design Principles',
      description: 'A guide to designing efficient and scalable databases for web applications. Covers normalization, indexing, and query optimization.',
      category: 'Guide',
      author: 'Admin',
      dateAdded: '2023-08-01',
      type: 'PDF',
      size: '1.8 MB',
      views: 598,
      downloads: 421,
      thumbnailUrl: 'https://via.placeholder.com/300x200',
      tags: ['database', 'SQL', 'architecture']
    },
    {
      id: 4,
      title: 'Building RESTful APIs',
      description: 'Learn how to design and implement RESTful APIs that follow best practices and industry standards.',
      category: 'Tutorial',
      author: 'Admin',
      dateAdded: '2023-07-05',
      type: 'Document',
      size: '1.2 MB',
      views: 862,
      downloads: 634,
      thumbnailUrl: 'https://via.placeholder.com/300x200',
      tags: ['API', 'REST', 'backend']
    },
    {
      id: 5,
      title: 'React and Redux: Complete Course',
      description: 'Master React.js and Redux with this comprehensive course covering components, hooks, state management and more.',
      category: 'Course',
      author: 'Admin',
      dateAdded: '2023-05-18',
      type: 'Video Series',
      size: '1.2 GB',
      views: 1875,
      downloads: 1243,
      thumbnailUrl: 'https://via.placeholder.com/300x200',
      tags: ['react', 'redux', 'frontend']
    },
    {
      id: 6,
      title: 'Problem Solving in Technical Interviews',
      description: 'Strategies and practice problems to help you excel in technical coding interviews.',
      category: 'Guide',
      author: 'Admin',
      dateAdded: '2023-06-10',
      type: 'PDF',
      size: '3.5 MB',
      views: 2134,
      downloads: 1876,
      thumbnailUrl: 'https://via.placeholder.com/300x200',
      tags: ['interviews', 'algorithms', 'career']
    }
  ];
  
  // Mock data for mentees
  const mentees = [
    { id: 1, name: 'Jamie Chen', avatar: 'JC', course: 'Web Development' },
    { id: 2, name: 'Alex Smith', avatar: 'AS', course: 'UI/UX Design' },
    { id: 3, name: 'Taylor Williams', avatar: 'TW', course: 'JavaScript Masterclass' },
    { id: 4, name: 'Jordan Taylor', avatar: 'JT', course: 'React & Redux' },
    { id: 5, name: 'Robin Lee', avatar: 'RL', course: 'Node.js Fundamentals' }
  ];
  
  // Filter resources based on search and category
  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = categoryFilter === 'all' || resource.category.toLowerCase() === categoryFilter.toLowerCase();
    
    return matchesSearch && matchesCategory;
  });
  
  const handleResourceClick = (resource) => {
    setSelectedResource(resource);
  };
  
  const handleViewResource = () => {
    toast.info(`Viewing resource: ${selectedResource.title}`);
    // Logic to view the resource
  };
  
  const handleDownloadResource = () => {
    toast.success(`Downloading resource: ${selectedResource.title}`);
    // Logic to download the resource
  };
  
  const handleAssignResource = () => {
    setAssignModalOpen(true);
  };
  
  const handleAssignToMentee = (menteeId) => {
    toast.success(`Resource assigned to mentee`);
    setAssignModalOpen(false);
  };
  
  return (
    <div>
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Resources Library</h1>
          <p className="text-gray-600">Browse and assign educational resources to your mentees</p>
        </div>
      </div>
      
      {/* Search and filters */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="relative flex-1">
            <Icon icon="tabler:search" className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search resources..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button 
              className={`px-4 py-2 rounded-lg ${categoryFilter === 'all' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'}`}
              onClick={() => setCategoryFilter('all')}
            >
              All
            </button>
            <button 
              className={`px-4 py-2 rounded-lg ${categoryFilter === 'guide' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'}`}
              onClick={() => setCategoryFilter('guide')}
            >
              Guides
            </button>
            <button 
              className={`px-4 py-2 rounded-lg ${categoryFilter === 'tutorial' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'}`}
              onClick={() => setCategoryFilter('tutorial')}
            >
              Tutorials
            </button>
            <button 
              className={`px-4 py-2 rounded-lg ${categoryFilter === 'course' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'}`}
              onClick={() => setCategoryFilter('course')}
            >
              Courses
            </button>
          </div>
        </div>
      </div>
      
      {/* Resources grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {filteredResources.map((resource) => (
          <div 
            key={resource.id} 
            className="bg-white rounded-lg shadow overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => handleResourceClick(resource)}
          >
            <div className="h-40 bg-gray-200 relative">
              <img 
                src={resource.thumbnailUrl} 
                alt={resource.title} 
                className="h-full w-full object-cover"
              />
              <div className="absolute top-2 right-2 px-2 py-1 rounded-full bg-white text-xs font-medium">
                {resource.type}
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-gray-900 line-clamp-2">{resource.title}</h3>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-purple-100 text-purple-800">
                  {resource.category}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">{resource.description}</p>
              <div className="flex flex-wrap gap-1 mb-3">
                {resource.tags.map((tag, index) => (
                  <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Added: {new Date(resource.dateAdded).toLocaleDateString()}</span>
                <span>{resource.size}</span>
              </div>
            </div>
          </div>
        ))}
        
        {filteredResources.length === 0 && (
          <div className="col-span-full text-center py-10">
            <Icon icon="tabler:file-search" className="h-10 w-10 text-gray-400 mx-auto mb-2" />
            <h3 className="text-lg font-medium text-gray-900">No resources found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
      
      {/* Resource detail modal */}
      {selectedResource && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold text-gray-800">{selectedResource.title}</h2>
                <button 
                  onClick={() => setSelectedResource(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <Icon icon="tabler:x" className="h-6 w-6" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4">
                  <div className="h-48 bg-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src={selectedResource.thumbnailUrl} 
                      alt={selectedResource.title} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-800 mb-2">Description</h3>
                    <p className="text-gray-700">{selectedResource.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-800 mb-2">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedResource.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-800 mb-3">Resource Details</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Category:</span>
                        <span className="font-medium">{selectedResource.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Type:</span>
                        <span className="font-medium">{selectedResource.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Size:</span>
                        <span className="font-medium">{selectedResource.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Added:</span>
                        <span className="font-medium">{new Date(selectedResource.dateAdded).toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Author:</span>
                        <span className="font-medium">{selectedResource.author}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-800 mb-3">Statistics</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Views:</span>
                        <span className="font-medium">{selectedResource.views}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Downloads:</span>
                        <span className="font-medium">{selectedResource.downloads}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <button
                      onClick={handleViewResource}
                      className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center"
                    >
                      <Icon icon="tabler:eye" className="h-5 w-5 mr-2" />
                      View Resource
                    </button>
                    <button
                      onClick={handleDownloadResource}
                      className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                    >
                      <Icon icon="tabler:download" className="h-5 w-5 mr-2" />
                      Download
                    </button>
                    <button
                      onClick={handleAssignResource}
                      className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                      <Icon icon="tabler:send" className="h-5 w-5 mr-2" />
                      Assign to Mentee
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Assign to mentee modal */}
      {assignModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-800">Assign Resource</h2>
                <button 
                  onClick={() => setAssignModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <Icon icon="tabler:x" className="h-5 w-5" />
                </button>
              </div>
              
              <p className="mb-4 text-gray-600">
                Select which mentee to assign "{selectedResource.title}" to:
              </p>
              
              <div className="space-y-2 max-h-64 overflow-y-auto mb-4">
                {mentees.map((mentee) => (
                  <div 
                    key={mentee.id}
                    onClick={() => handleAssignToMentee(mentee.id)}
                    className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                  >
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-medium">
                      {mentee.avatar}
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-gray-800">{mentee.name}</p>
                      <p className="text-sm text-gray-500">{mentee.course}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-end">
                <button
                  onClick={() => setAssignModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MentorResources;
