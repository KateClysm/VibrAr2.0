import "./evento.scss";

function Evento ({banner}) {


  return (
    <div className="evento">
        <img src={`/baners_artistas/${banner}`} alt="" />
    </div>
  );
}

export default Evento;
