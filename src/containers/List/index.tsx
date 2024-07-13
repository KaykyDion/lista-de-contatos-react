import Contact from "../../components/Contact";
import * as S from "./styles";

export default function List() {
  const contacts = [
    { nome: "Kayky", email: "kayky@gmail.com", telephone: "31 99088984" },
    { nome: "pedro", email: "pedro@gmail.com", telephone: "31 99088984" },
    { nome: "victor", email: "victor@gmail.com", telephone: "31 99088984" },
  ];

  return (
    <S.List>
      {contacts.map((c) => (
        <Contact
          key={c.nome}
          name={c.nome}
          email={c.email}
          telephone={c.telephone}
        />
      ))}
    </S.List>
  );
}
