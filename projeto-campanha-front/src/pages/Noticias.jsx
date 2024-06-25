import CardNoticias from "../components/CardNoticias";
import { TEXTO_NOTICIAS } from '../texto_noticias';

export default function Noticias() {
    return (
        <>
            <h1 className="titulo-h1">Notícias</h1>
            <div id="noticias">
                {
                    TEXTO_NOTICIAS.map((news) => (
                        <div className="noticias-grupo" key={news.id}>
                            <CardNoticias {...news} />
                        </div>
                    ))
                }
            </div>
        </>
    );
}