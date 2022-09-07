import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { getApi, postApi } from "../Services/api";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const styleModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50vh",
    bgcolor: "#9f9f9f",
    boxShadow: 24,
    p: 4,
  };
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
  const [modal, setModal] = useState({});
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
  const [attScreen, setAttScreen] = useState(false);
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
  const handleModalOpen = (chave) => {
    modal[chave]
      ? setModal({ ...modal, [chave]: false })
      : setModal({ ...modal, [chave]: true });
      console.log(modal)
  };
  const contexto = {
    formCad: formCad,
    handleSetFormCad: handleSetFormCad,
    cadastrarUser: cadastrarUser,
    verificaUsuario: verificaUsuario,
    setformCad: setformCad,
    usuarioLogado: usuarioLogado,
    usuario: usuario,
    modal: modal,
    setModal: setModal,
    styleModal: styleModal,
    handleModalOpen: handleModalOpen,
    attScreen: attScreen,
    setAttScreen: setAttScreen
  };
  return (
    <UserContext.Provider value={contexto}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
