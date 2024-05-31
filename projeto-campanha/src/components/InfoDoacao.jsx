import { useRef, useState } from "react";
import ModalDoacao from "./ModalDoacao";

export default function InfoDoacao() {
    const dialogModal = useRef();
    const [valuePix, setValuePix] = useState(0);

    function handleClick(valuePixInHandle) {
        setValuePix(valuePixInHandle);
        dialogModal.current.showModal();
    }

    return (
        <>
            <ModalDoacao ref={dialogModal} valuePix={valuePix}/>
            <div id="area-doacao">
                <div className="area-doacao-info">
                    <h1>Escolha um valor e faça sua doação</h1>
                    <h3>Nós precisamos de doações para comprar os pães, o leite, cobertores para época de frio, produção de mensagens e muito mais.</h3>
                </div>
                <div className="area-doacao-blocos">
                    <div>
                        <span onClick={() => { handleClick(20) }}>R$ 20,00</span>
                        <span onClick={() => { handleClick(50) }}>R$ 50,00</span>
                    </div>
                    <div>
                        <span onClick={() => { handleClick(100) }}>R$ 100,00</span>
                        <span onClick={() => { handleClick(200) }}>R$ 200,00</span>
                    </div>
                </div>
            </div>
        </>
    );
}