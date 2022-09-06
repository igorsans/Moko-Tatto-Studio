import React from 'react'
import { AiFillTool } from 'react-icons/ai'
import S from './LabelNew.module.css'
const LabelNew = () => {
    return (
        <div className={S.container}>
            <p>ID</p>
            <p>URL</p>
            <p>TITULO</p>
            <p>DESCRICAO</p>
            <p><AiFillTool/></p>
        </div>
      )
}

export default LabelNew