import React, { useContext, useState } from "react";
import CadastroForm from "../../Components/CadastroForm/CadastroForm";
import LoginForm from "../../Components/LoginForm/LoginForm";
import S from './Login.module.css'
import { UserContext } from "../../Context/UserProvider";

const Login = () => {
  const {formCad, handleSetFormCad, cadastrarUser, verificaUsuario} = useContext(UserContext)
  const [usuario, setUsuario] = useState({
    email: '',
    senha: ''
  })
  const handleChange = (key, target) =>{
    setUsuario({ ...usuario, [key]: target.value });
  }
  return (
    
    <div className={S.container}>
      <div>
        <LoginForm verificaUsuario={verificaUsuario} data={usuario} setData={handleChange} />
      </div>
      <div>
        <CadastroForm titulo={"Cadastre-se"} text={"Cadastrar"} cadastrar={cadastrarUser} data={formCad} setData={handleSetFormCad}/>
      </div>
    </div>
  );
};

export default Login;
