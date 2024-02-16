import LongPill from "../../components/long_pill/LongPill";
import artistasData from "../../assets/artists.json";
import "./eventos.scss";
import { NavLink } from "react-router-dom";

function Eventos() {
  const proximos_eventos = Object.keys(artistasData);

  return (
    <div className="eventos" id="eventos">
      <LongPill
        title="Descubre todos los nuevos eventos por venir"
        text={
          "haz click sobre el evento para saber todo lo necesario para planear uno de los mejores días de tu vida!"
        }
      />

     <div className="container-eventos">
        {proximos_eventos.map((nombre_artista, index) => {
          const artista = artistasData[nombre_artista];
          return (
            <NavLink 
              className="evento"
              key={index}
              to={`/artista/${nombre_artista}`}
            >
             <img src={`/baners_artistas/${artista.banner}`} alt="" />
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default Eventos;
