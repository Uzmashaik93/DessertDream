import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./components/Menu";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
