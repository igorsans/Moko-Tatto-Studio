import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/UserProvider";
import { AiOutlineShopping, AiOutlineEdit } from "react-icons/ai";
import { getApi } from "../../Services/api";
import { useEffect } from "react";
import CardTattoUsuario from "../../Components/CardTattoUsuario/CardTattoUsuario";
import CadastroForm from "../../Components/CadastroForm/CadastroForm";

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
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>
        Olá {usuario.nome} {usuario.sobrenome} seja bem vindo ao painel do usuario
      </h2>
      <div>
        <div>
          <p>
            <AiOutlineShopping /> Suas compras:
          </p>
          <div>
          {tattos?
            tattos.filter(checkTatto).map((item) => 
                <CardTattoUsuario obj={item}/>
            ) : ""
        }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usuario;
