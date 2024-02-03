import "./slider.scss";
import React, { useState } from "react";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";

import { motion } from "framer-motion";

function Slider({ images }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

const variants = {
    initial: (direction) => {
      return {
        x: direction > 0 ? 800 : -800,
        opacity: 0,
        scale: 0.8,
      };
    },
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: {type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    },
    exit: (direction) => {
      return {
        x: direction > 0 ? -800 : 800,
        opacity: 0,
        scale: 0.8,
        transition: {
          x: {type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 0.3 }
        }
      };
    },
  };
  function nextStep() {
    setDirection(1);
    if (index === images.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  }

  function prevStep() {
    setDirection(-1);
    if (index === 0) {
      setIndex(images.length - 1);
      return;
    }
    setIndex(index - 1);
  }

  return (
    <div className="container-slider">
      <div className="slide-show">
        {images.length > 0 && (
          <motion.img
            variants={variants}
            animate="animate"
            initial="initial"
            exit="exit"
            key={images[index]?.banner || "defaultKey"}
            custom={direction}
            src={`/baners_artistas/${images[index].banner}`}
            alt={images[index].nombre}
            className="slide"
          />
        )}

        <button className="prevButton" onClick={prevStep}>
          <CiCircleChevLeft />
        </button>
        <button className="nextButton" onClick={nextStep}>
          <CiCircleChevRight />
        </button>
      </div>
    </div>
  );
}

export default Slider;
