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
            src="data:image/png;base64,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"
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
