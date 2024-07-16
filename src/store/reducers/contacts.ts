import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactType } from "../../components/Contact";

export type ContactsState = {
  contacts: ContactType[];
};

const initialState: ContactsState = {
  contacts: [
    { name: "Kayky", email: "kayky@gmail.com", telephone: "31 99088984" },
    { name: "pedro", email: "pedro@gmail.com", telephone: "31 99768984" },
    { name: "victor", email: "victor@gmail.com", telephone: "31 98088184" },
    { name: "Marcos", email: "victor@gmail.com", telephone: "31 91188984" },
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
    remove: (state, action: PayloadAction<ContactType>) => {
      const contact = action.payload;
      const confirmation = confirm(
        `Deseja remover o contato: ${contact.name} - ${contact.telephone} - ${contact.email}? `
      );

      if (confirmation) {
        state.contacts = state.contacts.filter(
          (c) => c.telephone !== contact.telephone
        );
      }
    },
  },
});

export const { add, remove } = contactsSlice.actions;
export default contactsSlice.reducer;
