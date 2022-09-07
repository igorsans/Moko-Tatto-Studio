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
            <Link to="/dashboard/News">News</Link>
            <Link to="/dashboard/Tatuagens">Tatuagens</Link>
        </nav>
    </header>
  )
}

export default HeaderDash