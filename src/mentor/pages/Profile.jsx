
const MentorProfile = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Mentor Profile</h1>
      
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 bg-gray-50 p-8">
            <div className="text-center">
              <div className="h-32 w-32 rounded-full overflow-hidden mx-auto">
                <img 
                  src="/lovable-uploads/63aab59d-bddb-43b1-963c-ab6f53489f3e.png" 
                  alt="Mentor" 
                  className="h-full w-full object-cover"
                />
              </div>
              
              <h2 className="mt-4 text-xl font-bold">Dr. Michael Chen</h2>
              <p className="text-gray-600">Senior Software Engineering Mentor</p>
              
              <div className="mt-6 flex justify-center space-x-2">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
                  Edit Profile
                </button>
                <button className="border border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-gray-50">
                  Preview
                </button>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-semibold text-gray-700 mb-2">Contact Information</h3>
              <div className="space-y-2 text-sm">
                <p className="flex items-center">
                  <span className="w-24 text-gray-500">Email:</span>
                  <span>michael.chen@example.com</span>
                </p>
                <p className="flex items-center">
                  <span className="w-24 text-gray-500">Phone:</span>
                  <span>(555) 123-4567</span>
                </p>
                <p className="flex items-center">
                  <span className="w-24 text-gray-500">Location:</span>
                  <span>San Francisco, CA</span>
                </p>
                <p className="flex items-center">
                  <span className="w-24 text-gray-500">Timezone:</span>
                  <span>Pacific Time (PT)</span>
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-semibold text-gray-700 mb-2">Specializations</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">AWS</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">System Design</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 p-8">
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">About Me</h3>
              <p className="text-gray-700">
                I'm a senior software engineer with over 10 years of experience building scalable web applications and distributed systems. 
                I've worked at several tech companies including Google and Microsoft, where I led engineering teams and mentored junior developers. 
                My passion is helping students bridge the gap between theoretical knowledge and practical industry experience.
              </p>
              <p className="text-gray-700 mt-3">
                I believe in a hands-on approach to learning, focusing on real-world projects and problem-solving techniques that prepare students 
                for the challenges they'll face in their careers. My mentoring style emphasizes clear communication, constructive feedback, and 
                creating a supportive environment where students feel comfortable asking questions and taking risks.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Experience</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-blue-500 pl-4">
                  <h4 className="font-medium">Senior Software Engineer</h4>
                  <p className="text-gray-500 text-sm">Google • 2018 - Present</p>
                  <p className="text-gray-700 mt-1">Led development of cloud infrastructure services and mentored junior engineers.</p>
                </div>
                <div className="border-l-2 border-blue-500 pl-4">
                  <h4 className="font-medium">Software Engineer</h4>
                  <p className="text-gray-500 text-sm">Microsoft • 2015 - 2018</p>
                  <p className="text-gray-700 mt-1">Worked on Azure cloud services and developer tools.</p>
                </div>
                <div className="border-l-2 border-blue-500 pl-4">
                  <h4 className="font-medium">Full Stack Developer</h4>
                  <p className="text-gray-500 text-sm">Startup XYZ • 2013 - 2015</p>
                  <p className="text-gray-700 mt-1">Built web applications using React and Node.js.</p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Ph.D in Computer Science</h4>
                  <p className="text-gray-500 text-sm">Stanford University • 2008 - 2013</p>
                </div>
                <div>
                  <h4 className="font-medium">M.S. in Computer Science</h4>
                  <p className="text-gray-500 text-sm">University of California, Berkeley • 2006 - 2008</p>
                </div>
                <div>
                  <h4 className="font-medium">B.S. in Computer Engineering</h4>
                  <p className="text-gray-500 text-sm">Massachusetts Institute of Technology • 2002 - 2006</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Mentoring Stats</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-md text-center">
                  <p className="text-3xl font-bold text-blue-600">47</p>
                  <p className="text-gray-500 text-sm">Students Mentored</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-md text-center">
                  <p className="text-3xl font-bold text-blue-600">4.9/5</p>
                  <p className="text-gray-500 text-sm">Average Rating</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-md text-center">
                  <p className="text-3xl font-bold text-blue-600">92%</p>
                  <p className="text-gray-500 text-sm">Completion Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;
