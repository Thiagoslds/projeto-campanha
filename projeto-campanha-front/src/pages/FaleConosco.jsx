import { useState } from "react";
import emailjs from '@emailjs/browser';

const serviceID = import.meta.env.VITE_SERVICE_ID;
const templateID = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_USER_ID;


export default function FaleConosco() {
    const [isSuccess, setIsSuccess] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();

        emailjs.sendForm(
            serviceID,
            templateID,
            event.target,
            {
                publicKey: publicKey
            }
        )
            .then((result) => {
                setIsSuccess(true);
            }, (error) => {
                console.log("Erro de envio: " + error.text);
            });
    }

    return (
        <>
            <h1 className="titulo-h1">Fale Conosco</h1>
            <form id="form-contato" onSubmit={handleSubmit}>
                <div className="form-contato-dados">
                    <div className="form-contato-campo">
                        <label htmlFor="from_email">Email</label>
                        <input id="from_email" type="email" name="from_email" />
                    </div>

                    <div className="form-contato-campo">
                        <label htmlFor="from_name">Nome</label>
                        <input type="text" id="from_name" name="from_name" />
                    </div>
                </div>


                <div className="form-contato-mensagem">
                    <label htmlFor="message">Escreva seu comentário:</label>
                    <textarea id="message" name="message" rows="5" cols="33">
                    </textarea>
                </div>

                <p className="form-contato-botao">
                    <button type="submit" className="button-form">
                        Enviar
                    </button>
                </p>

                {isSuccess && <p>Mensagem enviada com sucesso!</p>}
            </form>
        </>
    );
}