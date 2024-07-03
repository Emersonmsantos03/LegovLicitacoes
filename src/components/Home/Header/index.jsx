import './Header.css'
import logo from '../../../../public/images/legov-white-icon.png'

let Header = () => {
    return(
        <header className='header'>
            <div className='header-logo-container'>
                <img src={logo} alt='logo'/>
            </div>
            <div className='nav-container'>
                <ul className='nav'>
                    <li><a>Início</a></li>
                    <li><a>Sobre nós</a></li>
                    <li><a>Soluções</a></li>
                    <li><a>Parceiros</a></li>
                </ul>
            </div>
            <div className='header-button-container'>
                <button className='header-button'><a>Contato</a></button>
            </div>
            
        </header>

    )
}

export default Header