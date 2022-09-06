import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserProvider";
import S from "./Header.module.css";
import { AiOutlineUser, AiOutlineUserAdd } from "react-icons/ai";


const Header = () => {
  const { usuario, usuarioLogado } = useContext(UserContext);
  return (
    <header className={S.header}>
      <h1>Moko Tatto Studio</h1>
      <nav className={S.nav}>
        <Link className={S.link} to="/">
          Home
        </Link>
        <Link className={S.link} to="/sobre">
          Sobre
        </Link>
        <Link className={S.link} to="/eventos/flashday">
          Eventos
        </Link>
        {usuarioLogado ? (
            <Link className={S.link} to="/usuario">
            <AiOutlineUser/> {usuario.nome} 
          </Link>
        ) : (
          <Link className={S.link} to="/Login">
            <AiOutlineUserAdd/>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
