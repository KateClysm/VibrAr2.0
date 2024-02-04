import "./long_pill.scss";

function LongPill({ title, text }) {
  return (
    <div  className="long-pill">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default LongPill;