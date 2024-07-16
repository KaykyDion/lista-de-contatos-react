import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactType } from "../../components/Contact";

export type ContactsState = {
  contacts: ContactType[];
};

const initialState: ContactsState = {
  contacts: [],
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
        state.contacts = state.contacts.filter((c) => c.id !== contact.id);
      }
    },
    edit: (state, action: PayloadAction<ContactType>) => {
      const contact = action.payload;
      const index = state.contacts.findIndex((c) => c.id === contact.id);
      alert("Contato editado com sucesso!");

      state.contacts[index] = contact;
    },
  },
});

export const { add, remove, edit } = contactsSlice.actions;
export default contactsSlice.reducer;
