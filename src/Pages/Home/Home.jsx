import { useState } from 'react'
import CardNews from '../../Components/CardNews/CardNews'
import S from './Home.module.css'


const Home = () => {
  const [news, setNews] = useState([
    {
      titulo: 'Saímos no G1',
      texto: 'Eleito o estudio mais famoso do bairro de são paulo, Moko Tatto tem feito bastante pessoas entrarem na cultura',
      imgSrc: 'https://www.portaldosjornalistas.com.br/wp-content/uploads/2020/01/Premiados.jpg',
      imgAlt: 'Troféus',
      style: S.cardNewsEven
    }
  ])
  return (
    <div className={S.container}>
      <div className={S.img} >

      </div>
      <section className={S.section}>
        <div className={S.subT}>
          <h2>News</h2>
        </div>
        <div>
          {news.length > 0 ? news.map((item) => <CardNews
            titulo={item.titulo}
            texto={item.texto}
            imgSrc={item.imgSrc}
            imgAlt={item.imgAlt}
            container={item.style}

          />) : ''}
        </div>
      </section>
    </div>

  )
}

export default Home