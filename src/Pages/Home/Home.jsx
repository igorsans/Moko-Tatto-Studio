import { Link } from "react-router-dom";
import CardNews from "../../Components/CardNews/CardNews";
import S from "./Home.module.css";

const Home = () => {
  const news =[
    {
      titulo: "Saímos no G1",
      texto:
        "Eleito o estudio mais famoso do bairro de são paulo, Moko Tatto tem feito bastante pessoas entrarem na cultura",
      imgSrc:
        "https://www.portaldosjornalistas.com.br/wp-content/uploads/2020/01/Premiados.jpg",
      imgAlt: "Troféus",
      imgStyle: S.imgStyle,
      divStyle: S.divStyle,
      textoStyle: S.textoStyle
    },
    {
      titulo: "Indique um amigo",
      texto:
        "Eleito o estudio mais famoso do bairro de são paulo, Moko Tatto tem feito bastante pessoas entrarem na cultura",
      imgSrc:
        "https://pbs.twimg.com/media/Bv6aCtHIIAA2PsS.jpg",
      imgAlt: "Troféus",
      imgStyle: S.imgStyle,
      divStyle: S.divBgUm,
      textoStyle: S.textoStyle
    },
    {
      titulo: "Indique um amigo",
      texto:
        "Eleito o estudio mais famoso do bairro de são paulo, Moko Tatto tem feito bastante pessoas entrarem na cultura",
      imgSrc:
        "https://i.pinimg.com/originals/06/b4/91/06b491c36ab7485f40eed939d6729f70.jpg",
      imgAlt: "Troféus",
      imgStyle: S.imgStyle,
      divStyle: S.divBgDois,
      textoStyle: S.textoStyle
    },
  ];
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
                key={item.titulo}
                titulo={item.titulo}
                texto={item.texto}
                imgSrc={item.imgSrc}
                imgAlt={item.imgAlt}
                imgStyle={item.imgStyle}
                divStyle={item.divStyle}
                textoStyle={item.textoStyle}
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
