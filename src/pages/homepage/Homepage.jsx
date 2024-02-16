import "./homepage.scss";
import React, { useState, useEffect } from "react";
import { FaAnglesRight, FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import '../../animations/bounce.scss'

//components
import LongPill from "../../components/long_pill/LongPill";
import Slider from "../../components/slider/Slider";
import Card from "../../components/card/Card";

//images
import concerts from "../../../public/fotografias/concert1.jpg";
import gossip from "../../../public/fotografias/gossip.jpg";
import peoplecontact from "/people.jpg";
import attractingpeople from "/attracting.jpg";
import fotografias from "../../assets/images"

function HomePage() {

  const [artistsList, setArtistsList] = useState([]);

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

  return (

    <section className="homepage">
      
      <Slider images={artistsList} />

      <div className="container-info">
        <Card
          link="/eventos"
          image={concerts}
          title={"PRÓXIMOS RECITALES"}
          direction={"left"}
        />
        <Card
          link="/noticias"
          image={gossip}
          title={"NOTICIAS DE ARTISTAS"}
          direction={"right"}
        />
      </div>

      <LongPill
        title={"RECIENTE"}
        text={
          "Se confirma el concierto de Lana del Rey para Argentina, Brazil y Chile, próximamente se anunciará el estadio y fechas."
        }
        color={true}
      />

      <div className="photo-block centered">
        <div className="col1">
          <div className="info">
            <h3>ATRAEMOS BUENAS VIBRAS</h3>
            <p>Y manifestamos los recitales que tanto querés que sucedan</p>
          </div>
          <div className="buttons link">
            <div className="container-link">
              <NavLink to="/nosotros">Conoce más sobre nosotros</NavLink>
            </div>

            <FaAnglesRight className="arrow bouncingX" />
          </div>
        </div>
        <div className="col2">
          <img src={attractingpeople} alt="" />
        </div>
      </div>

      <LongPill
        title={"NUESTRO GRANITO DE ARENA"}
        text={
          "Este es el fruto del esfuerzo de nuestro staff, te compartimos los momentos más felices que pudimos capturar gracias a nuestros fotógrafos voluntuarios"
        }
      />

      <div className="grid-fotos">
        {fotografias.map((foto, index) => (
          <div key={index} className={`${foto.clase} div-foto`}>
            <img src={`/fotografias/${foto.nombre}.jpg`} alt="" />
          </div>
        ))}
      </div>

      <div className="photo-block centered left-sided" id="contacto">
        <div className="col1">
          <div className="info">
            <h3>CONTACTATE CON NOSOTROS</h3>
            <p>
              Podes encontrarnos en todas las redes sociales con un solo click!
            </p>
          </div>

          <div className="buttons">
            <FaXTwitter className="red-icon" />
            <FaFacebook className="red-icon" />
            <FaInstagramSquare className="red-icon" />
          </div>

        </div>
        <div className="col2">
          <img src={peoplecontact} alt="" />
        </div>
      </div>
    </section>
  );
}

export default HomePage;
