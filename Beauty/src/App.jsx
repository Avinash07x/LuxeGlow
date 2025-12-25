import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import BeforeAfter from "./pages/BeforeAfter";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />

      <CustomCursor />
      <Navbar />

      {/* Main Content */}
      <main className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transformations" element={<BeforeAfter />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;




// import CustomCursor from './components/CustomCursor';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Services from './components/Services';
// import About from './components/About';
// import Gallery from './components/Gallery';
// import Testimonials from './components/Testimonials';
// import Booking from './components/Booking';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <>
//       <CustomCursor />
//       <Navbar />
//       <main className="overflow-x-hidden">
//         <Hero />
//         <Services />
//         <About />
//         <Gallery />
//         <Testimonials />
//         <Booking />
//       </main>
//       <Footer />
//     </>
//   );
// }

// export default App;
