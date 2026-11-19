import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-20 right-5 lg:bottom-8 lg:right-8 z-40 p-3.5 rounded-2xl bg-[#102552] text-white shadow-2xl hover:bg-[#1a3875] transition-all duration-300 transform hover:scale-110 active:scale-95 border border-white/20 backdrop-blur-md animate-fadeIn"
    >
      <ArrowUp className="w-5 h-5 text-[#FFC72C]" />
    </button>
  );
};
