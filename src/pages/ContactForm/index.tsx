import { useState } from "react";
import { ContactType } from "../../components/Contact";
import { Input, SaveButton } from "../../styles";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../store/reducers/contacts";
import { RootReducer } from "../../store";

type Props = {
  contact?: ContactType;
};

export default function ContactForm({ contact }: Props) {
  const contacts = useSelector(
    (state: RootReducer) => state.contactsList.contacts
  );

  const [name, setName] = useState(contact ? contact.name : "");
  const [email, setEmail] = useState(contact ? contact.email : "");
  const [telephone, setTelephone] = useState(contact ? contact.telephone : "");

  const dispatch = useDispatch();

  function addContact(ev: React.FormEvent) {
    ev.preventDefault();
    dispatch(
      add({
        name,
        email,
        telephone,
        id: `${name}${contacts.length + 1}`.replace(/ /g, "").toLowerCase(),
      })
    );
  }

  return (
    <S.FormContainer>
      <h2>{contact ? `Editando - ${name} - ${telephone}` : "Novo contato"}</h2>
      <S.Form onSubmit={(ev) => addContact(ev)}>
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
