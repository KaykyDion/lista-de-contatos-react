import { Link } from "react-router-dom";
import { Button, RemoveButton } from "../../styles";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import { remove } from "../../store/reducers/contacts";

export type ContactType = {
  name: string;
  email: string;
  telephone: string;
  id: string;
};

export default function Contact({ name, email, telephone, id }: ContactType) {
  const dispatch = useDispatch();

  return (
    <S.Card>
      <S.InfosContainer>
        <S.Info>
          <img
            src="https://us.123rf.com/450wm/salamatik/salamatik1712/salamatik171200045/92143748-perfil-icono-de-cara-an%C3%B3nima-persona-silueta-gris-avatar-predeterminado-masculino-marcador-de.jpg"
            alt="avatar de perfil"
          />
          <h3>{name}</h3>
        </S.Info>
        <S.Info>
          <img
            src="https://i.pinimg.com/originals/d7/62/51/d76251e6c48e3438cc99f7ed0213d08c.jpg"
            alt="ícone de email"
          />
          <p>{email}</p>
        </S.Info>
        <S.Info>
          <img
            src="https://cdn4.iconfinder.com/data/icons/social-icons-6/40/phone-512.png"
            alt="ícone de telefone"
          />
          <p>{telephone}</p>
        </S.Info>
      </S.InfosContainer>
      <S.ButtonContainer>
        <Link to={`edit/${id}`}>
          <Button>Editar</Button>
        </Link>
        <RemoveButton
          onClick={() => dispatch(remove({ name, email, telephone, id }))}
        >
          Remover
        </RemoveButton>
      </S.ButtonContainer>
    </S.Card>
  );
}
