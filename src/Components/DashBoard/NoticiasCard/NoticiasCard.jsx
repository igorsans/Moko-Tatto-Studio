import { IconButton } from "@mui/material";
import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import S from "./ClienteCard.module.css";

import React from 'react'

const NoticiasCard = ({ id, url, descricao, titulo, data,  modal, editmodal}) => {
    return (
        <div className={S.container}>
        <p>{id}</p>
        <p>
            {url}
        </p>
        <p>{descricao}</p>
        <p>{titulo}</p>
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
}

export default NoticiasCard