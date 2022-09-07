import { Box, Button, Modal } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import CardTattoo from "../../Components/CardTattoo/CardTattoo";
import { UserContext } from "../../Context/UserProvider";
import { getApi, putApi } from "../../Services/api";
import S from "./Tatuagens.module.css";

const Tatuagens = () => {
  const { usuario, usuarioLogado , styleModal } = useContext(UserContext);
  const [dados, setDados] = useState([]);
  const [modal, setModal] = useState(false);
  const [tatto, setTatto] = useState("");

  const handleModal = () => {
    modal ? setModal(false) : setModal(true);
  };

  const hookTatto = (obj) => {
    handleModal();
    setTatto({ ...obj });
    console.log(usuario)
  };
  async function handleAgendamento(){
    const obj = { disponivel: 0, idComprador: usuario.id}

    await putApi(`/tatuagens/cliente`, tatto.id, obj)
  }
  async function handleRequisicao() {
    const dados = await getApi("/tatuagens");
    setDados(dados);
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
                disponivel={item.disponivel}
                onclick={() => hookTatto(item)}
              />
            ))
          : "Carregando..."}
      </div>
      <Modal
        open={modal}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>
          {usuarioLogado ? (
            <div>
              <div>
                <img className={S.imgTatto} src={tatto.imagemUrl} alt="" />
                <p>Deseja agendar essa tatuagem?</p>
                <p>O Valor é de: R$:{tatto.preco}</p>
              </div>
              <Button onClick={handleAgendamento} color="primary" variant="contained">
                Agendar
              </Button>
            </div>
          ) : (
            <div><p>Você precisa estár logado para efetuar o agendamento!</p></div>
          )}
        </Box>
      </Modal>
    </section>
  );
};

export default Tatuagens;
