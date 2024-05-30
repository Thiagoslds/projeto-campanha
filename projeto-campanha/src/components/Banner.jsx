import { useRef } from "react";
import ModalDoacao from "./ModalDoacao";

export default function Banner() {
    const dialogModal = useRef();

    function handleClick() {
        dialogModal.current.showModal();
    }
    
    return (
        <>
            <ModalDoacao ref={dialogModal} valuePix={0} />
            <div id="banner">
                <h1>A CAMPANHA PRECISA DE VOCÊ</h1>
                <h3>Ajude nossa tarefa</h3>
                <h4>Pix: campanha.paozinho@gmail.com</h4>
                <button onClick={handleClick} className="button-red">Doar Agora</button>
            </div>
        </>
    );
}