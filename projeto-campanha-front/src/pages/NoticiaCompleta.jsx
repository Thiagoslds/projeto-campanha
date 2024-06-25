import { useParams } from "react-router-dom";

export default function NoticiaCompleta() {
    const params = useParams();

    return (
        <div id="noticia-completa">
            <h1 className="titulo-h1">Notícias</h1>
            <p>{params.noticiaId}</p>
        </div>
    );
}