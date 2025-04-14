import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/30 backdrop-blur-md text-center p-4 flex flex-col md:flex-row justify-between items-center gap-4 rounded-lg">
      <div className="text-sm font-bold text-gray-700">
        <p>© 2024 Dessert Dream by Namita. All Rights Reserved.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-2 md:gap-10 text-sm text-pink-700 font-medium">
        <a
          href="https://github.com/Uzmashaik93"
          target="_blank"
          className="hover:cursor-pointer hover:text-pink-500 font-bold"
        >
          Created By Uzma
        </a>
      </div>
    </footer>
  );
};

export default Footer;
