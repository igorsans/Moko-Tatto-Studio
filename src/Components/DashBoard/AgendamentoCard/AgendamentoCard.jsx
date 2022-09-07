import { IconButton } from "@mui/material";
import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import S from "./AgendamentoCard.module.css";

const AgendamentoCard = ({ id, idCliente, tattoId, horario, modal, editmodal }) => {
    return (
        <div className={S.container}>
            <p>{id}</p>
            <p>
                {idCliente}
            </p>
            <p>{tattoId}</p>
            <p>{horario}h</p>
            <div>
                <IconButton onClick={modal} aria-label="delete" size="small">
                    <AiFillDelete />
                </IconButton>
                <IconButton onClick={editmodal} aria-label="delete" size="small">
                    <AiFillEdit />
                </IconButton>
            </div>
        </div>
    );
};

export default AgendamentoCard;
