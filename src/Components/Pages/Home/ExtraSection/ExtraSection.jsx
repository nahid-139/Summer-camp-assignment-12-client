import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ExtraSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    observer.observe(document.querySelector('#animated-section'));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="animated-section"
      className={`bg-blue-500 py-10 ${
        isVisible ? 'animate-fadeIn' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto">
        <h1 className="text-4xl text-white mb-4">Welcome to the Animated Section!</h1>
        <p className="text-white text-lg">
          This section is designed to showcase the power of animations using Tailwind CSS and React.
        </p>
      </div>
    </section>
  );
};

export default ExtraSection;
