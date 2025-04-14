import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/30 backdrop-blur-md text-center p-4 flex flex-col md:flex-row justify-between items-center gap-4 rounded-lg">
      <div className="text-sm text-gray-700">
        <p>© 2024 Dessert Dream by Namita. All Rights Reserved.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-2 md:gap-10 text-sm text-pink-700 font-medium">
        <div className="hover:underline cursor-pointer">Terms & Conditions</div>
        <div className="hover:underline cursor-pointer">Site Map</div>
      </div>
    </footer>
  );
};

export default Footer;
