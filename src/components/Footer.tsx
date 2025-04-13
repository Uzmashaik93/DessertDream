import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-gray-100 text-center p-4">
      <p>&copy; 2024 HomeBaker Delights</p>
    </footer>
  );
};

export default Footer;
