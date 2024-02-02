
import React, { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { HiBars3 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { RiHomeHeartLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import './nav.scss';

const Nav = () => {

  const navLinks = [
    { name: "INICIO", area: "#inicio" },
    { name: "EVENTOS", area: "#eventos" },
    { name: "NOSOTROS", area: "#nosotros" },
    { name: "CONTACTO", area: "#contacto" }
  ];

  const handleNavLinkClick = (area, existingOnClick) => {
    if (existingOnClick) {
      existingOnClick(); 
    }
    handleScrollOrRedirection(area);
  };

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false); 

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isMenuOpen]);

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-200%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >

      <input
        type="checkbox"
        id="check"
        checked={isMenuOpen}
        onChange={() => setIsMenuOpen(!isMenuOpen)}
      />
      <label htmlFor="check" className="icons">
        <HiBars3 className="bars" id="menu-icon" />
        <IoClose className="close" id="close-icon" />
      </label>

      <div className="left-nav">
        <a
          href="/mariamonchot/"
          className="home"
          onClick={(event) => {
            event.preventDefault();
            handleCloseMenu();
            handleNavLinkClick("/mariamonchot/");
          }}
        >
          <RiHomeHeartLine className="home-icon" />
        </a>

        <nav>
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.area}
              style={{ "--i": index } }
              onClick={(event) => {
                event.preventDefault();
                handleCloseMenu();
                handleNavLinkClick(link.area);
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Nav;