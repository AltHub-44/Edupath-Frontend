
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { toast } from 'react-toastify';

const QuizzesPage = () => {
  const navigate = useNavigate();
  const [selectedModule, setSelectedModule] = useState(null);
  
  // Sample modules data
  const modules = [
    { id: '1', title: 'Web Development Fundamentals', quizzes: 2 },
    { id: '2', title: 'JavaScript Essentials', quizzes: 3 },
    { id: '3', title: 'React Framework', quizzes: 2 },
    { id: '4', title: 'Backend Development', quizzes: 1 },
  ];
  
  // Sample quizzes data organized by module
  const moduleQuizzes = {
    '1': [
      { id: '1', title: 'HTML & CSS Basics Quiz', questions: 5 },
      { id: '2', title: 'Web Development Tools Quiz', questions: 3 }
    ],
    '2': [
      { id: '3', title: 'JavaScript Fundamentals', questions: 5 },
      { id: '4', title: 'ES6 Features Quiz', questions: 4 },
      { id: '5', title: 'JavaScript DOM Quiz', questions: 6 }
    ],
    '3': [
      { id: '6', title: 'React Components Quiz', questions: 5 },
      { id: '7', title: 'React Hooks Quiz', questions: 4 }
    ],
    '4': [
      { id: '8', title: 'Node.js Basics Quiz', questions: 5 }
    ]
  };

  const handleModuleClick = (moduleId) => {
    setSelectedModule(selectedModule === moduleId ? null : moduleId);
  };
  
  const handleQuizClick = (quizId) => {
    toast.info('Loading quiz...', { autoClose: 2000 });
    navigate(`/dashboard/quiz/${quizId}`);
  };
  
  return (
    <div className="flex min-h-screen bg-gray-50">      
      <div className="flex-1 p-4 md:p-8 pt-16">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Quizzes</h1>
          <p className="text-gray-500 mt-2">Test your knowledge and track your progress</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <div 
              key={module.id}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all cursor-pointer"
              onClick={() => handleModuleClick(module.id)}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-lg">{module.title}</h3>
                <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                  {module.quizzes} quizzes
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-4">Click to view available quizzes</p>
              
              {selectedModule === module.id && (
                <div className="mt-4 border-t pt-4">
                  <h4 className="font-medium text-sm mb-3">Available Quizzes:</h4>
                  <div className="space-y-2">
                    {moduleQuizzes[module.id].map((quiz) => (
                      <div 
                        key={quiz.id}
                        className="bg-gray-50 rounded p-3 flex justify-between items-center hover:bg-gray-100 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleQuizClick(quiz.id);
                        }}
                      >
                        <div>
                          <p className="font-medium">{quiz.title}</p>
                          <p className="text-xs text-gray-500">{quiz.questions} questions</p>
                        </div>
                        <div className="flex items-center">
                          <Icon icon="tabler:arrow-right" className="text-blue-500" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizzesPage;
