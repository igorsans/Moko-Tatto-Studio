

const CardDev = ({img, nome, linkedin, github, texto, dev}) => {
  return (
    <div>
        <img src={img}></img>
        <p>{nome}</p>
        {dev == true ? <div>
            <a target='_blank' href={linkedin}>linkedIn</a><br/>
            <a target='_blank' href={github}>GitHub</a>
        </div> : <p>{texto}</p>}
       
    </div>
  )
}

export default CardDev