import "./photo_block.scss";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaAnglesRight } from "react-icons/fa6";
import '../../animations/bounce.scss';

function PhotoBlock({ title, text, image, side, socials, center, link, linkName, id, padding_right }) {
    const photo = `${side === "left" ? "left-sided" : ""}`;
    const centered = `${center === true ? "centered" : "space-between"}`;
    const padding = `${padding_right === true ? "padding-right" : ""}`;
    const page = `${link? "link" : ""}`;

  return (
    <div className={`photo-block ${photo} ${centered} ${padding}`} id={id}>
        <div className={`col1 ${centered}`}>
            <div className="info">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
            {socials && (
                <div className="buttons">
                <FaXTwitter  className="red-icon"/>
                <FaFacebook className="red-icon"/>
                <FaInstagramSquare className="red-icon"/>
                </div>
            )}
            {link && (
                <div className={`buttons ${page}`}>
                    <div className="container-link">
                        <NavLink to={link}>
                            {linkName}
                        </NavLink>
                    </div>
                    
                    <FaAnglesRight className="arrow bouncingX"/>
                </div>
                 
            )}
        </div>
        <div className="col2">
            <img src={image} alt="" />
        </div>
    </div>
  );
}

export default PhotoBlock;
