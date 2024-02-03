import "./rightblock.scss";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function RightBlock({ images }) {


  return (
    <div className="container-right-block">
        <div className="col1">
            <div className="info">
                <h3>CONTACTATE CON NOSOTROS</h3>
                <p>Puedes encontrarnos en todas las redes sociales con un solo click!</p>
            </div>
            <div className="buttons">
                <FaXTwitter  className="red-icon"/>
                <FaFacebook className="red-icon"/>
                <FaInstagramSquare className="red-icon"/>
            </div>
        </div>
        <div className="col2">
            <img src="/people.jpg" alt="" />
        </div>
    </div>
  );
}

export default RightBlock;
