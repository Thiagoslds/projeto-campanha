import { useState } from "react";

const apiUrl = import.meta.env.VITE_URL_LOCAL;

export default function FaleConosco() {
    const [isSuccess, setIsSuccess] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        sendData(data);
    }

    async function sendData(userData) {
        const response = await fetch(`${apiUrl}/user-data`, {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        response.status === 200 ? setIsSuccess(true) : setIsSuccess(false);
    }

    return (
        <>
            <h1 className="titulo-h1">Fale Conosco</h1>
            <form id="form-contato" onSubmit={handleSubmit}>
                <div className="form-contato-dados">
                    <div className="form-contato-campo">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" name="email" />
                    </div>

                    <div className="form-contato-campo">
                        <label htmlFor="name">Nome</label>
                        <input type="text" id="name" name="name" />
                    </div>
                </div>


                <div className="form-contato-mensagem">
                    <label htmlFor="text">Escreva seu comentário:</label>
                    <textarea id="text" name="text" rows="5" cols="33">
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