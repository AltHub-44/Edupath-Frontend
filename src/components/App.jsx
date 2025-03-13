import '../styles/App.css';
import { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./header.jsx";
import Hero from "./hero.jsx";
import Features from "./features.jsx";
import Testimonials from "./testimonials.jsx";
import Faqs from "./faqs.jsx";
import Contact from "./contact.jsx";
import Footer from "./footer.jsx";
import ScrollToTop from "./scrollToTop";
import Login from "../auth/login"; 
import SignUp from "../auth/signUp";

function LandingPage() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const sectionMap = {
      home: homeRef,
      about: aboutRef,
      contact: contactRef,
    };

    const section = sectionMap[sectionId]?.current;
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={homeRef}>
      <Header scrollToSection={scrollToSection} />
      <Hero />
      <Features aboutRef={aboutRef} />
      <Testimonials />
      <Faqs />
      <Contact />
      <Footer contactRef={contactRef} />
      <ScrollToTop />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} /> 
    </Routes>
  );
}

export default App;
