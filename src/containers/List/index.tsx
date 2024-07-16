import { useSelector } from "react-redux";
import Contact, { ContactType } from "../../components/Contact";
import * as S from "./styles";
import { RootReducer } from "../../store";

export default function List() {
  const contacts = useSelector(
    (state: RootReducer) => state.contactsList.contacts
  );

  return (
    <S.List>
      {contacts.map((c: ContactType) => (
        <Contact
          key={c.name}
          name={c.name}
          email={c.email}
          telephone={c.telephone}
          id={c.id}
        />
      ))}
    </S.List>
  );
}
