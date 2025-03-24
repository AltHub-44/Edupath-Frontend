import { useState } from 'react';
import { format } from 'date-fns';
import { Icon } from '@iconify/react';

const Resources = () => {
  const today = new Date();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeTab, setActiveTab] = useState('recent');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Categories data
  const categories = [
    { id: 1, name: "Programming", count: 42, icon: "tabler:file-code" },
    { id: 2, name: "Data Science", count: 28, icon: "tabler:chart-dots" },
    { id: 3, name: "Web Development", count: 35, icon: "tabler:brand-html5" },
    { id: 4, name: "Machine Learning", count: 19, icon: "tabler:brain" },
    { id: 5, name: "Cybersecurity", count: 23, icon: "tabler:shield-lock" },
    { id: 6, name: "Mobile Development", count: 16, icon: "tabler:device-mobile" },
  ];
  
  // Resources by category
  const resourcesByCategory = {
    "Programming": [
      { 
        id: 1, 
        title: "Python Programming Guide", 
        type: "ebook", 
        author: "Code Academy",
        addedDate: "2023-07-15",
        thumbnail: "https://via.placeholder.com/150"
      },
      { 
        id: 2, 
        title: "Introduction to Algorithms", 
        type: "pdf", 
        author: "MIT Press",
        addedDate: "2023-06-28",
        thumbnail: "https://via.placeholder.com/150"
      },
      { 
        id: 3, 
        title: "C++ for Beginners", 
        type: "video", 
        author: "Tech Learning",
        addedDate: "2023-07-10",
        thumbnail: "https://via.placeholder.com/150"
      },
    ],
    "Data Science": [
      { 
        id: 4, 
        title: "Python for Data Analysis", 
        type: "ebook", 
        author: "Wes McKinney",
        addedDate: "2023-07-25",
        thumbnail: "https://via.placeholder.com/150"
      },
      { 
        id: 5, 
        title: "Data Visualization Techniques", 
        type: "article", 
        author: "Data Science Journal",
        addedDate: "2023-08-05",
        thumbnail: "https://via.placeholder.com/150"
      },
    ],
    "Web Development": [
      { 
        id: 6, 
        title: "React.js Masterclass", 
        type: "video", 
        author: "Meta Learning",
        addedDate: "2023-07-28",
        thumbnail: "https://via.placeholder.com/150"
      },
      { 
        id: 7, 
        title: "Full Stack Web Development", 
        type: "ebook", 
        author: "Tech Academy",
        addedDate: "2023-08-10",
        thumbnail: "https://via.placeholder.com/150"
      },
    ],
    "Machine Learning": [
      { 
        id: 8, 
        title: "Machine Learning Algorithms", 
        type: "article", 
        author: "AI Institute",
        addedDate: "2023-08-03",
        thumbnail: "https://via.placeholder.com/150"
      }
    ],
    "Cybersecurity": [
      { 
        id: 9, 
        title: "Network Security Fundamentals", 
        type: "pdf", 
        author: "Security Experts",
        addedDate: "2023-07-20",
        thumbnail: "https://via.placeholder.com/150"
      }
    ],
    "Mobile Development": [
      { 
        id: 10, 
        title: "Flutter App Development", 
        type: "video", 
        author: "Mobile Devs",
        addedDate: "2023-08-12",
        thumbnail: "https://via.placeholder.com/150"
      }
    ]
  };
  
  // Recent resources
  const recentResources = [
    { 
      id: 4, 
      title: "Python for Data Analysis", 
      type: "ebook", 
      category: "Data Science",
      author: "Wes McKinney",
      addedDate: "2023-07-25",
      thumbnail: "https://via.placeholder.com/150"
    },
    { 
      id: 6, 
      title: "React.js Masterclass", 
      type: "video", 
      category: "Web Development",
      author: "Meta Learning",
      addedDate: "2023-07-28",
      thumbnail: "https://via.placeholder.com/150"
    },
    { 
      id: 9, 
      title: "Database Design Fundamentals", 
      type: "pdf", 
      category: "Programming",
      author: "Tech Academy",
      addedDate: "2023-08-01",
      thumbnail: "https://via.placeholder.com/150"
    },
    { 
      id: 8, 
      title: "Machine Learning Algorithms", 
      type: "article", 
      category: "Machine Learning",
      author: "AI Institute",
      addedDate: "2023-08-03",
      thumbnail: "https://via.placeholder.com/150"
    },
  ];
  
  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(selectedCategory === categoryName ? null : categoryName);
  };
  
  const renderResourceIcon = (type) => {
    switch(type) {
      case 'ebook':
      case 'pdf':
        return <Icon icon="tabler:file-text" className="w-5 h-5 text-blue-500" />;
      case 'video':
        return <Icon icon="tabler:video" className="w-5 h-5 text-red-500" />;
      case 'article':
        return <Icon icon="tabler:book" className="w-5 h-5 text-green-500" />;
      default:
        return <Icon icon="tabler:folder" className="w-5 h-5 text-gray-500" />;
    }
  };
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      
      <div className="flex-1 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-8 gap-4">
            <div>
              <h1 className="text-2xl font-bold">Resources Library</h1>
              <p className="text-gray-500">{format(today, 'MMMM dd, yyyy')}</p>
            </div>
            
          </div>
          
          {/* Search */}
          <div className="relative mb-8">
            <Icon icon="tabler:search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text"
              placeholder="Search resources..." 
              className="pl-10 w-full sm:w-96 bg-white border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Categories */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category) => (
                <div 
                  key={category.id} 
                  className={`border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer ${
                    selectedCategory === category.name ? 'bg-blue-50 border-blue-200' : 'bg-white border-gray-200'
                  }`}
                  onClick={() => handleCategoryClick(category.name)}
                >
                  <Icon icon={category.icon} className="w-6 h-6 text-blue-500 mb-2" />
                  <h3 className="font-medium text-base">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count} resources</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Selected Category Resources */}
          {selectedCategory && (
            <div className="mb-8 bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">{selectedCategory} Resources</h2>
                <button 
                  className="text-sm text-blue-500 hover:text-blue-700"
                  onClick={() => setSelectedCategory(null)}
                >
                  View All Categories
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {resourcesByCategory[selectedCategory].map((resource) => (
                  <div key={resource.id} className="bg-gray-50 rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-200">
                    <div className="aspect-video bg-gray-200 relative">
                      <img 
                        src={resource.thumbnail} 
                        alt={resource.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 flex gap-2">
                        <button className="bg-white p-1.5 rounded-full hover:bg-gray-100">
                          <Icon icon="tabler:bookmark" className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="bg-white p-1.5 rounded-full hover:bg-gray-100">
                          <Icon icon="tabler:download" className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        {renderResourceIcon(resource.type)}
                        <span className="text-xs text-gray-500 capitalize">{resource.type}</span>
                      </div>
                      <h3 className="font-medium mb-1 line-clamp-1">{resource.title}</h3>
                      <p className="text-sm text-gray-500 mb-2">{resource.author}</p>
                      <div className="flex items-center text-xs text-gray-400">
                        <Icon icon="tabler:clock" className="w-3 h-3 mr-1" />
                        <span>Added {format(new Date(resource.addedDate), 'MMM dd, yyyy')}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Resource Tabs */}
          {!selectedCategory && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
                <h2 className="text-xl font-semibold">Resources</h2>
                <div className="flex border border-gray100 rounded-lg overflow-hidden">
                  <button 
                    className={`px-4 py-2 text-sm ${activeTab === 'recent' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                    onClick={() => setActiveTab('recent')}
                  >
                    Recent
                  </button>
                  <button 
                    className={`px-4 py-2 text-sm ${activeTab === 'bookmarked' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                    onClick={() => setActiveTab('bookmarked')}
                  >
                    Bookmarked
                  </button>
                  <button 
                    className={`px-4 py-2 text-sm ${activeTab === 'all' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                    onClick={() => setActiveTab('all')}
                  >
                    All Resources
                  </button>
                </div>
              </div>
              
              {activeTab === 'recent' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {recentResources.map((resource) => (
                    <div key={resource.id} className="bg-gray-50 rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-200">
                      <div className="aspect-video bg-gray-200 relative">
                        <img 
                          src={resource.thumbnail} 
                          alt={resource.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2 flex gap-2">
                          <button className="bg-white p-1.5 rounded-full hover:bg-gray-100">
                            <Icon icon="tabler:bookmark" className="w-4 h-4 text-gray-600" />
                          </button>
                          <button className="bg-white p-1.5 rounded-full hover:bg-gray-100">
                            <Icon icon="tabler:download" className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          {renderResourceIcon(resource.type)}
                          <span className="text-xs text-gray-500 capitalize">{resource.type}</span>
                        </div>
                        <h3 className="font-medium mb-1 line-clamp-1">{resource.title}</h3>
                        <p className="text-sm text-gray-500 mb-2">{resource.author}</p>
                        <div className="flex items-center text-xs text-gray-400">
                          <Icon icon="tabler:clock" className="w-3 h-3 mr-1" />
                          <span>Added {format(new Date(resource.addedDate), 'MMM dd, yyyy')}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {activeTab === 'bookmarked' && (
                <div className="text-center py-8">
                  <Icon icon="tabler:bookmark" className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No bookmarked resources yet</h3>
                  <p className="text-gray-500 mb-4">Save your favorite resources for quick access</p>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                    Browse Resources
                  </button>
                </div>
              )}
              
              {activeTab === 'all' && (
                <div className="text-center py-8">
                  <Icon icon="tabler:folder" className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">All Resources</h3>
                  <p className="text-gray-500 mb-4">We&apos;re loading all resources for you...</p>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                    Browse Categories
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resources;