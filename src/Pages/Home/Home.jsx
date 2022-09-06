import { useEffect, useState } from "react";
import CardNews from "../../Components/CardNews/CardNews";
import { getApi } from "../../Services/api";
import S from "./Home.module.css";

const Home = () => {
  const [news,setNews] =useState([])
  const [pageNews, setPageNews] = useState(3)
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
      </section>
    </div>
  );
};

export default Home;
