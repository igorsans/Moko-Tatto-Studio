import { useEffect, useState } from 'react'
import CardTattoo from '../../Components/CardTattoo/CardTattoo';
import S from './Tatuagens.module.css'

const Tatuagens = () => {
    const [dados, setDados] = useState([])

    async function handleRequisicao() {
        const response = await fetch(`https://moko-tatto-api.herokuapp.com/tatuagens`);
        const json = await response.json()
        setDados(json.resultado)
        console.log(json.resultado[0]);
    }

    useEffect(() => {
        handleRequisicao()
        console.log("Fiz a requisição");
    }, [])

    return (
        <section>
            <div className={S.container}>
                <div>
                    <h2>Como Funciona?</h2>
                </div>
                <div className={S.info}>
                    <div className={S.texto}>
                        <h3>01.</h3>
                        <h4>Escolha sua Tatuagem</h4>
                        <p>Temos diversos desenhos de estilos variados em nosso catálogo para o Evento</p>
                    </div>
                    <div className={S.texto}>
                        <h3>02.</h3>
                        <h4>Conheça o Artista</h4>
                        <p>Acesse o perfil do Artista e conheça mais sobre a sua história e seus trabalhos</p>
                    </div>
                    <div className={S.texto}>
                        <h3>03.</h3>
                        <h4>Reserve seu horario</h4>
                        <p>Escolha o horario ao qual realizará sua tatuagem</p>
                    </div>
                    <div className={S.texto}>
                        <h3>04.</h3>
                        <h4>Chegou a hora!</h4>
                        <p>Chegue com meia hora de antecedencia no Evento e não esqueça de levar seu telefone</p>
                    </div>
                </div>
                <div></div>

            </div>
            <div className={S.cardsContainer}>
                {dados ? dados.map((item) => <CardTattoo
                    key={item.imagemUrl}
                    imagemUrl={item.imagemUrl}
                    nomeTatuador={item.nomeTatuador}
                    preco={item.preco}
                />) : 'Carregando'}
            </div>
        </section>
    )
}

export default Tatuagens