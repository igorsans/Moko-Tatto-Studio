
const CardNews = ({textoStyle ,divStyle, imgStyle, imgSrc, imgAlt, titulo, texto}) => {
  return (
    <div className={divStyle}>
        <div>
            <img className={imgStyle} src={imgSrc} alt={imgAlt} />
        </div>
        <div className={textoStyle}>
            <h3>{titulo}</h3>
            <p>{texto}</p>
        </div>
    </div>
  )
}

export default CardNews