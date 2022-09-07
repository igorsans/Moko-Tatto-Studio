import { IconButton } from "@mui/material";
import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import S from "./TatuagemCard.module.css";

const TatuagemCard = ({ id, nome, preco, disponibilidade, imagemUrl, idComprador, modal, editmodal }) => {
  return (
    <div className={S.container}>
      <p>{id}</p>
      <p>
        {nome} 
      </p>
      <p>{preco}</p>
      <p>{disponibilidade}</p>
      <p>{imagemUrl}</p>
      <p>{idComprador}</p>
      <div>
        <IconButton onClick={modal} aria-label="delete" size="small">
          <AiFillDelete />
        </IconButton>
        <IconButton onClick={editmodal} aria-label="delete" size="small">
        <AiFillEdit/>
        </IconButton>
      </div>
    </div>
  );
};

export default TatuagemCard;