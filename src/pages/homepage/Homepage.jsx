import "./homepage.scss";
import React from "react";
import { FaAnglesRight, FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import '../../animations/bounce.scss'
import artistasData from "../../assets/artistas.json";

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

  const artistasArray = Object.values(artistasData);

  return (

    <section className="homepage">
      
      <Slider images={artistasArray} />

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
        subtitle={"¡Rumor en Marcha! ¿Lana del Rey de Gira por Sudamérica?"}
        text={
          "Los fans latinoamericanos de Lana del Rey están emocionados ante el rumor de una posible gira que incluiría Argentina, Chile y Brasil. Aunque no hay confirmación oficial, las especulaciones han encendido las redes sociales. Los seguidores comparten teorías sobre fechas y lugares, creando una ola de entusiasmo. Los representantes de la artista no han hecho comentarios hasta el momento. ¿Será este el año en que Lana del Rey llegue a Sudamérica? Mantente atento a VibrAr para actualizaciones sobre este emocionante rumor."
        }
        color={true}
      />

      <div className="photo-block centered">
        <div className="col1">
          <div className="info">
            <h3>ATRAEMOS BUENAS VIBRAS</h3>
            <p>Y manifestamos los recitales que tanto querés que sucedan!</p>
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
          "Explora el resultado del incansable trabajo de nuestro talentoso equipo. Compartimos contigo instantes de pura magia capturados por nuestros dedicados fotógrafos voluntarios. Sumérgete en la esencia de los momentos más felices vividos en los conciertos, capturados con pasión y entregados con cariño. En VibrAr, cada fotografía es nuestro granito de arena, nuestra manera de compartir la emoción de la música contigo. ¡Descubre la magia detrás de cada imagen y únete a nosotros para revivir los mejores momentos de la escena musical!"
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
