import logoCampanha from '../assets/logo-campanha.png'

export default function Header() {
    return (
        <>
            <div id="header">
                <div class="header-logo">
                    <a href="/">
                        <img src={logoCampanha} alt="Logo da Campanha do Pãozinho"></img>
                    </a>
                </div>
                <nav class="header-menu">
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
                <div class="header-button">
                    <button>Faça sua doação</button>
                </div>
            </div>
        </>
    );
}