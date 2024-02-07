
import "./artista.scss";
import baner from "/baners_artistas/Evanescencebaner.jpg"
import { FaAnglesRight } from "react-icons/fa6";
import allaccess from "/allaccess.png"
import { NavLink } from "react-router-dom";
function Artista () {


  return (
    <div className="artista flex-column rowg-2">
      

      <div className="presentacion shadows bg-white br-32 p4 colg-2 ">
        <div className="col1 flex-column">
          <div>
            <h3>Evanescense</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              inventore officiis nesciunt maxime magni, atque quaerat vitae quia
              earum veniam nobis debitis praesentium consequatur, optio incidunt
              dicta. Alias, cupiditate a.
            </p>
          </div>

          <div className="link alitems-center">
            <div className="colorfull-button">
              <NavLink to="/">Ir a la página</NavLink>
            </div>

            <FaAnglesRight className="arrow bouncingX" />
          </div>
        </div>

        <div className="col2 ">
          <img src={allaccess} alt="" />
        </div>
      </div>

      <img src={baner} alt="" className="br-32 white-outline" />
      
      <div className="info">


          <div className="fechas">
              <h3>FECHAS</h3>
              <div className="fechas-container">
                <div className="fecha">
                    <p><span>Día:</span> 10/11/2023</p>
                    <p><span>Locación:</span> Buenos Aires, Argentina</p>
                    <p><span>Estadio:</span> Estadio River Plate</p>
                </div>
                <div className="fecha">
                    <p><span>Día:</span> 10/11/2023</p>
                    <p><span>Locación:</span> Buenos Aires, Argentina</p>
                    <p><span>Estadio:</span> Estadio River Plate</p>
                </div>
                <div className="fecha">
                    <p><span>Día:</span> 10/11/2023</p>
                    <p><span>Locación:</span> Buenos Aires, Argentina</p>
                    <p><span>Estadio:</span> Estadio River Plate</p>
                </div>
              </div>
          </div>

          <div className="estadio">
            <h3>DÓNDE VERÁS A TU ARTISTA</h3>
            <img src="/estadios/masmonumental.jpg" alt="" />
          </div>
      </div>
    </div>
  );
}

export default Artista;
