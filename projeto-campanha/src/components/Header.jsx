import logoCampanha from '../assets/logo-campanha.png'

export default function Header() {
    return (
        <>
            <div id="header">
                <div className="header-logo">
                    <a href="/">
                        <img src={logoCampanha} alt="Logo da Campanha do Pãozinho"></img>
                    </a>
                </div>
                <nav className="header-menu">
                    <a href="/">
                        <p>Sobre nós</p>
                    </a>
                    <a href="/">
                        <p>Saiba como ajudar</p>
                    </a>
                    <a href="/"> 
                        <p>Parceiros</p>
                    </a>
                </nav>
                <div className="header-button">
                    <button className="button-red">Faça sua doação</button>
                </div>
            </div>
        </>
    );
}