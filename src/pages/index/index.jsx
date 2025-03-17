import Header from "./components/header.jsx";
import Hero from "./components/hero.jsx";
import Features from "./components/features.jsx";
import Testimonials from "./components/testimonials.jsx";
import Faqs from "./components/faqs.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/footer.jsx";
import ScrollToTop from "./components/scrollToTop.jsx";

function LandingPage() {



  return (
    <div id="home">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Faqs />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default LandingPage;