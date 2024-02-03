import "./homepage.scss";
import React, { useState, useEffect } from "react";
import Slider from "../../components/slider/Slider";

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
      clase: "tall"
    },
    {
      nombre: "concert2",
      clase: ""
    },
    {
      nombre: "concert3",
      clase: ""
    },
    {
      nombre: "concert4",
      clase: "wide"
    },
    {
      nombre: "concert5",
      clase: ""
    },
    {
      nombre: "concert6",
      clase: "tall"
    },
    {
      nombre: "concert7",
      clase: ""
    },
    {
      nombre: "concert8",
      clase: "big"
    }
    
  ];

  return (
    <section className="homepage" id="inicio">

      <Slider images={artistsList} />

      <div className="container-info">
            <div className="oficiales">
              <h4>PRÓXIMOS RECITALES</h4>
              <img src="/fotografias/concert3.jpg" alt="" />
            </div>
            <div className="gossip">
              <h4>NOTICIAS DE ARTISTAS</h4>
              <img src="/fotografias/gossip.jpg" alt="" />
            </div>
      </div>

      <div className="container-fotografias">
       <div className="text">
       <h3>NUESTRO GRANITO DE ARENA</h3>
        <p>Este es el fruto del esfuerzo de nuestro staff, te compartimos los momentos más felices que pudimos capturar gracias a nuestros fotógrafos voluntuarios</p>
       </div>
        <div className="grid-fotos">
          
        {fotografias.map((foto, index) => (
          <div key={index} className={`${foto.clase} div-foto`}>
            <img src={`/fotografias/${foto.nombre}.jpg`} alt=""  />
          </div>
        ))}

        </div>

      </div>
    </section>
  );
}

export default HomePage;
