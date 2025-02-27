
import '../styles/App.css';
import { useRef } from "react";
import Header from "./header.jsx";
import Hero from "./hero.jsx";
import Features from "./features.jsx";
import Testimonials from "./testimonials.jsx";
import Faqs from "./faqs.jsx";
import Contact from "./contact.jsx";
import Footer from "./footer.jsx";
import ScrollToTop from "./scrollToTop";


function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    const refs = { home: homeRef, about: aboutRef, contact: contactRef };
    refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
   
    <div ref={homeRef}>
      <Header scrollToSection={scrollToSection} />
      <Hero />
      <Features aboutRef={aboutRef} />
      <Testimonials/>
      <Faqs/>
      <Contact/>
      <Footer contactRef={contactRef} />
      <ScrollToTop /> 
    </div>
    
  );
}

export default App;



