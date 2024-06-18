export default function Rodape() {
    return (
        <div id="rodape">
            <div id="rodape-cima">
                <div className="rodape-cima-local">
                    <h3>P7 Criativo</h3>
                    <p>Rua Rio de Janeiro, 471 - Centro - BH/MG</p>
                </div>
                <nav className="rodape-cima-sites">
                    <div>
                        <a href="/">
                            <p>Sobre nós</p>
                        </a>
                        <a href="/">
                            <p>Saiba como ajudar</p>
                        </a>
                    </div>
                    <div>
                        <a href="/">
                            <p>Parceiros</p>
                        </a>
                        <a href="/">
                            <p>Contato</p>
                        </a>
                    </div>
                </nav>
                <div className="rodape-cima-social">
                    <p>Conheça nosso instagram</p>
                    <a href="">
                        <img src="instagram.png" alt="Instagram" />
                    </a>
                </div>
            </div>
            <div id="rodape-baixo">
                <h4>
                    CENTRO ESPÍRITA CASIMIRO CUNHA
                </h4>
                <p>
                    Rua Nova Ponte, 464 - Bairro Salgado filho - Belo Horizonte - MG
                    Instituição Reconhecida de Utilidade Pública Pela Lei  Municipal
                    Nº 1428 e Lei Estadual Nº 6933
                </p>
            </div>
        </div>
    );
}