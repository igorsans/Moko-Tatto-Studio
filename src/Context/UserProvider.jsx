import { useState, createContext } from "react";
import { getApi, postCliente } from "../Services/api";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [usuarioLogado, setUsuarioLogado] = useState(false)
  const [usuario, setUsuario] = useState({})
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
    verificaUsuario()
  };
  async function verificaUsuario(obj){
    const clientes = await getApi()
    console.log(clientes)
    clientes.filter((item)=>{
      if(item.email == obj.email && item.senha == obj.senha){
        return (
          console.log("tem"),
          setUsuario(item),
          setUsuarioLogado(true)
        )
      } else{
        console.log(obj)
      }
    })
  }
  const contexto = {
    formCad: formCad,
    handleSetFormCad: handleSetFormCad,
    cadastrarUser: cadastrarUser,
    verificaUsuario: verificaUsuario,
    usuarioLogado: usuarioLogado,
    usuario: usuario
  };
  return (
    <UserContext.Provider value={contexto}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
