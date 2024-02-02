import "./homepage.scss";
import React, { useState, useEffect } from "react";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";

import { motion } from "framer-motion";

function HomePage() {
  const [artistsList, setArtistsList] = useState([]);
  const [index, setIndex] = useState(0);

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

  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/src/assets/artists.json");
        const data = await response.json();

        const artistsArray = Object.values(data);
        setArtistsList(artistsArray);
      } catch (error) {
        console.error("Error fetching artists data:", error);
      }
    };

    fetchData();
  }, []);

  function nextStep() {
    setDirection(1);
    if (index === artistsList.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  }

  function prevStep() {
    setDirection(-1);
    if (index === 0) {
      setIndex(artistsList.length - 1);
      return;
    }
    setIndex(index - 1);
  }

  return (
    <section className="homepage">
      <div className="container-slider">
        <div className="slide-show">
          {artistsList.length > 0 && artistsList[index] && (
            <motion.img
              variants={variants}
              animate="animate"
              initial="initial"
              exit="exit"
              key={artistsList[index]?.banner || "defaultKey"}
              custom={direction}
              src={`/baners_artistas/${artistsList[index].banner}`}
              alt={artistsList[index].nombre}
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

      <div className="container-info">
            <div className="oficiales"></div>
            <div className="gossip"></div>
      </div>

      <div className="container-fotografias">
        <h3>Nuestro granito de arena</h3>
        <div className="grid-fotos">

        </div>
      </div>
    </section>
  );
}

export default HomePage;
