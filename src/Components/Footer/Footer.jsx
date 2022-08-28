import S from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={S.footer}>
      <div className={S.info}>
        <div className={S.infoTel}>
          <h4>Ente em contato</h4>
          <p>E-mail: <a href="">MokoTatto</a></p>
          <h4>Telefone</h4>
          <p>(21) 99999-9999</p>
          <p>(21) 99999-9999</p>
        </div>
        <div className={S.infoRede}>
          <h4>Fique por dentro</h4>
          <p>Instagram: @MokoTatto</p>
          <p>Twitter: @MokoTatto</p>
          <p>Facebook: fb.com/Mokotto</p>
        </div>
        <div className={S.infoEnd}>
            <h4>Endereço</h4>
            <p>Rua da paçoca N: 38</p>
            <p>Cep: 11286400-07</p>
        </div>
      </div>
      <h1 className={S.titulo}>Moko Tatto Studio</h1>
    </footer>
  );
};

export default Footer;
