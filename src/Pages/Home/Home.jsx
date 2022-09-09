import { useEffect, useState } from "react";
import CardNews from "../../Components/CardNews/CardNews";
import { getApi } from "../../Services/api";
import S from "./Home.module.css";
import Carousel from 'react-material-ui-carousel'

const Home = () => {
  const [news,setNews] =useState([])
  const [pageNews, setPageNews] = useState(3)
  const photo = [
    {
      img: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb'
    },
    {
      img: 'https://innersport.com.br/wp-content/uploads/2017/06/studio-tatuagem-taubate.jpg'
    },
    {
      img: 'https://super.abril.com.br/wp-content/uploads/2000/11/a-tatuagem-existe-desde-que-o-mundo-ecc81-mundo.png'
    },
    {
      img: 'https://images.squarespace-cdn.com/content/v1/5dcb051e295710024a34c9b8/1576184424840-H1PAO18SP7A6T5SLMXA7/LBTS+Fingers+Header.jpg'
    }
    
  ]
  const maisNews = () => {
    setPageNews(pageNews + 3)
  }
  async function requisicao(){
    setNews(await getApi("/noticias"))
  }
  useEffect(()=>{
    requisicao()
  }, [])
  return (
    <div className={S.container}>
      <div className={S.img}></div>
      <section className={S.section}>
        <div className={S.subT}>
          <h2>News</h2>
        </div>
        <div className={S.cards}>
            {news.length > 0 ? news.map((item, index) => index < pageNews ?
              <CardNews
                key={item.id}
                titulo={item.titulo}
                texto={item.descricao}
                imgSrc={item.urlImagem}
                imgStyle={S.imgStyle}
                textoStyle={S.textoStyle}
              />
            : '' ) : ''}
        </div>
        <div className={S.subT}>
          <h2>
            <button onClick={maisNews} className={S.link}> Ver Mais</button>
          </h2>
        </div>
        <Carousel className={S.carousel}>
             {photo.map((item, i) => <img className={S.imgCarousel} key={i} src={item.img} />)} 
        </Carousel>
      </section>
    </div>
  );
};

export default Home;
