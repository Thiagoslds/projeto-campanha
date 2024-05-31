import logoCampanha from '../assets/logo-campanha.png'
import letraCampanha from '../assets/letra-campanha.png'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <div id="header">
                <div className="header-image">
                    <Link to="/">
                        <img className="header-image-logo" src={logoCampanha} alt="Logo da Campanha do Pãozinho"></img>
                        <img className="header-image-letter" src={letraCampanha} alt="Letra da Campanha do Pãozinho"></img>
                    </Link>
                </div>
                
                <nav className="header-menu">
                    <Link to="/sobre">
                        Sobre nós
                    </Link>
                    <Link to="/">
                        Saiba como ajudar
                    </Link>
                    <Link to="/">
                        Parceiros
                    </Link>
                </nav>
            </div>
        </>
    );
}