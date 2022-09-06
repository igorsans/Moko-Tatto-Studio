import { TextField, Button } from "@mui/material"
import S from './CadastroTatuagens.module.css'

const CadastroTatuagens = ({ data, setData, cadastrar, text, titulo }) => {
  return (
    <div className={S.container}>
          <h1>{titulo}</h1>
          <form className={S.form}>
            <TextField id="standard-basic" label="Preço" variant="standard" onChange={({ target }) => setData(target, 'preco')} value={data.preco} />
            <TextField id="standard-basic" label="Url Imagem" variant="standard" onChange={({ target }) => setData(target, 'imagemUrl')} value={data.imagemUrl} />
            <TextField id="standard-basic" label="Nome" variant="standard" onChange={({ target }) => setData(target, 'nomeTatuador')} value={data.nomeTatuador} />
            <TextField id="standard-basic" label="Disponibilidade" variant="standard" onChange={({ target }) => setData(target, 'disponivel')} value={data.disponivel} />
            <TextField id="standard-basic" label="ID do comprador" variant="standard" onChange={({ target }) => setData(target, 'idComprador')} value={data.idComprador} />
            <Button onClick={cadastrar} variant="outlined">{text}</Button>
          </form>
        </div>
  )
}

export default CadastroTatuagens