import { Link } from 'react-router-dom';

export default function CardNoticias(news) {
    return (
        <div id="card-noticias">
            <img src={news.image} alt="Imagem da notícia" />
            <h2 className="card-noticias-titulo">{news.title}</h2>
            <p className="card-noticias-texto">{news.text}</p>
            <button className="button-red"><Link className='link-router' to={`/noticias/${news.id}`}>Leia mais</Link></button>
        </div>
    );
}