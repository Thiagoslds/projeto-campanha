import Imagem1 from '../assets/imagem-campanha-grupo1.jpeg'

export default function Sobre() {
    return (
        <>
            <div id="pagina-sobre">
                <h1>Uma história de amparo</h1>
                <div className="pagina-sobre-bloco">
                    <img src={Imagem1} alt="Imagem dos tarefeiros da campanha." />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores iure rem, possimus porro vero illo,
                        quidem consequatur sunt esse nam laudantium quod? Quaerat nisi fuga exercitationem praesentium eligendi minima consequuntur.</p>
                </div>
                <div className="pagina-sobre-bloco">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores iure rem, possimus porro vero illo,
                        quidem consequatur sunt esse nam laudantium quod? Quaerat nisi fuga exercitationem praesentium eligendi minima consequuntur.</p>
                    <img src={Imagem1} alt="Imagem dos tarefeiros da campanha." />
                </div>
                <div className="pagina-sobre-bloco">
                    <img src={Imagem1} alt="Imagem dos tarefeiros da campanha." />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores iure rem, possimus porro vero illo,
                        quidem consequatur sunt esse nam laudantium quod? Quaerat nisi fuga exercitationem praesentium eligendi minima consequuntur.</p>
                </div>
            </div>
        </>
    );
}