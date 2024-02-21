import "./card.scss";
import { NavLink } from 'react-router-dom';

function Card({ image, title, link, direction }) {
  const curveDirection = `${direction === 'left' ? 'left' : 'right'}`;

  return (
    <NavLink to={link} className={`card shadows ${curveDirection}`}>
      <h4>{title}</h4>
      <img src={image} alt="" />
    </NavLink>
  );
}

export default Card;