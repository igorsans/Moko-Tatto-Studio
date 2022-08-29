import { useState } from "react";
import CardDev from "../../Components/CardDev/CardDev"
import S from './Sobre.module.css'


const Sobre = () => {
  const [cards, setCards] = useState(false)
  const [tatto, setTatto] = useState([
    {
      img: "https://avatars.githubusercontent.com/u/102765157?v=4",
      nome: "Guilherme Cordeiro",
      linkedin: "https://www.linkedin.com/in/guilhermecordeirodamata/",
      github: "https://github.com/Dev-DaMata",
      texto: "oioi",
      dev: true
    },
    {
      img:"https://avatars.githubusercontent.com/u/98533716?v=4",
      nome: "Igor Santos",
      linkedin: "https://www.linkedin.com/in/devsantos/",
      github: "https://github.com/igorsans",
      texto: "oioi",
      dev: true
    },
    {
      img:"https://avatars.githubusercontent.com/u/93957967?v=4",
      nome: "Edson Vieira",
      linkedin: "https://www.linkedin.com/in/edson-vieira7728/",
      github: "https://github.com/Edson-7728",
        texto: "oioi",
      dev: true
    },
    {
      img:"https://avatars.githubusercontent.com/u/80377307?v=4",
      nome: "Pedro Garrido",
      linkedin: "https://www.linkedin.com/in/pedro-garrido-1a8482205/",
      github: "https://github.com/Garridopedro",
      texto: "oioi",
      dev: true
    },
  ]);
  const  trocaCard = ()=>{
    cards? setCards(false) : setCards(true)
  }
  return (
    <div>
      <div className={S.img}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quis! Pariatur odio perspiciatis quae vero aliquam necessitatibus in provident. Fugiat saepe, nostrum cum quis alias est? Nulla accusamus nemo dolorem.</p>
      </div>
      <section>
          <h3 className={S.titulo} onPointerEnter={trocaCard} >{cards ? "Desenvolvedores" : "Tattuadores" }</h3>
          <div className={S.cardsContainer}>
          {tatto.length > 0 ? tatto.map((item)=>
            <CardDev
            key={item.nome}
            img={item.img}
            nome={item.nome}
            linkedin={item.linkedin}
            github={item.github}
            texto={item.texto}
            cards={cards}
            />
          ) : 'não achei'}    
          </div>            
      </section>
    </div>
  )
}

export default Sobre