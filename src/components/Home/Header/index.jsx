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
                    <li><a href="http://localhost:5173/">Início</a></li>
                    <li><a href='#about'>Sobre nós</a></li>
                    <li><a href='#soluctions'>Soluções</a></li>
                    <li><a href='#partners'>Parceiros</a></li>
                </ul>
            </div>
            <div className='header-button-container'>
                <button className='header-button'><a href='#cont'>Contato</a></button>
            </div>
            
        </header>

    )
}

export default Header