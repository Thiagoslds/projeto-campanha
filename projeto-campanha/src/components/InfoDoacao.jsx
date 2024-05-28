export default function InfoDoacao() {
    return (
        <div id="area-doacao">
            <div className="area-doacao-info">
                <h1>Escolha um valor e faça sua doação</h1>
                <h3>Nós precisamos de doações para comprar os pães, o leite, cobertores para época de frio, produção de panfletos e muito mais.</h3>
            </div>
            <div className="area-doacao-blocos">
                <div>
                    <span>R$ 20,00</span>
                    <span>R$ 50,00</span>
                </div>
                <div>
                    <span>R$ 100,00</span>
                    <span>R$ 200,00</span>
                </div>
            </div>
        </div>
    );
}