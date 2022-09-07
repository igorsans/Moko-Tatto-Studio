import React from 'react'
import S from './CardTattoUsuario.module.css'
const CardTattoUsuario = ({obj}) => {
  return (
    <div className={S.container}>
        <img src={obj.imagemUrl} alt="" />
        <p>Tatuador: {obj.nomeTatuador}</p>
        <p>R${obj.preco}</p>
    </div>
  )
}

export default CardTattoUsuario