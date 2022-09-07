import { Button, Fab, Modal, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import AgendamentoForm from "../../Components/AgendamentoForm/AgendamentoForm";
import AgendamentoCard from "../../Components/DashBoard/AgendamentoCard/AgendamentoCard";
import LabelAgendar from "../../Components/DashBoard/LabelCards/LabelAgendar";
import { UserContext } from "../../Context/UserProvider";
import { delApi, getApi, postApi, putApi } from "../../Services/api";
import S from "./Container.module.css";

const Agendamentos = () =>{
  const { modal, styleModal, attScreen, setAttScreen, handleModalOpen} = useContext(UserContext);
  const [agendamentos, setAgendamentos] = useState([])
  const [agendamento, setAgendamento] = useState("")
  const [formAgd, setFormAgd]= useState({
    idCliente: "",
    tattoId: "",
    horario: ""
  })
  const handleSetFormAgd = (target, key) =>{
    setFormAgd({...formAgd, [key]: target.value})
    console.log(formAgd)
  }
  async function postAgenda(){
    await postApi("/agendamentos", formAgd)
    handleModalOpen("newAgenda")
    setAttScreen(true);
    setFormAgd({
      idCliente: "",
      tattoId: "",
      horario: ""
    })
  }
  async function requisicao() {
    const resposta = await getApi("/agendamentos");
    setAgendamentos(resposta);
  }
  const hookDelAgenda = (obj) => {
    handleModalOpen("delAgenda")
    setAgendamento(obj)
  }
  const hookAttAgenda= (obj) =>{
    handleModalOpen('editAgenda')
    setAgendamento(obj)
    setFormAgd(obj)
  }
  async function attAgenda(){
    await putApi("/agendamentos", agendamento.id, formAgd)
    setAttScreen(true);
    handleModalOpen('editAgenda')
    setFormAgd({
      idCliente: "",
      tattoId: "",
      horario: ""
    })
  }
  async function delAgenda(){
    await delApi("/agendamentos", agendamento.id);
    handleModalOpen("delAgenda");
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
            <AgendamentoForm titulo={"Preencha os dados abaixo"} text={"Agendar"} agendar={postAgenda} data={formAgd} setData={handleSetFormAgd} />
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
              editmodal={()=> hookAttAgenda(item)}
            />
          ))
        : "carregando..."}
        <Modal
          open={modal.delAgenda}
          onClose={()=> handleModalOpen('delUser')}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styleModal}>
            <p>Tem certeza que deseja excluir o agendamento de: id:{agendamento.id} marcado para {agendamento.horario}h</p>
            <p>do banco de dados?</p>
            <Button onClick={()=> delAgenda()} color="error" variant="contained">Deletar</Button>
            <Button onClick={()=> handleModalOpen('delAgenda')} color="primary" variant="contained">Voltar</Button>
          </Box>
        </Modal>
        <Modal
          open={modal.editAgenda}
          onClose={()=> handleModalOpen('editAgenda')}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styleModal}>
            <AgendamentoForm titulo={`Atualize agendamento de id:${agendamento.id} marcado para:${agendamento.horario}h`} text={"Atualizar"} agendar={attAgenda} data={formAgd} setData={handleSetFormAgd} />
            <Button onClick={()=> handleModalOpen('editAgenda')} color="primary" variant="contained">Voltar</Button>
          </Box>
        </Modal>
    </div>
  );
};

export default Agendamentos;