import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/UserProvider";
import { AiOutlineShopping, AiOutlineEdit } from "react-icons/ai";
import { getApi } from "../../Services/api";
import { useEffect } from "react";
import CardTattoUsuario from "../../Components/CardTattoUsuario/CardTattoUsuario";
import CadastroForm from "../../Components/CadastroForm/CadastroForm";
import S from './Usuario.module.css'

const Usuario = () => {
  const { usuario, setAttScreen, attScreen } = useContext(UserContext);
  const [tattos, setTattos] = useState([]);
  async function requisicao() {
    const resposta = await getApi("/tatuagens")
    setTattos(resposta);
  }
  const checkTatto= (obj) =>{
    console.log(obj)
    return obj.idComprador == usuario.id
  }

  useEffect(() => {
    requisicao();
    console.log(tattos);
  }, []);
  return (
    <div className={S.container}>
      <h2 className={S.usuario}>
        Olá {usuario.nome} {usuario.sobrenome} seja bem vindo ao painel do usuario
      </h2>
          <div className={S.compras}>
          <p>
            <AiOutlineShopping /> Suas compras:
          </p>
          </div>
          <div className={S.card}>
          {tattos?
            tattos.filter(checkTatto).map((item) => 
                <CardTattoUsuario obj={item}/>
            ) : ""
        }
          </div>
    </div>
  );
};

export default Usuario;
