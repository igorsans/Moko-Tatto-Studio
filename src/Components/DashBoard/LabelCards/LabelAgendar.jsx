import React from 'react'
import { AiFillTool } from 'react-icons/ai'
import S from './LabelAgendar.module.css'
const LabelAgendar = () => {
  return (
    <div className={S.container}>
        <p>ID</p>
        <p>NOME</p>
        <p>SOBRENOME</p>
        <p>EMAIL</p>
        <p>AGENDOU PARA</p>
        <p><AiFillTool/></p>
    </div>
  )
}

export default LabelAgendar