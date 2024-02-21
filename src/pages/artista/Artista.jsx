import "./artista.scss";
import React from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { NavLink, useParams } from "react-router-dom";
import '../../animations/bounce.scss';
import artistasData from "../../assets/artistas.json";
import consejosData from "../../assets/consejos.json";
import mic from "/mic.png";
import guitar from "/electric-guitar.png"

function Artista() {
  //recibo la key de mis parámetros
  const { nombre_artista } = useParams();
  //imprimo la key para chequear que sí la extraje
  console.log("Nombre del artista pasado por parámetro:", nombre_artista);
  //busco el artista de artistasData cuya key coincida con lo depositado en nombreArtista y lo deposito en una constante llamada artista
  const artista = artistasData[nombre_artista];

  const consejos_lugar = consejosData.lugar[artista.tipo_de_lugar];
  const consejos_estadia = consejosData.estadia[artista.locacion_exacta];
  const consejos_viaje = consejosData.viaje;

  return (
    <div className="artista">
      <div className="presentacion shadows">
        <div className="col1">
          <div>
            <h3>{artista.nombre}</h3>
            <p>{artista.descripcion}</p>
          </div>

          <div className="link">
            <div className="container-link">
              <NavLink to={artista.link}>Ir a la Página Oficial</NavLink>
            </div>

            <FaAnglesRight className="arrow bouncingX" />
          </div>
        </div>

        <div className="col2">
          <img src={`/${artista.presentado.logo}`} alt={artista.presentado.alt} />
        </div>
      </div>

      <img
        src={`/baners_artistas/${artista.banner}`}
        alt={artista.alt}
        className="baner shadows"
      />

      <div className="info shadows">
      <img src={guitar} alt="Ilustración Guitarra" className="guitar "/>
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
                    <span>Día: </span>
                    {fecha.dia}
                  </p>
                  <p>
                    <span>Locación: </span>
                    {fecha.locacion}
                  </p>
                  <p>
                    <span>Lugar: </span>
                    {fecha.lugar}
                  </p>
                </div>
                </div>
              ))}
          </div>
        </div>

        <div className="estadio ">
          <h3>DÓNDE VERÁS A TU ARTISTA</h3>
          <img src={`/estadios/${artista.lugar_img}`} alt={artista.lugar} />
        </div>


        <div className="container-consejos">

            <h3>Consejos de parte del Staff de VibrAr:</h3>
            
            <div className="consejos">
              <div className="consejos-estadio">
                  <h4>{`Dónde verás a tu artista: ${artista.lugar}`}</h4>
                  <p className="sub-consejo"><span>Te recomendamos:</span></p>
                  <ul>
                  {consejos_lugar.map((consejo, index) => (
                    <li key={index}>{consejo}</li>
                  ))}
                  </ul>
                </div>
    
                <div className="consejos-estadia">

                    {/* quiero comparar la locacion_exacta con alguna de las locaciones que están en el json 'consejos' y si coincide, imprimir info referente a esa locación (ejemplo, Buenos Aires, Capital Federal) */}
                    <h4>{`Dónde será el evento: ${artista.locacion_exacta}`}</h4>
                      <p className="sub-consejo"><span>Esta data vale oro:</span></p>
                      <ul>
                      {consejos_estadia.map((consejo, index) => (
                        <li key={index}>{consejo}</li>
                      ))}
                      </ul>
                </div>
                
                <div className="consejos-viaje">

                  {/* quiero imprimir lo referente a 'viaje' del json */}
                  <h4>{`No sos de: ${artista.fechas[0].locacion} ?`}</h4>
                      <p className="sub-consejo"><span>Consejos para tu viaje:</span></p>
                      <ul>
                      {consejos_viaje.map((consejo, index) => (
                        <li key={index}>{consejo}</li>
                      ))}
                      </ul>
                </div>

            </div>
        </div>

        <img src={mic} alt="Ilustración Micrófono" className="mic"/>
        
      </div>
    </div>
  );
}

export default Artista;