import icon from "@/assets/icon.png";
import icon1 from "@/assets/icon1.png";
import icon2 from "@/assets/icon2.png";
import icon3 from "@/assets/icon3.png";

const Features = () => (
  <div className="mt-24" id="about">
    <section className="flex flex-col items-center">
      <h1 className="font-epilogue text-blue100 text-4xl lg:text-4xl font-semibold">
        Our Features
      </h1>
      <h4 className="text-md lg:text-md text-gray200 mt-1 md:mt-0">
        How We Help You Succeed
      </h4>
    </section>

    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 px-5 lg:px-32">
      <div className="flex gap-5 shadow-lg p-7 rounded-lg hover:shadow-md">
        <img src={icon} alt="icon" className="h-10 w-10" />
        <div>
          <h2 className="font-epilogue text-xl font-semibold">Personalized Learning</h2>
          <p className="text-gray300 font-light leading-7 mt-3">
            Tailored learning plans are created based on your strengths, weaknesses, 
            and interests. Engaging and interactive modules ensure your learning 
            journey is both fun and effective, all aligned with the Nigerian curriculum.
          </p>
        </div>
      </div>

      <div className="flex gap-5 shadow-lg p-7 rounded-lg hover:shadow-md">
        <img src={icon1} alt="icon1" className="h-10 w-10" />
        <div>
          <h2 className="font-epilogue text-xl font-semibold">Skill Building</h2>
          <p className="text-gray300 font-light leading-7 mt-3">
            Enhance your soft skills, including critical thinking, problem-solving, 
            and communication. Our modules are designed to develop the 
            essential skills needed for both academic success and career advancement.
          </p>
        </div>
      </div>

      <div className="flex gap-5 shadow-lg p-7 rounded-lg hover:shadow-md">
        <img src={icon2} alt="icon2" className="h-10 w-10" />
        <div>
          <h2 className="font-epilogue text-xl font-semibold">Career Guidance</h2>
          <p className="text-gray300 font-light leading-7 mt-3">
            Connect with experienced mentors for personalized career advice. Our 
            platform provides valuable insights into various career paths, helping 
            you make informed decisions for your academic and professional future.
          </p>
        </div>
      </div>

      <div className="flex gap-5 shadow-lg p-7 rounded-lg hover:shadow-md">
        <img src={icon3} alt="icon3" className="h-10 w-10" />
        <div>
          <h2 className="font-epilogue text-xl font-semibold">Community Building</h2>
          <p className="text-gray300 font-light leading-7 mt-3">
            EduPath fosters a supportive community where students can collaborate, 
            share ideas, and learn together. Peer-to-peer interaction and group 
            study sessions help keep you motivated and on track.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default Features;