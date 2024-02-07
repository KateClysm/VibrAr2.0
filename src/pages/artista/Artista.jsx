import LongPill from "../../components/long_pill/LongPill";
import "./artista.scss";
import baner from "/baners_artistas/Evanescencebaner.jpg"
import { FaAnglesRight } from "react-icons/fa6";
import allaccess from "/allaccess.png"
import { NavLink } from "react-router-dom";
function Artista () {


  return (
    <div className="artista">
        <img src={baner} alt="" />

        <div className="presentación">
          <div className="col1">
              <div className="info">
                  <h3>Evanescense</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore officiis nesciunt maxime magni, atque quaerat vitae quia earum veniam nobis debitis praesentium consequatur, optio incidunt dicta. Alias, cupiditate a.</p>
              </div>
              <div className="link">
                      <div className="container-link">
                          <NavLink to="/">
                              Ir a la página
                          </NavLink>
                      </div>
                      
                      <FaAnglesRight className="arrow bouncingX"/>
                  </div>
          </div>

          <div className="col2">
              <img src={allaccess} alt="" />
          </div>
    </div>

        <LongPill
          title={"VENTA GENERAL"}
          text={
            "06/05"
          }
        />
    </div>
  );
}

export default Artista;
