import { useState } from 'react';
import { format, addMonths } from 'date-fns';

const Goals = () => {
  const today = new Date();
  const [showModal, setShowModal] = useState(false);
  const [newGoal, setNewGoal] = useState({
    title: '',
    category: 'Technical Skill',
    targetDate: format(addMonths(today, 3), 'yyyy-MM-dd')
  });
  
  // ... keep existing code (currentGoals, achievedGoals, suggestedGoals arrays)
  
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
    alert('Goal added successfully!');
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-eduBlue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20l-3-3m0 0l3-3m-3 3h12.5"></path>
                  <path d="M12 4l3 3m0 0l-3 3m3-3H4.5"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
                Current Goals
              </div>
              <div className="text-2xl font-bold">3</div>
              <p className="text-sm text-gray-500">In progress</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="7"></circle>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                </svg>
                Achieved Goals
              </div>
              <div className="text-2xl font-bold">2</div>
              <p className="text-sm text-gray-500">Completed successfully</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <rect x="7" y="7" width="3" height="9"></rect>
                  <rect x="14" y="7" width="3" height="5"></rect>
                </svg>
                Milestones Completed
              </div>
              <div className="text-2xl font-bold">7</div>
              <p className="text-sm text-gray-500">Across all goals</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10"></line>
                  <line x1="12" y1="20" x2="12" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
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
                <button className="px-4 py-3 text-sm font-medium border-b-2 border-blue-500 text-blue-600">Current Goals</button>
                <button className="px-4 py-3 text-sm font-medium text-gray-500 hover:text-gray-700">Achieved</button>
                <button className="px-4 py-3 text-sm font-medium text-gray-500 hover:text-gray-700">Suggested</button>
              </div>
            </div>
            
            {/* Current Goals Tab */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Your Current Goals</h2>
                <button 
                  className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                  onClick={() => setShowModal(true)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                  New Goal
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {/* ... keep existing code (currentGoals map) */}
              </div>
            </div>
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
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

export default Goals;