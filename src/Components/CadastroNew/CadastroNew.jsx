import React from 'react'
import { TextField, Button } from "@mui/material"
import S from './CadastroNew.module.css'

const CadastroNew = ({ data, setData, titulo, cadastrar, text}) => {
  return (
    <div className={S.container}>
        <h1>{titulo}</h1>
        <form className={S.form}>
            <TextField id="Standard-basic" label="url" variant="standard" onChange={({ target }) => setData(target, "urlImagem")} value={data.urlImagem} />
            <TextField id="standard-basic" label="titulo" variant="standard" onChange={({ target }) => setData(target, 'titulo')} value={data.titulo} />
            <TextField id="standard-basic" label="descricao" variant="standard" onChange={({ target }) => setData(target, 'descricao')} value={data.descricao} />
            <Button onClick={cadastrar} variant="outlined">{text}</Button>
        </form>
    </div>
  )
}

export default CadastroNew