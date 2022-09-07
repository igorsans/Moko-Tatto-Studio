import React from 'react'
import { AiFillTool } from 'react-icons/ai'
import S from './LabelTatuagens.module.css'
const LabelTatuagens = () => {
  return (
    <div className={S.container}>
        <p>ID</p>
        <p>NOME</p>
        <p>PREÇO</p>
        <p><abbr title="0: indisponivel, 1: disponivel">DISPONIVEL</abbr></p>
        <p>URL IMAGEM</p>
        <p>ID COMPRADOR</p>
        <p><AiFillTool/></p>
    </div>
  )
}

export default LabelTatuagens;