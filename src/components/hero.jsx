import '../styles/hero.css';
import heroImage from '../assets/hero.png'; 

const Hero = () => (
  <div className="hero">
    <div className="hero__content">
      <h1>Tailored learning path to boost <b>academic success</b></h1>
      <h3>Your personalized guide to better learning, smarter decisions, and brighter careers</h3>
      <div className="btn">
        <button>Start your journey</button>
      <button>Discover more</button>
      </div>
      
    </div>

    <div className="hero__image">
      <img src={heroImage} alt="Hero" />
    </div>
  </div>
);

export default Hero;
