import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { getApi, postApi } from "../Services/api";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const navigate = useNavigate()
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
    postApi("/clientes",formCad);
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
    const clientes = await getApi("/clientes")
    clientes.filter((item)=>{
      if(item.email == obj.email && item.senha == obj.senha){
        return (
          setUsuario(item),
          setUsuarioLogado(true),
          navigate("/")
        )
      }
    })
  }
  const contexto = {
    formCad: formCad,
    handleSetFormCad: handleSetFormCad,
    cadastrarUser: cadastrarUser,
    verificaUsuario: verificaUsuario,
    setformCad: setformCad,
    usuarioLogado: usuarioLogado,
    usuario: usuario
  };
  return (
    <UserContext.Provider value={contexto}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
