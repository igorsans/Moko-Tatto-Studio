import { TextField, Button } from "@mui/material"
import S from './LoginForm.module.css'

const LoginForm = ({data, setData}) => {
  return (
    <div className={S.container}>
        <h2>Login</h2>
        <form className={S.form}>
        <TextField id="standard-basic" label="Email:" variant="standard" />
        <TextField id="standard-basic" label="Senha:" variant="standard" />
        <Button variant="contained">Login</Button>
        </form>
    </div>
  )
}

export default LoginForm