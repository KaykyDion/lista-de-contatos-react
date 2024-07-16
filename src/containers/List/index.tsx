import { useSelector } from "react-redux";
import Contact, { ContactType } from "../../components/Contact";
import * as S from "./styles";
import { RootReducer } from "../../store";
import { Link } from "react-router-dom";

export default function List() {
  const contacts = useSelector(
    (state: RootReducer) => state.contactsList.contacts
  );

  const { word } = useSelector((state: RootReducer) => state.search);

  const searchContacts = () => {
    let filteredContacts = contacts;

    if (word != undefined) {
      return (filteredContacts = filteredContacts.filter(
        (contact) => contact.name.toLowerCase().search(word.toLowerCase()) >= 0
      ));
    }

    return contacts;
  };

  return (
    <S.List>
      {contacts.length === 0 ? (
        <S.NoContactsMessage>
          <h2>Não há contatos na lista</h2>
          <Link to={"/new-contact"}>Adicione seu primeiro contato +</Link>
        </S.NoContactsMessage>
      ) : (
        searchContacts().map((c: ContactType) => (
          <Contact
            key={c.name}
            name={c.name}
            email={c.email}
            telephone={c.telephone}
            id={c.id}
          />
        ))
      )}
    </S.List>
  );
}
