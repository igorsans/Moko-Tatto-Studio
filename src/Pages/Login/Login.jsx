import React, { useContext } from "react";
import CadastroForm from "../../Components/CadastroForm/CadastroForm";
import LoginForm from "../../Components/LoginForm/LoginForm";
import S from './Login.module.css'
import { UserContext } from "../../Context/UserProvider";

const Login = () => {
  const {formCad, handleSetFormCad, cadastrarUser} = useContext(UserContext)
  console.log(cadastrarUser)
  return (
    <div className={S.container}>
      <div>
        <LoginForm />
      </div>
      <div>
        <CadastroForm titulo={"Cadastre-se"} text={"Cadastrar"} cadastrar={cadastrarUser} data={formCad} setData={handleSetFormCad}/>
      </div>
    </div>
  );
};

export default Login;
