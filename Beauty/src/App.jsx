import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </>
  );
}

export default App;
