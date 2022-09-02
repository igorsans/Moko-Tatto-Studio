import React, { useState } from "react";
import CadastroForm from "../../Components/CadastroForm/CadastroForm";
import LoginForm from "../../Components/LoginForm/LoginForm";
import S from './Login.module.css'

const Login = () => {
  const [formCad, setformCad] = useState({
    name: "",
    sobrenome: "",
    telefone: "",
    dataNascimento: "",
    email: "",
    senha: "",
  });
  const handleSetformCad = (target, key) => {
    setformCad({ ...formCad, [key]: target.value });
    console.log(formCad)
  }

  return (
    <div className={S.container}>
      <div>
        <LoginForm />
      </div>
      <div>
        <CadastroForm data={formCad} setData={handleSetformCad}/>
      </div>
    </div>
  );
};

export default Login;
