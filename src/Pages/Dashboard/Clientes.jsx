import { Button, Fab, Modal, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import CadastroForm from "../../Components/CadastroForm/CadastroForm";
import ClienteCard from "../../Components/DashBoard/ClienteCard/ClienteCard";
import LabelCliente from "../../Components/DashBoard/LabelCards/LabelCliente";
import { UserContext } from "../../Context/UserProvider";
import { getApi, delApi, putApi } from "../../Services/api";
import S from "./Container.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vh",
  bgcolor: "#a5a5a587",
  boxShadow: 24,
  p: 4,
};

const Clientes = () => {
  const { formCad, handleSetFormCad, cadastrarUser, setformCad } = useContext(UserContext);
  const [attScreen, setAttScreen] = useState(false);
  const [modal, setModal] = useState({
    newUser: false,
    editUser: false,
    delUser: false,
  });

  const [clientes, setClientes] = useState([]);
  const [cliente, setCliente] = useState({});
  async function requisicao() {
    const resposta = await getApi("/clientes");
    setClientes(resposta);
  }

  const handleModalOpen = (chave) => {
    modal[chave]
      ? setModal({ ...modal, [chave]: false })
      : setModal({ ...modal, [chave]: true });
  };
  async function postCliente() {
    await cadastrarUser();
    setAttScreen(true);
    handleModalOpen("newUser");
  }
  const hookDelCliente = (obj) => {
    setCliente({ id: obj.id, nome: obj.nome, sobrenome: obj.sobrenome });
    handleModalOpen("delUser");
  };
  const hookAttCliente = (obj) => {
    setformCad({...obj});
    setCliente({ id: obj.id, nome: obj.nome, sobrenome: obj.sobrenome })
    handleModalOpen("editUser");
  };
  async function attCliente() {
    await putApi("/clientes", cliente.id, formCad);
    handleModalOpen("editUser");
    setAttScreen(true);
  }
  async function delCliente(id) {
    await delApi("/clientes", id);
    handleModalOpen("delUser");
    setAttScreen(true);
  }
  useEffect(() => {
    if (attScreen) {
      requisicao();
      setAttScreen(false);
    }
  }, [attScreen]);
  useEffect(() => {
    requisicao();
  }, []);

  return (
    <div className={S.container}>
      <div className={S.input}>
        <TextField id="outlined-basic" label="Buscar" variant="outlined" />
        <Fab onClick={() => handleModalOpen("newUser")} variant="extended">
          <AiOutlineUserAdd />
          Novo Usuario
        </Fab>
        <Modal
          open={modal.newUser}
          onClose={() => handleModalOpen("newUser")}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <CadastroForm
              titulo={"Preencha os dados abaixo"}
              text={"Cadastrar"}
              cadastrar={postCliente}
              data={formCad}
              setData={handleSetFormCad}
            />
          </Box>
        </Modal>
      </div>
      <LabelCliente />
      <div className={S.overhide}>
        {clientes
          ? clientes.map((item) => (
              <ClienteCard
                id={item.id}
                nome={item.nome}
                email={item.email}
                data={item.dataNascimento}
                sobrenome={item.sobrenome}
                modal={() => hookDelCliente(item)}
                del={delApi}
                editmodal={() => hookAttCliente(item)}
              />
            ))
          : "carregando..."}
      </div>
      <Modal
        open={modal.delUser}
        onClose={() => handleModalOpen("delUser")}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p>
            Tem certeza que deseja excluir o usuario: {cliente.nome}{" "}
            {cliente.sobrenome}
          </p>
          <p>do banco de dados?</p>
          <Button
            onClick={() => delCliente(cliente.id)}
            color="error"
            variant="contained"
          >
            Deletar
          </Button>
          <Button
            onClick={() => handleModalOpen("delUser")}
            color="primary"
            variant="contained"
          >
            Voltar
          </Button>
        </Box>
      </Modal>
      <Modal
        open={modal.editUser}
        onClose={() => handleModalOpen("editUser")}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CadastroForm
            titulo={`Atualize ${cliente.nome} ${cliente.sobrenome}`}
            text={"Atualizar"}
            cadastrar={attCliente}
            data={formCad}
            setData={handleSetFormCad}
          />
          <Button
            onClick={() => handleModalOpen("editUser")}
            color="primary"
            variant="contained"
          >
            Voltar
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Clientes;
