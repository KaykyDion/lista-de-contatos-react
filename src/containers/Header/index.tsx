import { Input, SaveButton } from "../../styles";
import * as S from "./styles";

export default function Header() {
  return (
    <S.Header>
      <h1>Contatos</h1>
      <Input type="text" placeholder="Buscar pelo nome" />
      <SaveButton>Adicionar contato +</SaveButton>
    </S.Header>
  );
}
