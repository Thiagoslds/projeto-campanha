import Imagem1 from '../assets/ia-doacao.jpg'
import Imagem2 from '../assets/imagem-campanha-grupo2.jpeg'
import Imagem3 from '../assets/ia-pao.jpg'
import Imagem4 from '../assets/ia-leite.jpg'
import Imagem5 from '../assets/img-insta.jpg'
import Imagem6 from '../assets/ia-convite.jpg'

export default function ComoAjudar() {
    return (
        <div id="pagina-ajudar">
            <h1 className="titulo-h1">Saiba como ajudar</h1>
            <div className="pagina-ajudar-bloco-linha">
                <div className="pagina-ajudar-bloco">
                    <img src={Imagem1} alt="Imagem circular ilustrativa" />
                    <div className="pagina-ajudar-bloco-texto">
                        <h3>Ajude financeiramente</h3>
                        <p>
                            Contribua com um pix para podermos comprar os materiais, seja o pão, o leite, achocolotado, etc. 
                            Nosso pix é campanha.paozinho@gmail.com ou <b>clique aqui</b>.
                        </p>
                    </div>
                </div>
                <div className="pagina-ajudar-bloco">
                    <img src={Imagem2} alt="Imagem circular ilustrativa" />
                    <div className="pagina-ajudar-bloco-texto">
                        <h3>Seja um voluntário</h3>
                        <p>
                            Venha e participe da nossa distribuição como tarefeiro! Basta visitar o prédio do p7 Criativo, 
                            na rua Rio de Janeiro, 471, todos os domingos a partir das 17h45.
                        </p>
                    </div>
                </div>
            </div>
            <div className="pagina-ajudar-bloco-linha">
                <div className="pagina-ajudar-bloco">
                    <img src={Imagem3} alt="Imagem circular ilustrativa" />
                    <div className="pagina-ajudar-bloco-texto">
                        <h3>Seja uma padaria parceira</h3>
                        <p>
                            Caso tenha comércio de padarias ou fabricação de pães e queira doar, entre em contato com a gente! 
                            Distribuímos mais de 500 pães a cada fim de semana e precisamos de doações.
                        </p>
                    </div>
                </div>
                <div className="pagina-ajudar-bloco">
                    <img src={Imagem4} alt="Imagem circular ilustrativa" />
                    <div className="pagina-ajudar-bloco-texto">
                        <h3>Doe leite</h3>
                        <p>
                            Faça doações de caixas de leite! Distribuímos mais de 60 litros de leite com achocolatado 
                            todos os domingos e sempre precisamos de doações para manter a distribuição.
                        </p>
                    </div>
                </div>
            </div>
            <div className="pagina-ajudar-bloco-linha">
                <div className="pagina-ajudar-bloco">
                    <img src={Imagem5} alt="Imagem circular ilustrativa" />
                    <div className="pagina-ajudar-bloco-texto">
                        <h3>Siga-nos no Instagram</h3>
                        <p>
                            Caso você tenha Instagram, siga a gente por lá e saiba das novidades, das campanhas especiais 
                            e das doações que estaremos precisando no momento. <b>Siga a gente!</b> 
                        </p>
                    </div>
                </div>
                <div className="pagina-ajudar-bloco">
                    <img src={Imagem6} alt="Imagem circular ilustrativa" />
                    <div className="pagina-ajudar-bloco-texto">
                        <h3>Divulgue nosso trabalho</h3>
                        <p>
                            Compartilhe com seus parentes e amigos nossa tarefa! Assim mais pessoas poderão nos ajudar 
                            e fortalecer o trabalho essencial para os irmãos vulneráveis das ruas de BH.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}