import "./noticia.scss";

function Noticia ({imagen, titulo, texto, dia}) {


  return (
    <div className="noticia">
        <img src={imagen} alt="" />

        <div className="info">
            <h4>{titulo}</h4>
            <p>{texto}</p>
            <p>{dia}</p>
        </div>
    </div>
  );
}

export default Noticia;
