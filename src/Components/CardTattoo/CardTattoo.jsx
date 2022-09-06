import React from 'react'
import S from './CardTattoo.module.css'

const CardTattoo = ({disponivel, imagemUrl, nomeTatuador, preco, onclick}) => {
  return (
    <div className={S.card}>
        <div>
            <img className={S.img} src={imagemUrl} alt="" />
        </div>
        <div className={S.texto}>
            <p>Preço: R${preco}</p>
            <p>Tatuador: {nomeTatuador}</p>
            {disponivel==0 ? <div className={S.off}>
              <p>Indisponivel</p>
            </div>: <button onClick={onclick} className={S.botao}>Comprar</button> }
        </div>
    </div>
  )
}

export default CardTattoo