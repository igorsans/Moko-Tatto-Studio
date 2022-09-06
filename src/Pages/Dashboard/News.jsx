import { Button, Fab, Modal, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import CadastroNew from "../../Components/CadastroNew/CadastroNew";
import LabelNew from "../../Components/DashBoard/LabelNew/LabelNew";
import NoticiasCard from "../../Components/DashBoard/NoticiasCard/NoticiasCard"
import { UserContext } from "../../Context/UserProvider";
import S from "./Container.module.css";
const News = () => {
  return (
    <div className={S.container}>
        <div className={S.input}>
            <TextField id="outlined-basic" label="Buscar" variant="outlined"/>
            <Fab onClick={()=> handleModalOpen("newNoticia")} variant="extended">
                <AiOutlineUserAdd />
                Nova Noticia
            </Fab>
            <Modal
                onClose={()=> handleModalOpen("newNoticia")}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CadastroNew titulo={"Preencha os dados abaixo"} text={"Cadastrar"} cadastrar={postCliente} data={formCad} setData={handleSetFormCad} />
                </Box>
            </Modal>
        </div>
        <LabelNew />
        {noticias
            ? noticias.map((item)=>(
                <NoticiasCard
                id={item.id}
                url={item.url}
                descricao={item.descricao}
                tirulo={item.titulo}
                modal={()=> hookDelCliente(item) }
                del={delClientes}
                editmodal={()=> hookAttCliente(item.id)}
                />
            )):"Carregando..."}
            <Modal
            open={modal.delUser}
            onClose={()=> handleModalOpen('delUser')}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <p>Tem certeza que deseja excluir essa noticia: {noticia.descricao} {cliente.titulo}</p>
            <p>do banco de dados?</p>
            <Button onClick={()=> delCliente(cliente.id)} color="error" variant="contained">Deletar</Button>
            <Button onClick={()=> handleModalOpen('delUser')} color="primary" variant="contained">Voltar</Button>
            </Box>
            </Modal>
            <Modal
            open={modal.editUser}
            onClose={()=> handleModalOpen('editUser')}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <CadastroForm titulo={`Atualize ${noticias.titulo} ${noticias.descricao}`} text={"Atualizar"} cadastrar={attCliente} data={formCad} setData={handleSetFormCad} />
            <Button onClick={()=> handleModalOpen('editUser')} color="primary" variant="contained">Voltar</Button>
            </Box>
        </Modal>
    </div>
    )
}

export default News