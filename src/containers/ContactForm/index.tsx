import { Input, SaveButton } from "../../styles";
import * as S from "./styles";

type Props = {
  formTitle: string;
};

export default function ContactForm({ formTitle }: Props) {
  return (
    <S.FormContainer>
      <h2>{formTitle}</h2>
      <S.Form>
        <S.InputContainer>
          <label htmlFor="name">Nome:</label>
          <Input required type="text" id="name" />
        </S.InputContainer>
        <S.InputContainer>
          <label htmlFor="email">E-mail:</label>
          <Input required type="email" id="email" />
        </S.InputContainer>
        <S.InputContainer>
          <label htmlFor="number">Número:</label>
          <Input required type="tel" id="number" />
        </S.InputContainer>
        <SaveButton type="submit">Confirmar</SaveButton>
      </S.Form>
    </S.FormContainer>
  );
}
