import { TextField, Button } from "@mui/material"
import S from './AgendamentoForm.module.css'

const AgendamentoForm = ({ data, setData, agendar, text, titulo }) => {
    return (
        <div className={S.container}>
          <h1>{titulo}</h1>
          <form className={S.form}>
            <TextField id="standard-basic" label="Nome" variant="standard" onChange={({ target }) => setData(target, 'nome')} value={data.nome} />
            <TextField id="standard-basic" label="Sobrenome" variant="standard" onChange={({ target }) => setData(target, 'sobrenome')} value={data.sobrenome} />
            <TextField id="standard-basic" label="Email" variant="standard" onChange={({ target }) => setData(target, 'email')} value={data.email} />
            <TextField id="outlined-basic" placeholder="Ex: 01/01/2001" label="Agendar Para" variant="standard" onChange={({ target }) => setData(target, 'agendar_para')} value={data.agendar_para} />
            <Button onClick={agendar} variant="outlined">{text}</Button>
          </form>
        </div>
    )
}

export default AgendamentoForm