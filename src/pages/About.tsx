import React from "react";
import Hero from "../components/Hero";

const About: React.FC = () => {
  return (
    <section id="about" className="text-center">
      <div>
        <Hero
          height="h-70"
          padding="py-17"
          heading={
            <>
              <h1 className="text-xl font-bold mb-4 text-orange-300 text-center opacity-0 animate-slide-in-left">
                Dessert Dream By Namita - Freshly baked with the finest
                ingredients.
              </h1>
            </>
          }
        />
      </div>
      <div className="mb-auto">
        <div className="h-auto m-7 md:m-20">
          <h2 className="text-3xl font-bold m-10">About Me</h2>
          <div className="flex flex-col md:flex-row justify-center gap-10">
            <div className="flex-1 md:w-1/2">
              <img
                src="/images/image8.jpeg"
                alt="Dessert Dream"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div className="hidden md:flex flex-col justify-center items-center px-6">
              {/* Top Line */}
              <div className="w-[3px] h-28 bg-orange-200 rounded-full shimmer-border" />

              {/* Cupcake Icon */}
              <div className="my-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="pink"
                  className="animate-bounce drop-shadow-lg"
                >
                  <path d="M12 2c-1.355 0-2.591.539-3.536 1.464-.872.865-1.373 1.95-1.448 3.051C5.41 7.01 4 8.599 4 10.5c0 1.447.92 2.735 2.292 3.185l.455 5.466A2.003 2.003 0 0 0 8.74 21h6.52a2.003 2.003 0 0 0 1.993-1.849l.455-5.466A3.503 3.503 0 0 0 20 10.5c0-1.901-1.41-3.49-3.016-3.985-.075-1.101-.576-2.186-1.448-3.051A4.985 4.985 0 0 0 12 2z" />
                </svg>
              </div>

              {/* Bottom Line */}
              <div className="w-[3px] h-28 bg-orange-200 rounded-full shimmer-border" />
            </div>
            <div className="about-class flex-1 md:w-1/2 flex items-center justify-center">
              <p className="max-w-2xl mx-auto text-lg text-gray-700">
                <p className="text-3xl font-semibold mb-7 text-orange-400">
                  Welcome to Dessert Dream by Namita
                </p>
                Where we turn your sweet cravings into delightful creations!
                <br /> I’m Namita, the heart and hands behind the oven, and I'm
                passionate about bringing you freshly baked goods made with love
                and the finest ingredients. As a home-based baker, I started
                this journey with a simple goal: to offer custom, delicious, and
                beautifully crafted cakes and cupcakes for all of life’s special
                moments. Whether you're celebrating a birthday, wedding,
                anniversary, or just indulging in a sweet treat, I’m here to
                make sure your event is filled with delectable desserts that
                taste as good as they look. Every creation is handmade with
                care, from classic chocolate cakes to intricate custom designs,
                ensuring each bite brings joy. Using locally sourced
                ingredients, I’m dedicated to providing the freshest, most
                flavorful desserts. My mission is to add a touch of sweetness to
                your life, one bite at a time, and create desserts that bring
                smiles, memories, and a sense of celebration to every occasion.
                Thank you for supporting my small business, and I look forward
                to being a part of your special moments!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
