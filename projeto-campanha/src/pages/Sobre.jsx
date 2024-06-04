import Imagem1 from '../assets/imagem-campanha-grupo3.jpeg'
import Imagem2007 from '../assets/antiga-2007.jpg'
import Imagem2022 from '../assets/natal-camp-2022.jpeg'

export default function Sobre() {
    return (
        <>
            <div id="pagina-sobre">
                <h1 className='titulo-h1'>Uma história de amparo</h1>
                <div className="pagina-sobre-bloco">
                    <div className="pagina-sobre-bloco-legenda">
                        <img src={Imagem2007} alt="Imagem dos tarefeiros da campanha." />
                        <p>Música antes do início da tarefa, em 2007.</p>
                    </div>
                    <p>A campanha do pãozinho tem uma história de 27 anos, iniciando em junho de 1997 a partir de uma conversa entre cinco amigos.
                        Eles propuseram a realização da campanha aos domingos à noite, pois menos grupos realizavam a atividade nesse horário e a pessoas passavam maior necessidade.</p>
                </div>
                <div className="pagina-sobre-bloco">

                    <p>Atualmente, somos uma equipe voluntária que atua no centro de Belo Horizonte, servindo mais de 500 pães, 60 litros de leite, 20 litros de água e mensagens renovadoras,
                        todos os domingos, além de eventualmente roupas, cobertores, itens de higiene, entre outros, sempre com muito amor e bom ânimo.
                    </p>
                    <div className="pagina-sobre-bloco-legenda">
                        <img src={Imagem2022} alt="Imagem dos tarefeiros da campanha." />
                        <p>Campanha de Natal de 2022, na Rua São Paulo.</p>
                    </div>
                </div>
                <div className="pagina-sobre-bloco">
                    <div className="pagina-sobre-bloco-legenda">
                        <img src={Imagem1} alt="Imagem dos tarefeiros da campanha." />
                        <p>Tarefeiros com a nova camisa, no espaço do P7 Criativo, em 2024.</p>
                    </div>
                    <p>Somos filiados ao Centro Espírita Casimiro Cunha, onde ocorre o preparo, e distribuímos no edifício do nosso parceiro P7 Criativo, localizados na Rua Rio de Janeiro,
                        número 471, no centro de Belo Horizonte. Nossa ação ocorre regularmente aos domingos, a partir das 17h45.
                        Participe você também!</p>
                </div>
            </div>
        </>
    );
}