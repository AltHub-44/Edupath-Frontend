
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AssignmentDetail = () => {
  const { assignmentId } = useParams();
  const navigate = useNavigate();
  const [grade, setGrade] = useState('');
  const [feedback, setFeedback] = useState('');
  
  // Mock data for the assignment
  const assignment = {
    id: assignmentId,
    title: 'Build a Portfolio Website',
    description: 'Create a responsive portfolio website showcasing your skills, projects, and contact information. The site should be built using HTML, CSS, and JavaScript, and must include at least 3 project showcases.',
    student: {
      id: 1,
      name: 'Jamie Chen',
      avatar: 'JC',
      email: 'jamie@example.com'
    },
    course: 'Web Development Fundamentals',
    dueDate: '2023-08-15',
    submittedDate: '2023-08-14',
    status: 'submitted',
    attachments: [
      { id: 1, name: 'portfolio-website.zip', size: '2.4 MB', type: 'application/zip' },
      { id: 2, name: 'design-mockup.pdf', size: '1.1 MB', type: 'application/pdf' }
    ],
    submissionText: `
      I've completed my portfolio website as requested. The site includes:
      
      - Responsive design that works on mobile, tablet, and desktop
      - Hero section with my introduction
      - Skills section with progress bars
      - Project showcase with 3 of my best projects
      - Contact form with validation
      - Social media links
      
      I've also included a PDF of my initial design mockup for comparison. The site is hosted at https://jamiechen-portfolio.example.com for live viewing.
      
      Looking forward to your feedback!
    `,
    previousFeedback: []
  };

  const handleBack = () => {
    navigate('/mentor-dashboard/assignments');
  };

  const handleGradeSubmit = (e) => {
    e.preventDefault();
    
    if (!grade) {
      toast.error('Please enter a grade');
      return;
    }
    
    // In a real app, this would send the grade to an API
    toast.success('Assignment graded successfully');
    
    // Reset form
    setGrade('');
    setFeedback('');
  };

  const handleDownload = (attachmentId) => {
    toast.info('Downloading attachment...');
    // Logic to download the attachment
  };

  const handleMessageStudent = () => {
    toast.info('Opening message window...');
    // Logic to open message window with the student
  };

  return (
    <div>
      <div className="mb-6 flex items-center">
        <button 
          onClick={handleBack}
          className="mr-3 p-2 rounded-lg hover:bg-gray-100"
        >
          <Icon icon="tabler:arrow-left" className="h-5 w-5" />
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Assignment Submission</h1>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{assignment.title}</h2>
              <p className="text-gray-600">{assignment.course}</p>
            </div>
            <div className="flex items-center">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                assignment.status === 'submitted' ? 'bg-blue-100 text-blue-800' :
                assignment.status === 'graded' ? 'bg-green-100 text-green-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
              </span>
            </div>
          </div>
        </div>
        
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left column: Assignment details */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Assignment Description</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">{assignment.description}</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Student Submission</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="whitespace-pre-line text-gray-700">{assignment.submissionText}</div>
                
                {assignment.attachments.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-medium text-gray-800 mb-2">Attachments</h4>
                    <div className="space-y-2">
                      {assignment.attachments.map(attachment => (
                        <div 
                          key={attachment.id}
                          className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200"
                        >
                          <div className="flex items-center">
                            <Icon 
                              icon={
                                attachment.type === 'application/pdf' ? 'tabler:file-type-pdf' :
                                attachment.type === 'application/zip' ? 'tabler:file-zip' :
                                'tabler:file'
                              } 
                              className="h-5 w-5 text-gray-500 mr-2" 
                            />
                            <div>
                              <p className="font-medium text-gray-800">{attachment.name}</p>
                              <p className="text-xs text-gray-500">{attachment.size}</p>
                            </div>
                          </div>
                          <button 
                            onClick={() => handleDownload(attachment.id)}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            <Icon icon="tabler:download" className="h-5 w-5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {assignment.previousFeedback.length > 0 && (
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Previous Feedback</h3>
                <div className="space-y-3">
                  {assignment.previousFeedback.map((feedback, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{feedback.date}</span>
                        <span className="text-green-700 font-semibold">Grade: {feedback.grade}</span>
                      </div>
                      <p className="text-gray-700">{feedback.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Right column: Student info and grading */}
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-800 mb-3">Student Information</h3>
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-medium">
                  {assignment.student.avatar}
                </div>
                <div className="ml-3">
                  <h4 className="font-medium text-gray-800">{assignment.student.name}</h4>
                  <p className="text-sm text-gray-600">{assignment.student.email}</p>
                </div>
              </div>
              <button 
                onClick={handleMessageStudent}
                className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Message Student
              </button>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-800 mb-3">Assignment Timeline</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Assigned</span>
                  <span className="font-medium">Aug 1, 2023</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Due Date</span>
                  <span className="font-medium">
                    {new Date(assignment.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Submitted</span>
                  <span className="font-medium text-green-700">
                    {new Date(assignment.submittedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-800 mb-3">Grade Submission</h3>
              <form onSubmit={handleGradeSubmit}>
                <div className="mb-4">
                  <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-1">
                    Grade
                  </label>
                  <select
                    id="grade"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select grade</option>
                    <option value="A+">A+</option>
                    <option value="A">A</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B">B</option>
                    <option value="B-">B-</option>
                    <option value="C+">C+</option>
                    <option value="C">C</option>
                    <option value="C-">C-</option>
                    <option value="D">D</option>
                    <option value="F">F</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-1">
                    Feedback
                  </label>
                  <textarea
                    id="feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    rows={5}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Provide feedback on the submission..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Submit Grade
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetail;
