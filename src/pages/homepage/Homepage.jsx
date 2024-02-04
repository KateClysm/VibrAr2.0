import "./homepage.scss";
import React, { useState, useEffect } from "react";
import Slider from "../../components/slider/Slider";
import RightBlock from "../../components/right_block/RightBlock";
import Card from "../../components/card/Card";
import concerts from "../../../public/fotografias/concert1.jpg";
import gossip from "../../../public/fotografias/gossip.jpg";
import LongPill from "../../components/long_pill/LongPill";
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

  const fotografias = [
    {
      nombre: "concert1",
      clase: "wide",
    },
    {
      nombre: "concert2",
      clase: "normal",
    },
    {
      nombre: "concert3",
      clase: "normal",
    },
    {
      nombre: "concert4",
      clase: "tall",
    },
    {
      nombre: "concert5",
      clase: "normal",
    },
    {
      nombre: "concert6",
      clase: "normal",
    },
    {
      nombre: "concert7",
      clase: "wide",
    },
    {
      nombre: "concert8",
      clase: "tall",
    },
    {
      nombre: "concert9",
      clase: "normal",
    },
    {
      nombre: "concert10",
      clase: "wide",
    },
    {
      nombre: "concert11",
      clase: "normal",
    },
    {
      nombre: "concert12",
      clase: "wide",
    },
    {
      nombre: "concert13",
      clase: "normal",
    },
    {
      nombre: "concert14",
      clase: "normal",
    },
    {
      nombre: "concert15",
      clase: "tall",
    },
    {
      nombre: "concert16",
      clase: "wide",
    },
    {
      nombre: "concert17",
      clase: "wide",
    },
    {
      nombre: "concert18",
      clase: "normal",
    },
    {
      nombre: "concert19",
      clase: "normal",
    },
    {
      nombre: "concert20",
      clase: "wide",
    },
  ];

  return (
    <section className="homepage" id="inicio">
      <Slider images={artistsList} />

      <div className="container-info">
        <Card
          image={concerts}
          title={"PRÓXIMOS RECITALES"}
          direction={"left"}
        />
        <Card
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

      <RightBlock />
    </section>
  );
}

export default HomePage;
