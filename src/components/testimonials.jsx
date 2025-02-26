import '../styles/testimonials.css';
import testyImage from '../assets/testy.png'; 


const Testimonials = () => (
  <div className="testy">
    <div className="content">

          <div className="image">
            <img src={testyImage} alt="image" />
      </div>
      <div className="testimony">
        <h1>Why Edupath?</h1>
        <p>We Empower Student To Make Informed Decisions About Their Future. Our Ai Driven Tutor, Real-Time Feedback And Supportive Community 
            Ensure Student Recieve The Motivation And Support They Need To Succeed Both Academically And Professionally.
        </p>
      </div>
    </div>
   

   <div className="btnn">
   <button>Start your journey</button>
   </div>

  </div>
);

export default Testimonials;