import { useEffect, useState } from 'react'
import CardTattoo from '../../Components/CardTattoo/CardTattoo';
import S from './Tatuagens.module.css'

const Tatuagens = () => {
    const [dados ,setDados]  = useState([])

    async function handleRequisicao() {
        const response = await fetch(`https://moko-tatto-api.herokuapp.com/tatuagens`);
        const json = await response.json()
        setDados(json.resultado)
        console.log(json.resultado[0]);
    }

    useEffect(()=>{
        handleRequisicao()
        console.log("Fiz a requisição");
    },[])

    return (
        <section>
            <div>Como funciona</div>
            <div className={S.cardsContainer}>
                {dados ? dados.map((item) => <CardTattoo
                    key={item.imagemUrl} 
                    imagemUrl={item.imagemUrl}
                    nomeTatuador={item.nomeTatuador}
                    preco={item.preco}
                /> ): 'Carregando'}
            </div>
        </section>
    )
}

export default Tatuagens