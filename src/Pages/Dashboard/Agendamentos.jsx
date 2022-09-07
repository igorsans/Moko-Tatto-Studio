import { Button, Fab, Modal, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import AgendamentoForm from "../../Components/AgendamentoForm/AgendamentoForm";
import AgendamentoCard from "../../Components/DashBoard/AgendamentoCard/AgendamentoCard";
import LabelAgendar from "../../Components/DashBoard/LabelCards/LabelAgendar";
import { UserContext } from "../../Context/UserProvider";
import { getApi } from "../../Services/api";
import S from "./Container.module.css";

const Agendamentos = () =>{
  const { modal, setModal, styleModal, attScreen, setAttScreen} = useContext(UserContext);
  const [agendamentos, setAgendamentos] = useState([])
  const [agendamento, setAgendamento] = useState("")
  async function requisicao() {
    const resposta = await getApi("/agendamentos");
    setAgendamentos(resposta);
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
        <Fab onClick={()=> handleModalOpen("newAgenda")} variant="extended">
          <AiOutlineUserAdd />
          Novo Agendamento
        </Fab>
        <Modal
          open={modal.newAgenda}
          onClose={()=> handleModalOpen("newAgenda")}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styleModal}>
            <AgendamentoForm titulo={"Preencha os dados abaixo"} text={"Agendar"} agendar={"postCliente"} data={"formAgd"} setData={"handleSetFormAgd"} />
          </Box>
        </Modal>
      </div>
      <LabelAgendar />
      {agendamentos
        ? agendamentos.map((item) => (
            <AgendamentoCard
              id={item.id}
              idCliente={item.idCliente}
              tattoId={item.tattoId}
              horario={item.horario}
              modal={()=> hookDelAgenda(item) }
              del={"delAgendamento"}
              editmodal={()=> hookAttAgenda(item.id)}
            />
          ))
        : "carregando..."}
        <Modal
          open={modal.delUser}
          onClose={()=> handleModalOpen('delUser')}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styleModal}>
            <p>Tem certeza que deseja excluir o agendamento de: {agendamento.nome} {agendamento.sobrenome}</p>
            <p>do banco de dados?</p>
            <Button onClick={()=> delApi(agendamento.id)} color="error" variant="contained">Deletar</Button>
            <Button onClick={()=> handleModalOpen('delUser')} color="primary" variant="contained">Voltar</Button>
          </Box>
        </Modal>
        <Modal
          open={modal.editUser}
          onClose={()=> handleModalOpen('editUser')}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styleModal}>
            <AgendamentoForm titulo={`Atualize ${agendamento.nome} ${agendamento.sobrenome}`} text={"Atualizar"} cadastrar={"attAgenda"} data={"formAgd"} setData={"handleSetFormAgd"} />
            <Button onClick={()=> handleModalOpen('editUser')} color="primary" variant="contained">Voltar</Button>
          </Box>
        </Modal>
    </div>
  );
};

export default Agendamentos;