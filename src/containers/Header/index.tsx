import { Link } from "react-router-dom";
import { Input, SaveButton } from "../../styles";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import { changeWord } from "../../store/reducers/search";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <S.Header>
      <h1>Contatos</h1>
      <Input
        onChange={(ev) => dispatch(changeWord(ev.target.value))}
        type="text"
        placeholder="Buscar pelo nome..."
      />
      <Link to={"/new-contact"}>
        <SaveButton>Adicionar contato +</SaveButton>
      </Link>
    </S.Header>
  );
}
