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
                <IconButton aria-label="delete" size="small">
                    <AiFillDelete onClick={modal} />
                </IconButton>
                <IconButton aria-label="delete" size="small">
                    <AiFillEdit onClick={editmodal} />
                </IconButton>
            </div>
        </div>
    );
};

export default AgendamentoCard;
