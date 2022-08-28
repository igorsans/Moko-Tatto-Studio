import {Link} from 'react-router-dom'
import S from './Header.module.css'
const Header = () => {
  return (
    <header className={S.header}>
        <h1>Moko Tatto Studio</h1>
        <nav className={S.nav}>
            <Link className={S.link} to='/'>Home</Link>
            <Link className={S.link} to='/'>Sobre</Link>
            <Link className={S.link} to='/'>Eventos</Link>
            <Link className={S.link} to='/'>Cadastre-Se</Link>
        </nav>
    </header>
  )
}

export default Header