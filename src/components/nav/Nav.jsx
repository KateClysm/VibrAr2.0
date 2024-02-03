import React, { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import "./nav.scss";
import { HiBars3 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  // Arreglo de objetos que contiene los nombres y áreas de navegación
  const navLinks = [
    { name: "INICIO", area: "/" },
    { name: "EVENTOS", area: "#eventos" },
    { name: "NOSOTROS", area: "#nosotros" },
    { name: "CONTACTO", area: "#contacto" }
  ];

  // Maneja el scroll o redireccionamiento a la sección indicada
  const handleScrollOrRedirection = (area) => {
    const currentPath = window.location.pathname;

    if (area === "/" && currentPath === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (area === "/" && currentPath !== "/") {
      navigate("/");
    } else if (area.startsWith("/") && currentPath === "/") {
      const element = document.getElementById(area.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(area.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); // Espera 500ms para asegurarse de que la redirección se complete antes del desplazamiento
    }
  };

  // Maneja el click en los enlaces de navegación
  const handleNavLinkClick = (area, existingOnClick) => {
    if (existingOnClick) {
      existingOnClick(); // Llama a la función onClick existente si hay alguna
    }
    handleScrollOrRedirection(area); // Llama a la función para redirección o desplazamiento
  };

  // Obtiene el scrollY y detecta cuando hay cambios
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false); // Controla el ocultamiento del nav al hacer scroll

  // Modifica el estado de 'hidden' en base al scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Controla si el menú está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Maneja el cierre del menú
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  // Evita el desbordamiento cuando se abre el menú en dispositivos móviles
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    // Limpia el efecto cuando el componente se desmonta
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
          href="/"
          className="home"
          onClick={(event) => {
            event.preventDefault();
            handleCloseMenu();
            handleNavLinkClick("/");
          }}
        >
        </a>

        <nav>
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.area}
              style={{ "--i": index }}
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