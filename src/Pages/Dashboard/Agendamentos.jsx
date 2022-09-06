import { Button, Fab, Modal, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { AiOutlineUserAdd } from "react-icons/ai";
import AgendamentoForm from "../../Components/AgendamentoForm/AgendamentoForm";
import AgendamentoCard from "../../Components/DashBoard/AgendamentoCard/AgendamentoCard";
import LabelAgendar from "../../Components/DashBoard/LabelCards/LabelAgendar";
import { delAgendamento, } from "../../Services/api";
import S from "./Container.module.css";

const Agendamento = () =>{

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
          <Box sx={style}>
            <AgendamentoForm titulo={"Preencha os dados abaixo"} text={"Agendar"} agendar={postCliente} data={formAgd} setData={handleSetFormAgd} />
          </Box>
        </Modal>
      </div>
      <LabelAgendar />
      {Agendamento
        ? Agendamento.map((item) => (
            <AgendamentoCard
              id={item.id}
              nome={item.nome}
              sobrenome={item.sobrenome}
              email={item.email}
              data={item.agendar_para}
              modal={()=> hookDelAgenda(item) }
              del={delAgendamento}
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
          <Box sx={style}>
            <p>Tem certeza que deseja excluir o agendamento de: {Agendamento.nome} {Agendamento.sobrenome}</p>
            <p>do banco de dados?</p>
            <Button onClick={()=> delCliente(Agendamento.id)} color="error" variant="contained">Deletar</Button>
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
            <AgendamentoForm titulo={`Atualize ${cliente.nome} ${cliente.sobrenome}`} text={"Atualizar"} cadastrar={attAgenda} data={formAgd} setData={handleSetFormAgd} />
            <Button onClick={()=> handleModalOpen('editUser')} color="primary" variant="contained">Voltar</Button>
          </Box>
        </Modal>
    </div>
  );
};

export default Agendamento;