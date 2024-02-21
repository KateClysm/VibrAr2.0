import "./noticia.scss";

function Noticia ({imagen, titulo, texto, dia}) {


  return (
    <div className="noticia shadows">
        <img src={imagen} alt="" />

        <div className="info">
            <h4>{titulo}</h4>
            <p><span>{dia}</span></p>
            <p>{texto}</p>
            
        </div>
    </div>
  );
}

export default Noticia;
