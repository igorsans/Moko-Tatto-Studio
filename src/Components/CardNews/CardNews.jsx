
const CardNews = ({container, imgSrc, imgAlt, titulo, texto}) => {
  return (
    <div className={container}>
        <div>
            <img src={imgSrc} alt={imgAlt} />
        </div>
        <div>
            <h3>{titulo}</h3>
            <p>{texto}</p>
        </div>
    </div>
  )
}

export default CardNews