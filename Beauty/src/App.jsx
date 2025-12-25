import { Routes, Route } from "react-router-dom";

import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import BeforeAfter from "./pages/BeforeAfter";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />

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
