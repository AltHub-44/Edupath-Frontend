import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center px-4 pt-7 md:px-6 lg:p-20 lg:px-28 bg-[#eff4ff] rounded-lg">
      <div className="lg:w-6/12 ">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-10 md:leading-12">
          Tailored learning path to boost{" "}
          <span className="text-blue-500">academic success</span>
        </h1>
        <h3 className="text-md md:text-lg font-lighter text-gray200 lg:w-11/12 mt-5">
          Your personalized guide to better learning, smarter decisions, and
          brighter careers
        </h3>
        <div className="lg:w-6/12 flex justify-center lg:justify-start items-center gap-2 md:gap-5 lg:gap-3 mt-10">
          <Link
            to="/signup"
            className="bg-blue100 hover:bg-white hover:border hover:border-blue100 text-white hover:text-blue100 py-3 px-4 rounded-md"
          >
            Start your journey
          </Link>
          {/* <Link
            to="/"
            className="py-2 px-4 shadow border border-gray100 hover:bg-blue100 hover:text-white rounded-md"
          >
            Discover more
          </Link> */}
        </div>
      </div>

      <div className="lg:w-6/12 mt-16 lg:mt-0">
        <img
          src="https://media.gettyimages.com/id/1403897263/photo/university-student-working-on-a-school-project-in-the-library.jpg?s=612x612&w=0&k=20&c=yjuNGT-WnQcpzJPXx45CEVLuKHKnaEEIOk7DhToHPGo="
          alt="Hero"
          className="w-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
