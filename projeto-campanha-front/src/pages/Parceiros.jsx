import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ImagemP7 from '../assets/p7-predio.png';
import ImagemP72 from '../assets/p7-2.jpg';
import ImagemCECC from '../assets/cecc.jpg';
import ImagemCECC2 from '../assets/cecc-2.png';
import ImagemIPGC from '../assets/ipgc.png';
import ImagemIPGC2 from '../assets/ipgc-2.jpg';
import { useState } from 'react';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export default function Parceiros() {
    const [isInvisible, setIsInvisible] = useState('');

    function MakeDivInvisible(imageString) {
        setIsInvisible(imageString);
    }

    return (
        <>
            <h1 className='titulo-h1'>Nossos parceiros</h1>
            <Carousel
                responsive={responsive}
                autoPlay={true}
                swipeable={true}
                draggable={true}
                showDots={true}
                infinite={true}
                partialVisible={false}
                dotListClass="custom-dot-list-style"
            >
                <div className='slider' onClick={() => { MakeDivInvisible('p7') }}>
                    <img src={ImagemP7} alt="Prédio do P7" />
                </div>
                <div className='slider' onClick={() => { MakeDivInvisible('cecc') }}>
                    <img src={ImagemCECC} alt="Fachada do Centro Espírita" />
                </div>
                <div className='slider' onClick={() => { MakeDivInvisible('ipgc') }}>
                    <img src={ImagemIPGC} alt="Logo do IPGC" />
                </div>
            </Carousel>;
            <div className={isInvisible !== 'p7' ? 'parceiro-texto-invisivel' : 'parceiro-bloco'}>
                <h1>P7 Criativo</h1>
                <p>
                    Está em um prédio icônico de 25 andares, no centro de BH, projetado por Oscar Niemeyer na década de 50, 
                    inteiramente dedicado à criatividade, inovação e negócios. Nos ajuda cedendo um espaço para a tarefa de distribuição,
                    arrecadação de materiais, e divulgação.
                </p>
                <img src={ImagemP72} alt="Vista interna do P7" />
                <span>Sala interna do P7</span>
            </div>
            <div className={isInvisible !== 'cecc' ? 'parceiro-texto-invisivel' : 'parceiro-bloco'}>
                <h1>Casimiro Cunha</h1>
                <p>
                    O Centro Espírita Casimiro Cunha, fundado em 21 de novembro de 1949, é uma organização religiosa, com duração indeterminada,
                    sediada nesta capital à Rua Nova Ponte, 464, no Bairro Salgado Filho, Belo Horizonte - MG. Fornece para nós o pão, as mensagens,
                    o espaço de preparação da tarefa e todo suporte para desenvolvermos nossas atividades.
                </p>
                <img src={ImagemCECC2} alt="Vista interna do Casimiro Cunha" />
                <span>Reunião pública no Casimiro Cunha</span>
            </div>
            <div className={isInvisible !== 'ipgc' ? 'parceiro-texto-invisivel' : 'parceiro-bloco'}>
                <h1>IPGC</h1>
                <p>
                    O Instituto de Planejamento e Gestão de Cidades promove a eficiência da gestão pública no Brasil,  reconhecidos pela ONU como modelo 
                    de sucesso no planejamento e gestão de projetos de parcerias com o setor privado. Fornece para nós muitas arrecadações e doações de 
                    diversos materiais e itens.
                </p>
                <img src={ImagemIPGC2} alt="Prédio no centro de BH" />
                <span>Sede do IPGC, no P7, em BH</span>
            </div>
        </>
    );
}