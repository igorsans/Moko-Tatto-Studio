import {Link} from 'react-router-dom'
import S from './Header.module.css'
const Header = () => {
  return (
    <header className={S.header}>
        <h1>Moko Tatto Studio</h1>
        <nav className={S.nav}>
            <Link className={S.link} to='/'>Home</Link>
            <Link className={S.link} to='/sobre'>Sobre</Link>
            <Link className={S.link} to='/eventos/flashday'>Eventos</Link>
            <Link className={S.link} to='/Login'>Cadastre-Se</Link>
        </nav>
    </header>
  )
}

export default Header