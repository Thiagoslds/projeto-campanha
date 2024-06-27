import { Link } from 'react-router-dom';

export default function CardNoticias(news) {
    return (
        <div id="card-noticias">
            <img src={news.image} alt="Imagem da notícia" />
            <h2 className="card-noticias-titulo">{news.title}</h2>
            <p className="card-noticias-texto">{news?.text[0]}</p>
            <Link className='link-router' to={`/noticias/${news.id}`} state={{news}}><button className="button-red">Leia mais</button></Link>
        </div>
    );
}