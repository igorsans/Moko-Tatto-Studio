import { Button, Fab, Modal, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import CadastroTatuagens from "../../Components/CadastroTatuagens/CadastroTatuagens";
import LabelTatuagens from "../../Components/LabelTatuagens/LabelTatuagens";
import TatuagemCard from "../../Components/TatuagemCard/TatuagemCard";
// import { UserContext } from "../../Context/UserProvider";
import { getApi, delTatuagens, putTatuagens } from "../../Services/api";
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

const Tatuagens = () => {


    const [tatuagens, setTatuagens] = useState([]);
    const [tatuagem, setTatuagem] = useState({})
    async function requisicao() {
        const resposta = await getApi("/tatuagens");
        setTatuagens(resposta);
    }


    return (
        <div className={S.container}>
            <div className={S.input}>
                <TextField id="outlined-basic" label="Buscar" variant="outlined" />
                <Fab onClick={() => handleModalOpen("newUser")} variant="extended">
                    <AiOutlineUserAdd />
                    Nova Tatuagem
                </Fab>
                <Modal
                    open={modal.newUser}
                    onClose={() => handleModalOpen("newUser")}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <CadastroTatuagens titulo={"Preencha os dados abaixo"} text={"Cadastrar"} cadastrar={postTatuagens} data={formCad} setData={handleSetFormCad} />
                    </Box>
                </Modal>
            </div>
            <LabelTatuagens />
            {tatuagens
                ? tatuagens.map((item) => (
                    <TatuagemCard
                        id={item.id}
                        nome={item.nome}
                        preco={item.preco}
                        disponibilidade={item.disponibilidade}
                        idComprador={item.idComprador}
                        modal={() => hookDelCliente(item)}
                        del={delTatuagens}
                        editmodal={() => hookAttCliente(item.id)}
                    />
                ))
                : "carregando..."}
            <Modal
                open={modal.delUser}
                onClose={() => handleModalOpen('delUser')}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <p>Tem certeza que deseja excluir a tatuagem: {tatuagem.imagemUrl}</p>
                    <p>do banco de dados?</p>
                    <Button onClick={() => delCliente(cliente.id)} color="error" variant="contained">Deletar</Button>
                    <Button onClick={() => handleModalOpen('delUser')} color="primary" variant="contained">Voltar</Button>
                </Box>
            </Modal>
            <Modal
                open={modal.editUser}
                onClose={() => handleModalOpen('editUser')}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CadastroTatuagens titulo={`Atualize ${cliente.nome} ${cliente.sobrenome}`} text={"Atualizar"} cadastrar={attCliente} data={formCad} setData={handleSetFormCad} />
                    <Button onClick={() => handleModalOpen('editUser')} color="primary" variant="contained">Voltar</Button>
                </Box>
            </Modal>
        </div>
    )
};

export default Tatuagens;