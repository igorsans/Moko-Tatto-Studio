import { Button, Fab, Modal, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { AiFillPauseCircle, AiOutlineUserAdd } from "react-icons/ai";
import CadastroNew from "../../Components/CadastroNew/CadastroNew";
import LabelNew from "../../Components/DashBoard/LabelNew/LabelNew";
import NoticiasCard from "../../Components/DashBoard/NoticiasCard/NoticiasCard";
import { UserContext } from "../../Context/UserProvider";
import { delApi, getApi, postApi, putApi } from "../../Services/api";
import S from "./Container.module.css";
const News = () => {
  const { modal, styleModal, attScreen, setAttScreen, handleModalOpen } =
    useContext(UserContext);
  const [noticias, setNoticias] = useState([]);
  const [noticia, setNoticia] = useState("");
  const [formNews, setformNews] = useState({
    urlImagem: "",
    descricao: "",
    titulo: "",
  });
  const handleSetFormNews = (target, key) => {
    setformNews({ ...formNews, [key]: target.value });
    console.log(formNews);
  };
  async function postNew() {
    await postApi("/noticias", formNews);
    setformNews({
      urlImagem: "",
      descricao: "",
      titulo: "",
    });
    setAttScreen(true);
    handleModalOpen("newNoticia");
  }
  const hookDelNew = (obj) => {
    setNoticia(obj);
    setNoticia(obj);
    handleModalOpen("delNoticia");
  };
  const hookAttNew = (obj) => {
    setformNews(obj);
    handleModalOpen("attNoticia");
  };
  async function attNew() {
    await putApi("/noticias", noticia.id, formNews);
    setAttScreen(true);
    handleModalOpen("attNoticia");
    setformNews({
      urlImagem: "",
      descricao: "",
      titulo: "",
    });
  }
  async function delNew() {
    await delApi("/noticias", noticia.id);
    setAttScreen(true);
    handleModalOpen("delNoticia");
  }
  async function requisicao() {
    const resposta = await getApi("/noticias");
    setNoticias(resposta);
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
        <Fab onClick={() => handleModalOpen("newNoticia")} variant="extended">
          <AiOutlineUserAdd />
          Nova Noticia
        </Fab>
        <Modal
          open={modal.newNoticia}
          onClose={() => handleModalOpen("newNoticia")}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styleModal}>
            <CadastroNew
              titulo={"Preencha os dados abaixo para atualizar"}
              text={"Cadastrar"}
              cadastrar={postNew}
              data={formNews}
              setData={handleSetFormNews}
            />
          </Box>
        </Modal>
      </div>
      <LabelNew />
      <div className={S.overhide}>
        {noticias
          ? noticias.map((item) => (
              <NoticiasCard
                key={item.id}
                id={item.id}
                url={item.urlImagem}
                descricao={item.descricao}
                titulo={item.titulo}
                modal={() => hookDelNew(item)}
                del={"delClientes"}
                editmodal={() => hookAttNew(item)}
              />
            ))
          : "Carregando..."}
      </div>
      <Modal
        open={modal.delNoticia}
        onClose={() => handleModalOpen("delNoticia")}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>
          <p>Tem certeza que deseja excluir a noticia de id:{noticia.id}</p>
          <p>do banco de dados?</p>
          <Button onClick={() => delNew()} color="error" variant="contained">
            Deletar
          </Button>
          <Button
            onClick={() => handleModalOpen("delNoticia")}
            color="primary"
            variant="contained"
          >
            Voltar
          </Button>
        </Box>
      </Modal>
      <Modal
        open={modal.attNoticia}
        onClose={() => handleModalOpen("attNoticia")}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>
          <CadastroNew
            titulo={"Edite as informações abaixo"}
            text={"Atualizar"}
            cadastrar={attNew}
            data={formNews}
            setData={handleSetFormNews}
          />
          <Button
            onClick={() => handleModalOpen("attNoticia")}
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

export default News;
