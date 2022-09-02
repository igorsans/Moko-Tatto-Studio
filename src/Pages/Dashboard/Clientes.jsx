import React, { useState } from "react";
import S from "./Container.module.css";
import { Fab, TextField , Modal, Typography} from "@mui/material";
import { AiOutlineUserAdd } from "react-icons/ai";
import LabelCliente from "../../Components/LabelCards/LabelCliente";
import { Box } from "@mui/system";
import CadastroForm from "../../Components/CadastroForm/CadastroForm";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Clientes = () => {

    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

  return (
    <div className={S.container}>
      <div className={S.input}>
        <TextField id="outlined-basic" label="Buscar" variant="outlined" />
        <Fab onClick={handleOpen} variant="extended">
          <AiOutlineUserAdd />
          Novo Usuario
        </Fab>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <CadastroForm/>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
      </div>
      <LabelCliente />
    </div>
  );
};

export default Clientes;
