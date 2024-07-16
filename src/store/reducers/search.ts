import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: { word: "" },
  reducers: {
    changeWord: (state, action: PayloadAction<string>) => {
      state.word = action.payload;
    },
  },
});

export const { changeWord } = searchSlice.actions;
export default searchSlice.reducer;
