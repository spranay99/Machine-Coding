import React, { useEffect, useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?q=80&w=1792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1681149342561-96713cd1728a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto Play
  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(autoSlide);
  }, [currentIndex]);

  return (
    <section
      style={{
        width: "550px",
      }}
    >
      <div>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          style={{ width: "100%", height: "380px", borderRadius: "10px" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button style={{ cursor: "pointer" }} onClick={prevSlide}>
          Previous
        </button>
        <button style={{ cursor: "pointer" }} onClick={nextSlide}>
          Next
        </button>
      </div>
    </section>
  );
};

export default Carousel;
