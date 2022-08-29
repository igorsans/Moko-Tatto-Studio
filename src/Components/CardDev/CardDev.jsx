import S from './CardDev.module.css'

const CardDev = ({img, nome, linkedin, github, texto, cards}) => {
  return (
    <div className={S.container} >
      <div className={S.card}>
        <div className={S.front}>
          <img  src={img}></img>
          <p>{nome}</p>
        </div>
        <div className={S.back}>
        {cards == true ? <div>
            <a target='_blank' href={linkedin}>linkedIn</a><br/>
            <a target='_blank' href={github}>GitHub</a>
        </div> : <p>{texto}</p>}
        </div>
      </div>
    </div>
  )
}

export default CardDev