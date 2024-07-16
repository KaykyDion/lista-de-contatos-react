import { useState } from "react";
import { Input, RemoveButton, SaveButton } from "../../styles";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { add, edit } from "../../store/reducers/contacts";
import { RootReducer } from "../../store";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function ContactForm() {
  const contacts = useSelector(
    (state: RootReducer) => state.contactsList.contacts
  );

  const { contactId } = useParams();

  const contact = contacts.find((c) => c.id === contactId);

  const [name, setName] = useState(contact ? contact.name : "");
  const [email, setEmail] = useState(contact ? contact.email : "");
  const [telephone, setTelephone] = useState(contact ? contact.telephone : "");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (contact) {
      dispatch(edit({ name, email, telephone, id: contact.id }));
    } else {
      dispatch(
        add({
          name,
          email,
          telephone,
          id: `${name}${contacts.length + 1}`.replace(/ /g, "").toLowerCase(),
        })
      );
    }

    navigate("/");
  }

  return (
    <S.FormContainer>
      <Link to="/">
        <RemoveButton className="back-button">&lt;- Voltar</RemoveButton>
      </Link>
      <i>
        <h2>
          {contact
            ? `Editando - ${contact.name} - ${contact.telephone}`
            : "Novo contato"}
        </h2>
      </i>
      <S.Form onSubmit={(ev) => handleSubmit(ev)}>
        <S.InputContainer>
          <label htmlFor="name">Nome:</label>
          <Input
            required
            type="text"
            id="name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
        </S.InputContainer>
        <S.InputContainer>
          <label htmlFor="email">E-mail:</label>
          <Input
            required
            type="email"
            id="email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
        </S.InputContainer>
        <S.InputContainer>
          <label htmlFor="number">Número:</label>
          <Input
            required
            type="tel"
            id="number"
            value={telephone}
            onChange={(ev) => setTelephone(ev.target.value)}
          />
        </S.InputContainer>
        <SaveButton type="submit">Confirmar</SaveButton>
      </S.Form>
    </S.FormContainer>
  );
}
