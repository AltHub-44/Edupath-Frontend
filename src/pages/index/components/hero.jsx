import heroImage from "@/assets/hero.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center mt-10 md:mt-20 px-4 md:px-6 lg:px-6">
      <div className="lg:w-6/12 ">
        <h1 className="font-epilogue text-4xl md:text-5xl lg:text-6xl font-medium lg:pr-12 leading-12 md:leading-16">
          Tailored learning path to boost{" "}
          <strong className="text-blue100">academic success</strong>
        </h1>
        <h3 className="text-xl md:text-2xl font-lighter text-gray200 lg:w-11/12 mt-5">
          Your personalized guide to better learning, smarter decisions, and
          brighter careers
        </h3>
        <div className="lg:w-6/12 flex justify-center lg:justify-start items-center gap-2 md:gap-5 lg:gap-3 mt-10">
          <Link
            to="/signup"
            className="bg-blue100 hover:bg-white hover:border hover:border-blue100 text-white hover:text-blue100 py-2 px-4 rounded-md"
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
        <img src={heroImage} alt="Hero" className="w-full" />
      </div>
    </div>
  );
};

export default Hero;
