import React, { useState } from "react";
import CadastroForm from "../../Components/CadastroForm/CadastroForm";
import LoginForm from "../../Components/LoginForm/LoginForm";
import S from './Login.module.css'

const Login = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    sobrenome: "",
    telefone: "",
    dataNascimento: "",
    email: "",
    senha: "",
  });
  const handleSetDataForm = (target, key) => {
    setDataForm({ ...dataForm, [key]: target.value });
    console.log(dataForm)
  }

  return (
    <div className={S.container}>
      <div>
        <LoginForm />
      </div>
      <div>
        <CadastroForm data={dataForm} setData={handleSetDataForm}/>
      </div>
    </div>
  );
};

export default Login;
