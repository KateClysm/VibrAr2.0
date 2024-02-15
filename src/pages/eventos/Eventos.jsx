import LongPill from "../../components/long_pill/LongPill";
import artistasData from "../../assets/artists.json";
import "./eventos.scss";

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
        {proximos_eventos.map((nombreArtista, index) => {
          const artista = artistasData[nombreArtista];
          return (
            <div className="evento" key={index}>
              <img src={`/baners_artistas/${artista.banner}`} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Eventos;
