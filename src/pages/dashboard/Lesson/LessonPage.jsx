import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';

const LessonContentPage = () => {
  const { lessonId } = useParams();
  const [activeModule, setActiveModule] = useState(null);
  const [completedModules, setCompletedModules] = useState([]);
  
  const lesson = {
    id: lessonId || '1',
    title: 'Introduction to Web Development',
    description: 'Learn the fundamentals of HTML, CSS, and JavaScript to build modern websites.',
    instructor: 'Dr. Jane Smith',
    duration: '45 minutes',
    modules: [
      { id: 1, title: 'HTML Basics', description: 'Learn the fundamental building blocks of web pages', duration: '12 minutes' },
      { id: 2, title: 'CSS Styling', description: 'Style your HTML with Cascading Style Sheets', duration: '15 minutes' },
      { id: 3, title: 'JavaScript Foundations', description: 'Add interactivity with JavaScript', duration: '18 minutes' },
      { id: 4, title: 'Responsive Design', description: 'Make your websites work on all screen sizes', duration: '10 minutes' }
    ]
  };

  const handleModuleClick = (moduleId) => {
    setActiveModule(moduleId);
  };

  const handleMarkComplete = (moduleId) => {
    setCompletedModules(prev => prev.includes(moduleId) ? prev.filter(id => id !== moduleId) : [...prev, moduleId]);
  };

  return (
    <div className="flex min-h-screen bg-background">
      <div className="flex-1 p-4 md:p-8 pt-16 md:pt-16 ml-0 md:ml-60">
        <h1 className="text-3xl font-bold">{lesson.title}</h1>
        <p className="text-muted-foreground mt-2">{lesson.description}</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2">
            {activeModule ? (
              <div className="p-4 border rounded-lg bg-muted">
                <Icon icon="mdi:video-outline" className="text-4xl" />
                <h3 className="text-lg font-semibold mt-4">
                  {lesson.modules.find(m => m.id === activeModule)?.title}
                </h3>
                <p className="text-muted-foreground">
                  {lesson.modules.find(m => m.id === activeModule)?.description}
                </p>
                <button 
                  className="mt-4 px-4 py-2 border rounded"
                  onClick={() => handleMarkComplete(activeModule)}
                >
                  {completedModules.includes(activeModule) ? 'Completed' : 'Mark as Complete'}
                </button>
              </div>
            ) : (
              <p>Select a module to begin.</p>
            )}
          </div>
          <div className="lg:col-span-1">
            {lesson.modules.map(module => (
              <div 
                key={module.id} 
                className={`p-4 border rounded-lg cursor-pointer ${activeModule === module.id ? 'bg-gray-200' : ''}`} 
                onClick={() => handleModuleClick(module.id)}
              >
                <div className="flex items-center justify-between">
                  <h3>{module.title}</h3>
                  <Icon icon={completedModules.includes(module.id) ? "mdi:check-circle" : "mdi:video-outline"} className="text-lg" />
                </div>
                <p className="text-sm text-muted-foreground">{module.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonContentPage;