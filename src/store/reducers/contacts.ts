import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactType } from "../../components/Contact";

export type ContactsState = {
  contacts: ContactType[];
};

const initialState: ContactsState = {
  contacts: [
    { name: "Kayky", email: "kayky@gmail.com", telephone: "31 99088984" },
    { name: "pedro", email: "pedro@gmail.com", telephone: "31 99088984" },
    { name: "victor", email: "victor@gmail.com", telephone: "31 99088984" },
    { name: "Marcos", email: "victor@gmail.com", telephone: "31 99088984" },
  ],
};

const contactsSlice = createSlice({
  name: "contactsList",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ContactType>) => {
      const contact = action.payload;
      if (
        state.contacts.find(
          ({ email, telephone }) =>
            email === contact.email || telephone === contact.telephone
        )
      ) {
        alert("Erro: email ou número já existente na lista de contatos");
      } else {
        state.contacts.push(contact);
        alert(contact.name + " foi adicionado");
      }
    },
  },
});

export const { add } = contactsSlice.actions;
export default contactsSlice.reducer;
