import { IconButton } from "@mui/material";
import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import S from "./ClienteCard.module.css";

const ClienteCard = ({ id, nome, email, data, sobrenome, modal, editmodal }) => {
  return (
    <div className={S.container}>
      <p>{id}</p>
      <p>
        {nome} {sobrenome}
      </p>
      <p>{email}</p>
      <p>{data}</p>
      <div>
        <IconButton aria-label="delete" size="small">
          <AiFillDelete onClick={modal} />
        </IconButton>
        <IconButton aria-label="delete" size="small">
        <AiFillEdit onClick={editmodal}/>
        </IconButton>
      </div>
    </div>
  );
};

export default ClienteCard;
