import "./artista.scss";
import React from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { NavLink, useParams } from "react-router-dom";
import '../../animations/bounce.scss';
import artistasData from "../../assets/artists.json";
import mic from "/mic.png";
import drum from "/drum-set.png"
import guitar from "/electric-guitar.png"

function Artista() {
  //recibo la key de mis parámetros
  const { nombre_artista } = useParams();
  //imprimo la key para chequear que sí la extraje
  console.log("Nombre del artista pasado por parámetro:", nombre_artista);
  //busco el artista de artistasData cuya key coincida con lo depositado en nombreArtista y lo deposito en una constante llamada artista
  const artista = artistasData[nombre_artista];

  return (
    <div className="artista">
      <div className="presentacion shadows ">
        <div className="col1">
          <div>
            <h3>{artista.nombre}</h3>
            <p>{artista.descripcion}</p>
          </div>

          <div className="link">
            <div className="container-link">
              <NavLink to={artista.link}>Ir a la página</NavLink>
            </div>

            <FaAnglesRight className="arrow bouncingX" />
          </div>
        </div>

        <div className="col2 ">
          <img src={`/${artista.presentado.logo}`} alt={artista.presentado.alt} />
        </div>
      </div>

      <img
        src={`/baners_artistas/${artista.banner}`}
        alt={artista.alt}
        className="baner"
      />

      <div className="info">
        <div className="venta-general">
          <h3>VENTA GENERAL</h3>
          <p>{artista.venta_general}</p>
        </div>

        <div className="fechas">
          <h3>FECHAS</h3>
          <div className="fechas-container">
          {artista.fechas.map((fecha, index) => (
                <div className="fecha">
                  <div key={index}>
                  <p>
                    <span>Día:</span>
                    {fecha.dia}
                  </p>
                  <p>
                    <span>Locación:</span>
                    {fecha.locacion}
                  </p>
                  <p>
                    <span>Estadio:</span>
                    {fecha.estadio}
                  </p>
                </div>
                </div>
              ))}
          </div>
        </div>

        <div className="estadio">
          <h3>DÓNDE VERÁS A TU ARTISTA</h3>
          <img src={`/estadios/${artista.estadio_img}`} alt={artista.estadio} />
        </div>


        {/* <img src={drum} alt="" className="drum"/> */}
        <img src={mic} alt="" className="mic"/>
        <img src={guitar} alt="" className="guitar"/>
      </div>
    </div>
  );
}

export default Artista;