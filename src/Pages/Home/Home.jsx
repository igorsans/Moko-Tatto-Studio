import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardNews from "../../Components/CardNews/CardNews";
import { getNoticias } from "../../Services/api";
import S from "./Home.module.css";

const Home = () => {
  const [news,setNews] =useState([])

  async function requisicao(){
    setNews(await getNoticias())
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
            {news.length > 0 ? news.map((item) =>
              <CardNews
                key={item.id}
                titulo={item.titulo}
                texto={item.descricao}
                imgSrc={item.urlImagem}
                imgStyle={S.imgStyle}
              />
            ) : ''}
        </div>
        <div className={S.subT}>
          <h2>
            <Link className={S.link} to='/sobre'> Ver Mais</Link>
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Home;
