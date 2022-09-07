import { ImExit } from "react-icons/im";
import { Link } from "react-router-dom";
import S from './HeaderDash.module.css'
const HeaderDash = () => {
  return (
    <header className={S.container}>
        <div>
            <Link to="/"> <ImExit/> </Link>
        </div>
        <nav className={S.nav}>
            <Link to="/dashboard/Agendamentos">Agendamentos</Link>
            <Link to="/dashboard/Clientes">Clientes</Link>
            <Link to="/">News</Link>
            <Link to="/">Tatuagens</Link>
        </nav>
    </header>
  )
}

export default HeaderDash