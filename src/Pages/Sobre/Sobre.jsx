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
      texto: "Ola, me chamo Guilherme e sou apaixonado por tattuagens. e a minha meta aqui na Moko tatto é transmitir essa paixão para os meus clientes",
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
        texto: "Aqui o cliente não escolhe a tattoo... a tattoo é que escolhe o cliente. Eu apenas promovo o encontro.",
      dev: true
    },
    {
      img:"https://avatars.githubusercontent.com/u/80377307?v=4",
      nome: "Pedro Garrido",
      linkedin: "https://www.linkedin.com/in/pedro-garrido-1a8482205/",
      github: "https://github.com/Garridopedro",
      texto: "Olá, meu nome é Pedro e sou especialista em pontilhismo. Comecei a me apaixonar pelo estilo há 10 anos atrás e sigo marcando meu trabalho na vida das pessoas.",
      dev: true
    },
  ]);
  const  trocaCard = ()=>{
    cards? setCards(false) : setCards(true)
  }
  return (
    <div>
      <div className={S.img}>
        <p>O Moko Tatto é um estúdio focado na estilização de uma vida alternativo, Aqui você vai encontrar um espaço para esboçar as suas ideias e resgistrar em sua pele.</p>
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