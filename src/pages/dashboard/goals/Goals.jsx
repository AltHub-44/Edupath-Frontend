
import { useState } from 'react';
import { format, addMonths } from 'date-fns';
import { Icon } from '@iconify/react';
import { toast } from 'react-toastify';

const GoalsSettingPage = () => {
  const today = new Date();
  const [selectedTab, setSelectedTab] = useState('current');
  const [showModal, setShowModal] = useState(false);
  const [newGoal, setNewGoal] = useState({
    title: '',
    category: 'Technical Skill',
    targetDate: format(addMonths(today, 3), 'yyyy-MM-dd')
  });
  
  const currentGoals = [
    {
      id: 1,
      title: "Master React.js Development",
      category: "Technical Skill",
      targetDate: "2023-11-15",
      progress: 65,
      milestones: [
        { id: 1, title: "Complete Basic Tutorial", completed: true },
        { id: 2, title: "Build a Simple App", completed: true },
        { id: 3, title: "Learn React Hooks", completed: true },
        { id: 4, title: "Master State Management", completed: false },
        { id: 5, title: "Advanced Routing Concepts", completed: false }
      ]
    },
    {
      id: 2,
      title: "Complete Data Science Certificate",
      category: "Certification",
      targetDate: "2023-12-20",
      progress: 30,
      milestones: [
        { id: 1, title: "Statistical Analysis", completed: true },
        { id: 2, title: "Data Visualization", completed: true },
        { id: 3, title: "Machine Learning Basics", completed: false },
        { id: 4, title: "Final Project", completed: false }
      ]
    },
    {
      id: 3,
      title: "Improve Technical Writing Skills",
      category: "Soft Skill",
      targetDate: "2023-10-10",
      progress: 45,
      milestones: [
        { id: 1, title: "Take Writing Course", completed: true },
        { id: 2, title: "Write 5 Technical Articles", completed: false },
        { id: 3, title: "Peer Review Process", completed: false }
      ]
    }
  ];
  
  const achievedGoals = [
    {
      id: 4,
      title: "Learn Python Programming",
      category: "Technical Skill",
      completedDate: "2023-06-15"
    },
    {
      id: 5,
      title: "HTML/CSS Fundamentals",
      category: "Technical Skill",
      completedDate: "2023-04-10"
    }
  ];
  
  const suggestedGoals = [
    {
      id: 1,
      title: "Learn Cloud Computing Basics",
      category: "Technical Skill",
      difficulty: "Medium",
      estimatedTime: "3 months"
    },
    {
      id: 2,
      title: "Master SQL and Database Design",
      category: "Technical Skill",
      difficulty: "Hard",
      estimatedTime: "4 months"
    },
    {
      id: 3,
      title: "Mobile App Development",
      category: "Technical Skill",
      difficulty: "Medium",
      estimatedTime: "6 months"
    }
  ];
  
  const handleAddGoal = () => {
    // In a real app, this would save to a database
    console.log('Adding new goal:', newGoal);
    setShowModal(false);
    // Reset form
    setNewGoal({
      title: '',
      category: 'Technical Skill',
      targetDate: format(addMonths(today, 3), 'yyyy-MM-dd')
    });
    // Show success message
    toast.success('Goal added successfully!');
  };
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-8 gap-4">
            <div>
              <h1 className="text-2xl font-bold">Goals Setting</h1>
              <p className="text-gray-500">{format(today, 'MMMM dd, yyyy')}</p>
            </div>
      
          </div>
          
          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-2">
                <Icon icon="tabler:target" className="w-4 h-4 text-blue-500" />
                Current Goals
              </div>
              <div className="text-2xl font-bold">{currentGoals.length}</div>
              <p className="text-sm text-gray-500">In progress</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-2">
                <Icon icon="tabler:award" className="w-4 h-4 text-green-500" />
                Achieved Goals
              </div>
              <div className="text-2xl font-bold">{achievedGoals.length}</div>
              <p className="text-sm text-gray-500">Completed successfully</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-2">
                <Icon icon="tabler:check-square" className="w-4 h-4 text-purple-500" />
                Milestones Completed
              </div>
              <div className="text-2xl font-bold">7</div>
              <p className="text-sm text-gray-500">Across all goals</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-2">
                <Icon icon="tabler:chart-bar" className="w-4 h-4 text-amber-500" />
                Average Progress
              </div>
              <div className="text-2xl font-bold">47%</div>
              <p className="text-sm text-gray-500">On current goals</p>
            </div>
          </div>
          
          {/* Main Content Tabs */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="border-b">
              <div className="flex">
                <button 
                  className={`px-4 py-3 text-sm font-medium ${selectedTab === 'current' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setSelectedTab('current')}
                >
                  Current Goals
                </button>
                <button 
                  className={`px-4 py-3 text-sm font-medium ${selectedTab === 'achieved' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setSelectedTab('achieved')}
                >
                  Achieved
                </button>
                <button 
                  className={`px-4 py-3 text-sm font-medium ${selectedTab === 'suggested' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setSelectedTab('suggested')}
                >
                  Suggested
                </button>
              </div>
            </div>
            
            {/* Current Goals Tab */}
            {selectedTab === 'current' && (
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Your Current Goals</h2>
                  <button 
                    className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                    onClick={() => setShowModal(true)}
                  >
                    <Icon icon="tabler:plus-circle" className="w-4 h-4" />
                    New Goal
                  </button>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {currentGoals.map((goal) => (
                    <div key={goal.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                      <div className="p-4">
                        <div className="flex justify-between">
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            {goal.category}
                          </span>
                          <div className="text-sm text-gray-500 flex items-center">
                            <Icon icon="tabler:clock" className="w-4 h-4 mr-1" />
                            {format(new Date(goal.targetDate), 'MMM dd, yyyy')}
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold mt-2">{goal.title}</h3>
                        <p className="text-sm text-gray-500">
                          {goal.milestones.filter(m => m.completed).length} of {goal.milestones.length} milestones completed
                        </p>
                        
                        <div className="mt-4">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Progress</span>
                            <span className="text-sm font-medium">{goal.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${goal.progress}%` }}></div>
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <h4 className="text-sm font-medium mb-2">Milestones</h4>
                          <ul className="space-y-1">
                            {goal.milestones.map((milestone) => (
                              <li key={milestone.id} className="flex items-start">
                                <div className={`rounded-full p-0.5 mr-2 mt-0.5 ${
                                  milestone.completed ? "bg-green-500" : "border border-gray-300"
                                }`}>
                                  {milestone.completed && <Icon icon="tabler:check" className="w-3 h-3 text-white" />}
                                </div>
                                <span className={
                                  milestone.completed ? "text-sm text-gray-500 line-through" : "text-sm text-gray-700"
                                }>
                                  {milestone.title}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="border-t p-4">
                        <button className="w-full text-sm text-gray-600 hover:text-gray-800 flex justify-between items-center">
                          <span>View Details</span>
                          <Icon icon="tabler:chevron-right" className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Achieved Goals Tab */}
            {selectedTab === 'achieved' && (
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Your Achievements</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {achievedGoals.map((goal) => (
                    <div key={goal.id} className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="p-4">
                        <div className="flex justify-between items-center">
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            {goal.category}
                          </span>
                          <Icon icon="tabler:award" className="w-5 h-5 text-yellow-500" />
                        </div>
                        <h3 className="text-lg font-semibold mt-2">{goal.title}</h3>
                        <p className="text-sm text-gray-500">
                          Completed on {format(new Date(goal.completedDate), 'MMMM dd, yyyy')}
                        </p>
                        
                        <div className="flex justify-center mt-4">
                          <div className="bg-green-50 rounded-full p-4">
                            <Icon icon="tabler:check-square" className="w-12 h-12 text-green-500" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-t p-4">
                        <button className="w-full text-sm text-gray-600 hover:text-gray-800 flex justify-between items-center">
                          <span>View Certificate</span>
                          <Icon icon="tabler:chevron-right" className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Suggested Goals Tab */}
            {selectedTab === 'suggested' && (
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Recommended Goals for You</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {suggestedGoals.map((goal) => (
                    <div key={goal.id} className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="p-4">
                        <div className="flex justify-between">
                          <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                            {goal.category}
                          </span>
                          <div className="text-sm text-gray-500">
                            {goal.difficulty} Difficulty
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold mt-2">{goal.title}</h3>
                        <p className="text-sm text-gray-500">
                          Estimated time: {goal.estimatedTime}
                        </p>
                        
                        <p className="text-sm text-gray-600 mt-4">
                          This goal will help you expand your skills and open new career opportunities in the tech industry.
                        </p>
                      </div>
                      
                      <div className="border-t p-4 flex gap-2">
                        <button className="flex-1 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                          Learn More
                        </button>
                        <button className="flex-1 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors">
                          Add Goal
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Add Goal Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4">
            <div className="flex justify-between items-center border-b p-4">
              <h3 className="text-lg font-semibold">Add New Goal</h3>
              <button 
                className="text-gray-400 hover:text-gray-600"
                onClick={() => setShowModal(false)}
              >
                <Icon icon="tabler:x" className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Goal Title
                </label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your goal title"
                  value={newGoal.title}
                  onChange={(e) => setNewGoal({...newGoal, title: e.target.value})}
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newGoal.category}
                  onChange={(e) => setNewGoal({...newGoal, category: e.target.value})}
                >
                  <option value="Technical Skill">Technical Skill</option>
                  <option value="Soft Skill">Soft Skill</option>
                  <option value="Certification">Certification</option>
                  <option value="Project">Project</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Target Date
                </label>
                <input 
                  type="date" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newGoal.targetDate}
                  onChange={(e) => setNewGoal({...newGoal, targetDate: e.target.value})}
                />
              </div>
            </div>
            
            <div className="flex justify-end gap-3 border-t p-4">
              <button 
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button 
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                onClick={handleAddGoal}
              >
                Add Goal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoalsSettingPage;
