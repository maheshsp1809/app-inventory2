import React, { useState, useEffect, useCallback } from "react";

const AdvancedCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning, items.length]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + items.length) % items.length
      );
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning, items.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const getItemStyle = (index) => {
    const diff = (index - currentIndex + items.length) % items.length;
    let translateX = 0;
    let scale = 0.8;
    let zIndex = 0;
    let opacity = 1;

    if (diff === 0) {
      scale = 1;
      zIndex = 2;
    } else if (diff === 1 || diff === -2) {
      translateX = "50%";
      zIndex = 1;
    } else if (diff === -1 || diff === 2) {
      translateX = "-50%";
      zIndex = 1;
    } else {
      opacity = 0;
    }

    return {
      transform: `translateX(${translateX}) scale(${scale})`,
      transition: "all 0.5s ease-in-out",
      opacity,
      zIndex,
    };
  };

  return (
    <div className="relative overflow-hidden w-full h-[400px]">
      <div className="flex justify-center items-center w-full h-full">
        {items.map((item, index) => (
          <div
            key={index}
            className="absolute w-[80%] h-full"
            style={getItemStyle(index)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h2 className="text-3xl font-bold text-white mb-2">
                {item.title}
              </h2>
              <p className="text-white mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-white">
                  {item.price}
                </span>
                <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-opacity-80 transition-colors">
                  {item.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
      >
        &#10095;
      </button>
    </div>
  );
};

export default AdvancedCarousel;
