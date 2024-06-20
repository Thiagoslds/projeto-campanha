import { Link } from 'react-router-dom';

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
                        <Link className='rodape-cima-sites-link' to="/sobre">
                            Sobre nós
                        </Link>
                        <Link className='rodape-cima-sites-link' to="/ajude">
                            Ajude-nos
                        </Link>
                    </div>
                    <div>
                        <Link className='rodape-cima-sites-link' to="/parceiros">
                            Parceiros
                        </Link>
                        <Link className='rodape-cima-sites-link' to="/faleconosco">
                            Fale Conosco
                        </Link>
                    </div>
                </nav>
                <div className="rodape-cima-social">
                    <p>Conheça nosso instagram</p>
                    <a href="https://www.instagram.com/campanhadopaozinho/">
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