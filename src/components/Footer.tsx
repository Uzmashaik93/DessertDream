import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/30 backdrop-blur-md text-center p-4 flex justify-between rounded-lg">
      <div>
        <p>
          Copyright &copy; 2024 Dessert Dream by Namita. All Rights Reserved.
        </p>
      </div>
      <div className="flex gap-20">
        <div>Terms & Conditions</div>
        <div>Site Map</div>
      </div>
    </footer>
  );
};

export default Footer;
