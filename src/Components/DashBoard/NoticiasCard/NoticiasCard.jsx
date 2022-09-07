import { IconButton } from "@mui/material";
import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import S from "./NoticiasCard.module.css";

const NoticiasCard = ({
  id,
  url,
  descricao,
  titulo,
  modal,
  editmodal,
}) => {
  return (
    <div className={S.container}>
      <p>{id}</p>
      <p>{url}</p>
      <p>{titulo}</p>
      <p>{descricao}</p>

      <div>
        <IconButton onClick={modal} aria-label="delete" size="small">
          <AiFillDelete  />
        </IconButton>
        <IconButton onClick={editmodal} aria-label="delete" size="small">
          <AiFillEdit  />
        </IconButton>
      </div>
    </div>
  );
};

export default NoticiasCard;
