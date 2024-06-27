import { useParams, useLocation } from "react-router-dom";

export default function NoticiaCompleta() {
    const params = useParams();
    const location = useLocation();
    const { news } = location.state || {}; // Recuperar o objeto `news`

    return (
        <>
            <h1 className="titulo-h1">Notícias</h1>
            <div id="noticia-completa">
                <h1 className="noticia-completa-titulo">{news.title}</h1>
                <div class="line-container">
                    <div class="line"></div>
                    <p className="noticia-completa-data">{news.date}</p>
                    <div class="line"></div>
                </div>
                <img className="noticia-completa-imagem" src={news.image} alt="Imagem da notícia" />
                <p className="legenda-foto">Foto: Arquivo/Reprodução</p>
                {news.text.map((paragraph) => (
                    <p className="noticia-completa-texto">{paragraph}</p>
                ))}
            </div>
        </>
    );
}