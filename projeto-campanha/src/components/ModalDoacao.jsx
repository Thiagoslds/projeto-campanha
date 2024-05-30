import { forwardRef } from "react";
import pix20 from "../assets/pix-20.jpeg";
import pix50 from "../assets/pix-50.jpeg";
import pix100 from "../assets/pix-100.jpeg";
import pix200 from "../assets/pix-200.jpeg";
import pix0 from "../assets/pix-0.jpeg";


const modalDoacao = forwardRef(
    function ModalDoacao({ valuePix }, ref) {
        let valuePixDefault = null;
        let linePixPaste = '';

        switch (valuePix) {
            case 20:
                valuePixDefault = pix20;
                linePixPaste = "00020126490014br.gov.bcb.pix0127campanha.paozinho@gmail.com520400005303986540520.005802BR5925Vanessa Souza Lopes Silve6009Sao Paulo62070503***6304FAE7";
                break;
            case 50:
                valuePixDefault = pix50;
                linePixPaste = "00020126490014br.gov.bcb.pix0127campanha.paozinho@gmail.com520400005303986540550.005802BR5925Vanessa Souza Lopes Silve6009Sao Paulo62070503***63045E22";
                break;
            case 100:
                valuePixDefault = pix100;
                linePixPaste = "00020126490014br.gov.bcb.pix0127campanha.paozinho@gmail.com5204000053039865406100.005802BR5925Vanessa Souza Lopes Silve6009Sao Paulo62070503***63048EF9";
                break;
            case 200:
                valuePixDefault = pix200;
                linePixPaste = "00020126490014br.gov.bcb.pix0127campanha.paozinho@gmail.com5204000053039865406200.005802BR5925Vanessa Souza Lopes Silve6009Sao Paulo62070503***63042ED2";
                break;
            default:
                valuePixDefault = pix0;
                linePixPaste = "00020126490014br.gov.bcb.pix0127campanha.paozinho@gmail.com5204000053039865802BR5925Vanessa Souza Lopes Silve6009Sao Paulo62070503***63046017";
                break;
        }

        function copyText(valueToCopy) {
            navigator.clipboard.writeText(valueToCopy);
        }

        return (
            <dialog className="modal-doacao" ref={ref}>
                <h2>Faz o Pix!</h2>
                <p>É só apontar a câmera do seu celular para ler o QR Code!</p>
                <img src={valuePixDefault} alt="QR-Code de pix" />
                <p>Ou, se preferir, clique e copie a chave PIX abaixo:</p>
                <p className="modal-doacao-line" onClick={() => { copyText(linePixPaste) }}>{linePixPaste}</p>
                <form method="dialog">
                    <button className="button-red">Fechar</button>
                </form>
            </dialog>
        );
    }
);

export default modalDoacao;