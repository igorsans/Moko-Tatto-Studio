import { TextField, Button } from "@mui/material"
import S from './LoginForm.module.css'

const LoginForm = ({verificaUsuario, data , setData}) => {
  return (
    <div className={S.container}>
        <h2>Login</h2>
        <form className={S.form}>
        <TextField id="standard-basic" label="Email" variant="standard" onChange={({ target }) => setData('email', target)} value={data.email} />
        <TextField id="standard-basic" label="Senha" variant="standard" onChange={({ target }) => setData('senha', target)} value={data.senha} type="password" />
        <Button onClick={() => verificaUsuario(data)} variant="contained">Login</Button>
        </form>
    </div>
  )
}

export default LoginForm