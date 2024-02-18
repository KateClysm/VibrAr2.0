import "./long_pill.scss";

function LongPill({ title, subtitle, text, color }) {
  const colored = `${color === true ? "colorfull" : ""}`;

  return (
    <div className={`long-pill ${colored}`}>
      <h3>{title}</h3>
      <h4 className="subtitle">{subtitle}</h4>
      <p>{text}</p>
    </div>
  );
}

export default LongPill;
