import React from 'react'
import { AiFillTool } from 'react-icons/ai'
import S from './Label.module.css'
const LabelCliente = () => {
  return (
    <div className={S.container}>
        <p>ID</p>
        <p>NOME</p>
        <p>EMAIL</p>
        <p>DATA DE NASCIMENTO</p>
        <p><AiFillTool/></p>
    </div>
  )
}

export default LabelCliente