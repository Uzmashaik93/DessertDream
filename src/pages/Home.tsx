import Description from "../components/Description";
import Detail from "../components/Detail";
import Hero from "../components/Hero";
import Reviews from "../components/Reviews";
import WhatsApp from "../components/WhatsApp";
import ScrollToTop from "../components/ScrollToTop";

function Home() {
  return (
    <div>
      <WhatsApp />
      <Hero
        height="h-screen"
        actions={
          <div className="flex justify-center mt-6 space-x-4 opacity-0 animate-fade-in-up">
            <button className="px-6 py-2 bg-orange-300 text-white rounded-full shadow-lg hover:bg-pink-300 transition-transform transform hover:scale-105">
              Explore Menu
            </button>
            <button className="px-6 py-2 bg-white text-orange-300 border border-orange-300 rounded-full shadow-lg hover:bg-pink-100 transition-transform transform hover:scale-105">
              Contact Us
            </button>
          </div>
        }
        padding="py-40"
        heading={
          <>
            <h1 className="text-4xl font-bold mb-4 text-orange-300 text-center opacity-0 animate-slide-in-left">
              Welcome to Dessert Dream By Namita
            </h1>
            <p className="text-lg mb-8 opacity-0 animate-slide-in-right">
              Freshly baked treats made with the finest ingredients.
            </p>
          </>
        }
      />
      <Detail />
      <Description />
      <Reviews />
      <ScrollToTop />
    </div>
  );
}

export default Home;
