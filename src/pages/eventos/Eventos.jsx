import LongPill from "../../components/long_pill/LongPill";
import artistasData from "../../assets/artists.json";
import "./eventos.scss";
import { NavLink } from "react-router-dom";

function Eventos() {
  const proximos_eventos = Object.keys(artistasData);

  return (
    <div className="eventos" id="eventos">
      <LongPill
        title="Descubre los Próximos Eventos Musicales en Argentina"
        text={
          "Prepárate para planear uno de los mejores días de tu vida. Desde detalles sobre artistas y ubicaciones hasta consejos exclusivos para optimizar tu experiencia, en VibrAr te damos todas las herramientas para que vivas la música como nunca antes."
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
