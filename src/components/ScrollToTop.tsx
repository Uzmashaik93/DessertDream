import React, { useEffect, useState } from "react";

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    const totalHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setVisible(scrolled > 100);
    setScrollPercent((scrolled / totalHeight) * 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <div className="fixed right-4 top-1/3 z-50">
      {visible && (
        <div
          className="cursor-pointer group flex flex-col items-center"
          onClick={scrollToTop}
        >
          {/* Thin Line */}
          <div className="relative h-48 w-[2px] bg-pink-200 overflow-hidden">
            {/* Progress Bar */}
            <div
              className="absolute bottom-0 left-0 w-full bg-pink-500 transition-all duration-300"
              style={{ height: `${scrollPercent}%` }}
            ></div>
          </div>

          {/* Vertical Text */}
          <span className="mt-9 text-xs text-pink-500 rotate-90 origin-center tracking-widest">
            GO TO TOP
          </span>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
