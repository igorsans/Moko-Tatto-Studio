import { TextField, Button } from "@mui/material"
import S from './CadastroForm.module.css'

const CadastroForm = ({ data, setData }) => {
    return (
        <div className={S.container}>
          <h1>Cadastre-se</h1>
          <form className={S.form}>
            <TextField id="standard-basic" label="Nome" variant="standard" onChange={({ target }) => setData(target, 'name')} value={data.name} />
            <TextField id="standard-basic" label="Sobrenome" variant="standard" onChange={({ target }) => setData(target, 'sobrenome')} value={data.sobrenome} />
            <TextField id="standard-basic" label="Telefone" variant="standard" onChange={({ target }) => setData(target, 'telefone')} value={data.telefone} />
            <TextField id="outlined-basic" placeholder="Ex: 01/01/2001" label="Data de Nascimento" variant="standard" onChange={({ target }) => setData(target, 'dataNascimento')} value={data.dataNascimento} />
            <TextField id="standard-basic" label="Email" variant="standard" onChange={({ target }) => setData(target, 'email')} value={data.email} />
            <TextField id="standard-basic" label="Senha" variant="standard" onChange={({ target }) => setData(target, 'senha')} value={data.senha} />
            <Button variant="outlined">Cadastrar</Button>
          </form>
        </div>
    )
}

export default CadastroForm