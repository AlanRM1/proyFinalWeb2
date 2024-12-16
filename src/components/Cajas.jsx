import '../css/Cajas.css';

function Cajas({ titulo, imagen, texto, borderColor, backgroundColor }) {
  const containerStyle = {
    border: `2px solid ${borderColor}`,
    backgroundColor: backgroundColor,
  };

  return (
    <div className="container" style={containerStyle}>
      <header className="title">
        <h1>{titulo}</h1>
      </header>
      <div className="imagen">
        <img src={imagen} alt="Descripción de la imagen" />
      </div>
      <div className="texto">
        <p>{texto}</p>
      </div>
    </div>
  );
}

export default Cajas;
