import React from "react";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <section id="about" className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-8">About Us</h2>
      <p className="max-w-2xl mx-auto">
        We are a small home bakery passionate about creating delicious treats
        using fresh, local ingredients. Our love for baking shines through in
        every bite.
      </p>
    </section>
  );
};

export default About;
