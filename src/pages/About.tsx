import React from "react";
import Hero from "../components/Hero";

const About: React.FC = () => {
  return (
    <section id="about" className=" text-center">
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
      <div className="h-screen">
        <h2 className="text-3xl font-bold m-10">About Us</h2>
        <p className="max-w-2xl mx-auto">
          We are a small home bakery passionate about creating delicious treats
          using fresh, local ingredients. Our love for baking shines through in
          every bite.
        </p>
      </div>
    </section>
  );
};

export default About;
