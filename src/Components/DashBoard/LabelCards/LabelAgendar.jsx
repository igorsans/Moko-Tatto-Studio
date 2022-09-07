import React from 'react'
import { AiFillTool } from 'react-icons/ai'
import S from './Label.module.css'
const LabelAgendar = () => {
  return (
    <div className={S.container}>
        <p>ID</p>
        <p>ID_CLIENTE</p>
        <p>TATTO_ID</p>
        <p>HORARIO</p>
        <p><AiFillTool/></p>
    </div>
  )
}

export default LabelAgendar