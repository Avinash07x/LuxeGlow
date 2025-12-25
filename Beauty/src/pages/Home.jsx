import Hero from "../components/Hero";
import Services from "../components/Services";
import Pricing from "./Pricing";
import About from "../components/About";
import Team from "./Team";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import FAQs from "./FAQs";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Pricing />
      <About />
      <Team />
      <Gallery />
      <Testimonials />
      <FAQs />
    </>
  );
};

export default Home;
