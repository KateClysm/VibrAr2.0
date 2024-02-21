import LongPill from "../../components/long_pill/LongPill";
import Noticia from "../../components/noticia/Noticia";
import noticiasData from "../../assets/noticias.json"
import "./noticias.scss";

function Noticias () {

  return (
    <div className="noticias">
      <LongPill
        title={"Entre Bastidores"}
        text={
          'Bienvenido a "Entre Bastidores", donde desvelamos los secretos del mundo musical. Desde noticias no confirmadas hasta cambios de vestuario y estéticas, te mantenemos al tanto de todo. Conoce qué elementos están permitidos en los eventos, disfruta de los clásicos rumores de farándula y sumérgete en la intriga que rodea a los próximos conciertos. En VibrAr, la emoción comienza mucho antes de que las luces se enciendan en el escenario. ¡Únete a nosotros para descubrir el lado oculto de la música!'
        }
        color={true}
      />

      {noticiasData.map((noticia, index) => (
        <Noticia
          key={index}
          imagen={noticia.imagen}
          titulo={noticia.titulo}
          texto={noticia.texto}
          dia={noticia.dia}
        />
      ))}
    </div>
  );
}

export default Noticias;
