import { TextField, Button } from "@mui/material"
import S from './AgendamentoForm.module.css'

const AgendamentoForm = ({ data, setData, agendar, text, titulo }) => {
    return (
        <div className={S.container}>
          <h1>{titulo}</h1>
          <form className={S.form}>
            <TextField id="standard-basic" label="Cliente_ID" variant="standard" onChange={({ target }) => setData(target, 'idCliente')} value={data.idCliente} />
            <TextField id="standard-basic" label="Tatto_ID" variant="standard" onChange={({ target }) => setData(target, 'tattoId')} value={data.tattoId} />
            <TextField id="outlined-basic" label="Horario" variant="standard" onChange={({ target }) => setData(target, 'horario')} value={data.horario} />
            <Button onClick={agendar} variant="outlined">{text}</Button>
          </form>
        </div>
    )
}

export default AgendamentoForm