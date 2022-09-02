import React from 'react'
import S from './Label.module.css'
const LabelCliente = () => {
  return (
    <div className={S.container}>
        <p>ID</p>
        <p>NOME</p>
        <p>EMAIL</p>
        <p>DATA DE NASCIMENTO</p>
    </div>
  )
}

export default LabelCliente