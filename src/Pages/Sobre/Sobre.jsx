import { ImageList, ImageListItem } from "@mui/material";
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
      texto: "A maquina comanda a maquina",
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
  const photos = [
    {
      img: 'https://i.pinimg.com/564x/e5/c4/a6/e5c4a63d64910c95e73fda255feadd0d.jpg',
      title: 'Tatuagem de uma coruja pelo nosso artista Gui Cordeiro'
    },
    {
      img: 'https://i.pinimg.com/736x/05/90/95/05909553ca3c86c57ee7dc519a4670db--shades-of-black-grey-tattoo.jpg',
      title: 'Flores por Pedro Garrido'
    },
    {
      img: 'https://tatuagenshd.com/wp-content/uploads/2018/05/6aae74987cd528aca4f1848077bbce80.jpeg',
      title: 'Samurai por Edson Vieira'
    },
    {
      img: 'https://i.pinimg.com/originals/cb/60/6c/cb606c37362eaa90c00038195a30a78f.jpg',
      title: 'Dedos mecanicos por Igor Santos'
    },
    {
      img: 'https://i.pinimg.com/originals/f9/0e/11/f90e116861dc353bcc474cbf9880d93f.jpg',
      title: 'Braço Cyborg por Igor Santos'
    },
    {
      img: 'https://s3.tattoo2me.com/wp-content/uploads/2021/06/4-3-819x1024.jpg',
      title: 'Tatuagem em pontilhismo por Pedro Garrido'
    },
    {
      img: 'https://i.pinimg.com/736x/06/5e/e3/065ee3b02732cc939a11d2027d920e64.jpg',
      title: 'Polvo do tempo em pontilhismo por Pedro Garrido'
    },
    {
      img: 'https://i.pinimg.com/736x/32/a4/b6/32a4b6a657a1188692efbdc81bd5b539--tattoo-familia-biceps.jpg',
      title: 'Jackpot por Gui Cordeiro'
    },
    {
      img: 'https://s7h8z5n2.rocketcdn.me/wp-content/uploads/2020/09/tatuagem-old-school-para-mulheres-origem-e-modelos-para-escolher.jpg',
      title: 'Old school por Edson vieira'
    },
    {
      img: 'https://i.pinimg.com/originals/b2/91/7d/b2917df34edbc98337b975b994451866.jpg',
      title: 'Machine por Igor Santos'
    },
    {
      img: 'https://s3.tattoo2me.com/wp-content/uploads/2021/06/1-25.jpg',
      title: 'Old school por Edson vieira'
    },
    {
      img: 'https://cdn.blendup.art/wp-content/uploads/2019/07/significado_tatuagem_baralho_2-1.jpg',
      title: 'Todos os Azes por Gui Cordeiro'
    },
    
  ]
  const  trocaCard = ()=>{
    cards? setCards(false) : setCards(true)
  }
  return (
    <div>
      <div className={S.img}>
        <p>O Moko Tatto é um estúdio focado na estilização de uma vida alternativo, Aqui você vai encontrar um espaço para esboçar as suas ideias e resgistrar em sua pele.</p>
      </div>
      <h2 className={S.titulo}>Conheça um pouco mais do nosso trabalho</h2>
      <ImageList className={S.imagens} sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}>
        {photos.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=161&fit=crop&auto=format`}
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
        ))}
      </ImageList>
      <div className={S.frase}>
        <h3>“Paradoxalmente, embora possa parecer, não é menos verdade que a vida imita a arte muito mais do que a arte imita a vida”.</h3>
        <h4>- Oscar Wilde</h4>
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