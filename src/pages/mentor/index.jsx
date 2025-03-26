import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Header from "../index/components/header";
import Footer from "../index/components/footer";

const MentorsLandingPage = () => {
  return (
    <div className="font-sans bg-white">
      <Header />
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Become a <span className="text-blue-500">mentor</span> and shape
                the future
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Share your expertise, guide students on their academic journey,
                and make a meaningful impact on the next generation.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/mentor-dashboard"
                  className="bg-blue-600 text-white text-center px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
                >
                  Join as a mentor
                </Link>
                <Link
                  to="/mentor-dashboard"
                  className="border border-gray-300 text-gray-700 text-center px-6 py-3 rounded-md hover:bg-gray-50 transition-colors font-medium"
                >
                  Login to dashboard
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Mentor teaching students"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">
              Why Become a Mentor?
            </h2>
            <p className="text-lg text-gray-600">
              Make a difference while growing professionally
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <Icon icon="tabler:world" className="text-blue-600 w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Impact</h3>
              <p className="text-gray-600">
                Connect with students across Nigeria and beyond. Share your
                knowledge and experiences with those who need it most.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <Icon icon="tabler:clock" className="text-green-600 w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Flexible Schedule</h3>
              <p className="text-gray-600">
                Set your own hours and mentor when it&apos;s convenient for you. Our
                platform makes it easy to manage your availability.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <Icon
                  icon="tabler:wallet"
                  className="text-purple-600 w-7 h-7"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Earn While Teaching</h3>
              <p className="text-gray-600">
                Receive competitive compensation for your expertise and time.
                The more students you help, the more you can earn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Getting started as a mentor is simple
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="bg-blue-600 text-white text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center mb-4 mx-auto">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Sign Up</h3>
                <p className="text-gray-600">
                  Create your mentor profile with your qualifications,
                  expertise, and experience.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-1/2 h-0.5 bg-blue-200 transform -translate-y-1/2"></div>
            </div>

            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="bg-blue-600 text-white text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center mb-4 mx-auto">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Get Verified</h3>
                <p className="text-gray-600">
                  Our team will review your credentials and approve your mentor
                  status.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-1/2 h-0.5 bg-blue-200 transform -translate-y-1/2"></div>
            </div>

            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="bg-blue-600 text-white text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center mb-4 mx-auto">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Connect With Students
                </h3>
                <p className="text-gray-600">
                  Browse student profiles, accept mentoring requests, and
                  schedule sessions.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-1/2 h-0.5 bg-blue-200 transform -translate-y-1/2"></div>
            </div>

            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="bg-blue-600 text-white text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center mb-4 mx-auto">
                  4
                </div>
                <h3 className="text-xl font-bold mb-3">Start Mentoring</h3>
                <p className="text-gray-600">
                  Begin your mentoring journey, track progress, and get paid for
                  your valuable time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">
              Mentor Testimonials
            </h2>
            <p className="text-lg text-gray-600">
              Hear from our community of mentors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Dr. Adeola Johnson</h4>
                  <p className="text-sm text-gray-600">
                    Computer Science Professor
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &quot;Being a mentor on EduPath has been incredibly rewarding. I&apos;ve
                connected with students all over Nigeria who are passionate
                about technology and programming.&quot;
              </p>
              <div className="flex text-yellow-400">
                <Icon icon="tabler:star-filled" className="w-5 h-5" />
                <Icon icon="tabler:star-filled" className="w-5 h-5" />
                <Icon icon="tabler:star-filled" className="w-5 h-5" />
                <Icon icon="tabler:star-filled" className="w-5 h-5" />
                <Icon icon="tabler:star-filled" className="w-5 h-5" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Mrs. Folake Adeleke</h4>
                  <p className="text-sm text-gray-600">Mathematics Teacher</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &quot;I love how EduPath allows me to reach students beyond my
                classroom. The platform is easy to use, and the scheduling
                system works perfectly with my busy life.&quot;
              </p>
              <div className="flex text-yellow-400">
                <Icon icon="tabler:star-filled" className="w-5 h-5" />
                <Icon icon="tabler:star-filled" className="w-5 h-5" />
                <Icon icon="tabler:star-filled" className="w-5 h-5" />
                <Icon icon="tabler:star-filled" className="w-5 h-5" />
                <Icon icon="tabler:star-filled" className="w-5 h-5" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Mr. Emmanuel Okafor</h4>
                  <p className="text-sm text-gray-600">Career Counselor</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &quot;The EduPath platform has given me the opportunity to guide
                students in their career choices. It&apos;s fulfilling to see them
                succeed and know I played a part in their journey.&quot;
              </p>
              <div className="flex text-yellow-400">
                <Icon icon="tabler:star-filled" className="w-5 h-5" />
                <Icon icon="tabler:star-filled" className="w-5 h-5" />
                <Icon icon="tabler:star-filled" className="w-5 h-5" />
                <Icon icon="tabler:star-filled" className="w-5 h-5" />
                <Icon icon="tabler:star" className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join our growing community of mentors and help shape the future of
            education in Nigeria.
          </p>
          <Link
            to="/mentor-dashboard"
            className="bg-white text-blue-600 px-8 py-4 rounded-md hover:bg-blue-50 transition-colors font-medium text-lg inline-block"
          >
            Apply to become a mentor
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MentorsLandingPage;
