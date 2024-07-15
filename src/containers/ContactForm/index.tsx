import { Input, SaveButton } from "../../styles";
import * as S from "./styles";

export default function ContactForm() {
  return (
    <S.Form>
      <S.InputContainer>
        <label htmlFor="name">Nome:</label>
        <Input type="text" id="name" />
      </S.InputContainer>
      <S.InputContainer>
        <label htmlFor="email">E-mail:</label>
        <Input type="text" id="email" />
      </S.InputContainer>
      <S.InputContainer>
        <label htmlFor="number">Número:</label>
        <Input type="text" id="number" />
      </S.InputContainer>
      <SaveButton>Confirmar</SaveButton>
    </S.Form>
  );
}
