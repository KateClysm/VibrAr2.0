import Evento from "../../components/evento/Evento";
import LongPill from "../../components/long_pill/LongPill";
import "./eventos.scss";
import artistasData from "../../assets/artists.json";

function Eventos () {
  const proximos_eventos = Object.keys(artistasData);

  return (
   <div className="eventos" id="eventos">
      <LongPill title="Descubre todos los nuevos eventos por venir" text={"haz click sobre el evento para saber todo lo necesario para planear uno de los mejores días de tu vida!"}/>
   
    
      {proximos_eventos.map((nombreArtista, index) => {
        const artista = artistasData[nombreArtista];
        return (
          <Evento
            key={index}
            banner={artista.banner}
          />
        );
      })}
   
   </div>


  );
}

export default Eventos;
