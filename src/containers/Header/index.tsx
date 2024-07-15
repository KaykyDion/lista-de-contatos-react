import { Link } from "react-router-dom";
import { Input, SaveButton } from "../../styles";
import * as S from "./styles";

export default function Header() {
  return (
    <S.Header>
      <h1>Contatos</h1>
      <Input type="text" placeholder="Buscar pelo nome" />
      <Link to={"/new-contact"}>
        <SaveButton>Adicionar contato +</SaveButton>
      </Link>
    </S.Header>
  );
}
