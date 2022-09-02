import { useState, createContext } from "react";
import { postCliente } from "../Services/api";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [formCad, setformCad] = useState({
    nome: "",
    sobrenome: "",
    telefone: "",
    dataNascimento: "",
    email: "",
    senha: "",
  });
  const handleSetFormCad = (target, key) => {
    setformCad({ ...formCad, [key]: target.value });
  };
  const cadastrarUser = () => {
    postCliente(formCad);
    setformCad({
      nome: "",
      sobrenome: "",
      telefone: "",
      dataNascimento: "",
      email: "",
      senha: "",
    });
  };

  const contexto = {
    formCad: formCad,
    handleSetFormCad: handleSetFormCad,
    cadastrarUser: cadastrarUser,
  };
  return (
    <UserContext.Provider value={contexto}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
