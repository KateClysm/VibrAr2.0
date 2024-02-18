import LongPill from "../../components/long_pill/LongPill";
import "./nosotros.scss";
import nosotros from "/nosotros.jpg"
import logo from "/vibrarBlanco.png"
function Nosotros () {


  return (
    <div className="nosotros">

        <img src={logo} alt="VibrAr Logo" className="logo"/>

        <LongPill title="¿Quiénes somos?" text="En el corazón de VibrAr late la pasión compartida por la música, reunimos a un grupo voluntario de almas apasionadas unidas por el amor a los sonidos que hacen latir nuestros corazones. Somos más que un equipo, somos una familia que encuentra su conexión en la melodía y la armonía que la música proporciona."/>

       

        <LongPill
        title={"Nuestra Historia:"}
        text={
          "VibrAr no es solo una página informativa, es un proyecto solidario que nació con el propósito de unificar la información sobre eventos musicales en Argentina. Desde los estadios más emblemáticos como el Movistar Arena hasta los teatros más íntimos, VibrAr se esfuerza por ser tu compañero de confianza en la búsqueda de experiencias musicales inolvidables."
        }
        color={true}
      />

    <img src={nosotros} alt="people ilustration" className="nosotros-img"/> 

    <LongPill
        title={"Nuestra Misión:"}
        text={
          "Nos dedicamos a recopilar información detallada para aquellos que ansían planificar su viaje, estadía y bienestar durante los conciertos. En VibrAr, creemos que la música no solo es un evento, sino una experiencia que merece ser vivida plenamente."
        }
      />

    <LongPill
        title={"Cómo Funcionamos:"}
        text={
          "Aunque no cobramos por la información que ofrecemos, VibrAr se sustenta gracias a la generosidad de nuestros patrocinadores, rifas emocionantes y contenido publicitario en redes sociales. No te pierdas la oportunidad de participar en nuestros sorteos en Instagram; podrías ser el afortunado ganador de una entrada para ver a tu artista favorito. En cada clic y cada nota, VibrAr te invita a ser parte de esta comunidad que celebra la magia de la música. ¡Acompáñanos, descubre, vibra y sé parte de la experiencia VibrAr!"
        }
        color={true}
      />
    </div>
  );
}

export default Nosotros;


