import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserProvider'

const Usuario = () => {
    const {usuario} = useContext(UserContext)
  return (
    <div>
        <br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br />
        <h1>hello world</h1>
        <h2>Olá {usuario.nome} {usuario.sobrenome} seja bem vindo ao painel do usuario</h2>
        
    </div>
  )
}

export default Usuario