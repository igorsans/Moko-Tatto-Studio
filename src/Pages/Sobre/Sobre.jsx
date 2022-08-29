import { useState } from "react";
import CardDev from "../../Components/CardDev/CardDev"


const Sobre = () => {
  const [cards, setCards] = useState(false)
  const [tatto, setTatto] = useState([
    {
      img: "https://avatars.githubusercontent.com/u/102765157?v=4",
      nome: "Guilherme Cordeiro Da Mata",
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
  const  trocaCard = async()=>{
    if(cards){
      setCards(false)
      setTatto({...tatto, ["dev"]: false})
    }else{
      setCards(true)
      setTatto({...tatto, ["dev"]: true})
    }
    
    console.log(cards, tatto);
  }
  return (
    <div>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quis! Pariatur odio perspiciatis quae vero aliquam necessitatibus in provident. Fugiat saepe, nostrum cum quis alias est? Nulla accusamus nemo dolorem.</p>
      </div>
      <section>
          <h1 onClick={trocaCard} >Tattuadores</h1>
          {tatto.length > 0 ? tatto.map((item)=>
            <CardDev
            key={item.nome}
            img={item.img}
            nome={item.nome}
            linkedin={item.linkedin}
            github={item.github}
            texto={item.texto}
            dev={item.dev}
            />
          ) : 'não achei'}       
      </section>
    </div>
  )
}

export default Sobre