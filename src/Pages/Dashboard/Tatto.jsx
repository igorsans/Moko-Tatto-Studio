import { Button, Fab, Modal, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import CadastroTatuagens from "../../Components/CadastroTatuagens/CadastroTatuagens";
import LabelTatuagens from "../../Components/LabelTatuagens/LabelTatuagens";
import TatuagemCard from "../../Components/TatuagemCard/TatuagemCard";
import { UserContext } from "../../Context/UserProvider";
// import { UserContext } from "../../Context/UserProvider";
import { getApi, delApi, putApi, postApi } from "../../Services/api";
import S from "./Container.module.css";

const Tatto = () => {
  const { modal, styleModal, attScreen, setAttScreen, handleModalOpen } =
    useContext(UserContext);

  const [tatuagens, setTatuagens] = useState([]);
  const [tatuagem, setTatuagem] = useState({});
  const [formTatto, setformTatto] = useState({
    preco: "",
    imagemUrl: "",
    nomeTatuador: "",
    disponivel: "",
    idComprador: "",
  });
  const handleSetFormNews = (target, key) => {
    setformTatto({ ...formTatto, [key]: target.value });
    console.log(formTatto);
  };
  async function postTatto() {
    await postApi("/tatuagens", formTatto);
    setformTatto({
      preco: "",
      imagemUrl: "",
      nomeTatuador: "",
      disponivel: "",
      idComprador: "",
    });
    setAttScreen(true);
    handleModalOpen("newTatto");
  }
  const hookDelTatto = (obj) => {
    setTatuagem(obj);
    handleModalOpen("delTatto");
  };
  async function delTatto() {
    await delApi("/tatuagens", tatuagem.id);
    setAttScreen(true);
    handleModalOpen("delTatto");
  }
  const hookAttCliente = (obj) => {
    setformTatto(obj);
    setTatuagem(obj);
    handleModalOpen("editTatto");
  };
  async function attTatto() {
    await putApi("/tatuagens", tatuagem.id, formTatto);
    setAttScreen(true);
    handleModalOpen("editTatto");
    setformTatto({
      preco: "",
      imagemUrl: "",
      nomeTatuador: "",
      disponivel: "",
      idComprador: "",
    });
  }
  async function requisicao() {
    const resposta = await getApi("/tatuagens");
    setTatuagens(resposta);
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
        <Fab onClick={() => handleModalOpen("newTatto")} variant="extended">
          <AiOutlineUserAdd />
          Nova Tatuagem
        </Fab>
        <Modal
          open={modal.newTatto}
          onClose={() => handleModalOpen("newTatto")}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styleModal}>
            <CadastroTatuagens
              titulo={"Preencha os dados abaixo"}
              text={"Cadastrar"}
              cadastrar={postTatto}
              data={formTatto}
              setData={handleSetFormNews}
            />
          </Box>
        </Modal>
      </div>
      <LabelTatuagens />
      <div className={S.overhide}>
        {tatuagens
          ? tatuagens.map((item) => (
              <TatuagemCard
                key={item.id}
                id={item.id}
                nome={item.nomeTatuador}
                preco={item.preco}
                disponibilidade={item.disponivel}
                imagemUrl={item.imagemUrl}
                idComprador={item.idComprador}
                modal={() => hookDelTatto(item)}
                editmodal={() => hookAttCliente(item)}
              />
            ))
          : "carregando..."}
      </div>
      <Modal
        open={modal.delTatto}
        onClose={() => handleModalOpen("delTatto")}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>
          <p>Tem certeza que deseja excluir a tatuagem de id:{tatuagem.id}</p>
          <p>do banco de dados?</p>
          <Button onClick={() => delTatto()} color="error" variant="contained">
            Deletar
          </Button>
          <Button
            onClick={() => handleModalOpen("delTatto")}
            color="primary"
            variant="contained"
          >
            Voltar
          </Button>
        </Box>
      </Modal>
      <Modal
        open={modal.editTatto}
        onClose={() => handleModalOpen("editTatto")}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>
          <CadastroTatuagens
            titulo={`Atualize tatto de id:${tatuagem.id}`}
            text={"Atualizar"}
            cadastrar={attTatto}
            data={formTatto}
            setData={handleSetFormNews}
          />
          <Button
            onClick={() => handleModalOpen("editTatto")}
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

export default Tatto;
