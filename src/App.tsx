import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Detail from "./components/Detail";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Detail />
      <Menu />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
