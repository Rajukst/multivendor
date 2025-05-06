"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

const images = [image1, image2, image3];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const LandingSlider = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage(([prevPage]) => [
      (prevPage + newDirection + images.length) % images.length,
      newDirection,
    ]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-wrapper" style={{ position: "relative", overflow: "hidden", height: "500px" }}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
          }}
          style={{ position: "absolute", width: "100%", height: "100%" }}
        >
          <Image
            src={images[page]}
            alt={`Slide ${page}`}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <div style={{ position: "absolute", top: "50%", width: "100%", display: "flex", justifyContent: "space-between", padding: "0 20px", zIndex: 1 }}>
        <button onClick={() => paginate(-1)} className="arrow-button">❮</button>
        <button onClick={() => paginate(1)} className="arrow-button">❯</button>
      </div>

      {/* Dots */}
      <div style={{ position: "absolute", bottom: 20, width: "100%", textAlign: "center", zIndex: 1 }}>
        {images.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setPage([idx, idx > page ? 1 : -1])}
            style={{
              display: "inline-block",
              width: 12,
              height: 12,
              margin: "0 6px",
              borderRadius: "50%",
              background: idx === page ? "#e91e63" : "#ccc",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LandingSlider;
