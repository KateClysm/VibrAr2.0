import "./long_pill.scss";

function LongPill({ title, text, color }) {
  const colored = `${color === true ? "colorfull" : ""}`;

  return (
    <div className={`long-pill ${colored}`}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default LongPill;
