import { Link } from "react-router-dom";

const Testimonials = () => (
  <div className="mt-28 px-4 lg:px-16" id="why">
    <div className="flex flex-col md:flex-row gap-10 items-center">
      <div className="md:w-5/12">
        <img src="https://media.gettyimages.com/id/1770690435/photo/schoolgirl-with-raised-hand-celebrating-finishing-a-task-on-computer.jpg?s=612x612&w=0&k=20&c=YJKGkyTRgiDMiEuU5Fu49--gJVEKjPUU1tjWfLTQeS0=" alt="Testimonial" className="w-full h-auto" />
      </div>
      <div className="md:w-7/12">
        <h2 className="font-epilogue text-blue100 text-3xl lg:text-4xl font-semibold">
          Why EduPath?
        </h2>
        <p className="lg:text-lg leading-10 mt-7 font-light lg:w-10/12">
          We empower students to make informed decisions about their future. Our 
          AI-driven tutor, real-time feedback, and supportive community ensure 
          that students receive the motivation and support they need to succeed 
          both academically and professionally.
        </p>
      <Link 
        to="/signup" 
        className="bg-blue100 inline-block mt-7 text-white hover:bg-white hover:border hover:border-blue100 hover:text-blue100 rounded-md py-2 px-4"
      >
        Start your journey
      </Link>
      </div>
    </div>
  </div>
);

export default Testimonials;