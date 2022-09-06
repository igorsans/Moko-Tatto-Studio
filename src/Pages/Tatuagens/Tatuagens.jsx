import { Box, Button, Modal } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import CardTattoo from "../../Components/CardTattoo/CardTattoo";
import { UserContext } from "../../Context/UserProvider";
import { getApi} from "../../Services/api";
import S from "./Tatuagens.module.css";

const Tatuagens = () => {
  const { usuario, usuarioLogado } = useContext(UserContext);
  const [dados, setDados] = useState([]);
  const [modal, setModal] = useState(false)
//   const [tatto, setTatto] = useState()

  const handleModal = () =>{
    modal ? setModal(false) : setModal(true)
  }

  const hookTatto = () => {
    handleModal()
    // setTatto({...obj})
  }

  async function handleRequisicao() {
    setDados(await getApi("/tatuagens"));
  }

  useEffect(() => {
    handleRequisicao();
  }, []);

  return (
    <section>
      <div className={S.container}>
        <div>
          <h2>Como Funciona?</h2>
        </div>
        <div className={S.info}>
          <div className={S.texto}>
            <h3>01.</h3>
            <h4>Escolha sua Tatuagem</h4>
            <p>
              Temos diversos desenhos de estilos variados em nosso catálogo para
              o Evento
            </p>
          </div>
          <div className={S.texto}>
            <h3>02.</h3>
            <h4>Conheça o Artista</h4>
            <p>
              Acesse o perfil do Artista e conheça mais sobre a sua história e
              seus trabalhos
            </p>
          </div>
          <div className={S.texto}>
            <h3>03.</h3>
            <h4>Reserve seu horario</h4>
            <p>Escolha o horario ao qual realizará sua tatuagem</p>
          </div>
          <div className={S.texto}>
            <h3>04.</h3>
            <h4>Chegou a hora!</h4>
            <p>
              Chegue com meia hora de antecedencia no Evento e não esqueça de
              levar seu telefone
            </p>
          </div>
        </div>
        <div></div>
      </div>
      <div className={S.cardsContainer}>
        {dados
          ? dados.map((item) => (
              <CardTattoo
                key={item.id}
                imagemUrl={item.imagemUrl}
                nomeTatuador={item.nomeTatuador}
                preco={item.preco}
                onclick={hookTatto(item)}
              />
            ))
          : "Carregando"}
      </div>
      <Modal
        open={modal}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={'style'}>
          <p>
            Deseja comprar a tatto de id: {"tatto"} 
          </p>
          <Button
            onClick={handleModal}
            color="primary"
            variant="contained"
          >
            Agendar
          </Button>
        </Box>
      </Modal>
    </section>
  );
};

export default Tatuagens;
