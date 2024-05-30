import logoCampanha from '../assets/logo-campanha.png'
import letraCampanha from '../assets/letra-campanha.png'

export default function Header() {
    return (
        <>
            <div id="header">
                <div className="header-image">
                    <a href="/">
                        <img className="header-image-logo" src={logoCampanha} alt="Logo da Campanha do Pãozinho"></img>
                        <img className="header-image-letter" src={letraCampanha} alt="Letra da Campanha do Pãozinho"></img>
                    </a>
                </div>
                
                <nav className="header-menu">
                    <a href="/">
                        Sobre nós
                    </a>
                    <a href="/">
                        Saiba como ajudar
                    </a>
                    <a href="/">
                        Parceiros
                    </a>
                </nav>
            </div>
        </>
    );
}