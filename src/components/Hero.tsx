import React, { ReactElement, useEffect, useState } from "react";

interface HeroProps {
  height: string;
  actions?: ReactElement;
  padding: string;
  heading: ReactElement;
}

const images: string[] = [
  "/background1.jpg",
  "/background2.jpg",
  "/background5.jpeg",
];

const Hero: React.FC<HeroProps> = ({
  height,
  actions,
  padding,
  heading,
}: HeroProps) => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrev(current);
      setCurrent((prevIndex) => (prevIndex + 1) % images.length);
      setFade(true);
      setTimeout(() => setFade(false), 1500); // match fade duration
    }, 6000); // slightly longer interval for smoother transitions

    return () => clearInterval(interval);
  }, [current]);

  return (
    <>
      <style>
        {`
          @keyframes slideInLeft {
            0% { opacity: 0; transform: translateX(-50px); }
            100% { opacity: 1; transform: translateX(0); }
          }

          @keyframes slideInRight {
            0% { opacity: 0; transform: translateX(50px); }
            100% { opacity: 1; transform: translateX(0); }
          }

          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .animate-slide-in-left {
            animation: slideInLeft 1s ease-out forwards;
          }

          .animate-slide-in-right {
            animation: slideInRight 1s ease-out 0.6s forwards;
          }

          .animate-fade-in-up {
            animation: fadeInUp 1s ease-out 1.2s forwards;
          }
        `}
      </style>

      <section
        id="home"
        className={`relative text-white text-center ${padding} overflow-hidden ${height}`}
      >
        {/* Previous Image */}
        <div
          className={`absolute inset-0 bg-cover bg-no-repeat bg-center blur-[2px] brightness-75 transition-opacity duration-[1500ms] ease-in-out ${
            fade ? "opacity-0" : "opacity-100"
          }`}
          style={{ backgroundImage: `url(${images[prev]})` }}
        />

        {/* Current Image (fading in) */}
        <div
          className={`absolute inset-0 bg-cover bg-center blur-[2px] brightness-80 transition-opacity duration-[1500ms] ease-in-out ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${images[current]})` }}
        />
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl mx-auto animate-fade-in mt-20">
          {heading}
        </div>
        {actions}
      </section>
    </>
  );
};

export default Hero;
