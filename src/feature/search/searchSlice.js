// searchSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchString: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchString: (state, action) => {
      state.searchString = action.payload;
    },
  },
});

export const { setSearchString } = searchSlice.actions;

export default searchSlice.reducer;
