import { createSlice } from "@reduxjs/toolkit";

// Estado inicial
const initialState = {
  notes: [{ id: 1, text: "Hola soy una nota extensa creada por Jennyfer" }],
};

// Reductor
export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    setNote: (state, action) => {
      const { id, newNote } = action.payload;
      state.notes = [...state.notes, { id: id, text: newNote }]; // agrega al final
      //state.notes.unshift({ id: id, text: newNote }); // agrega al inicio
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id != action.payload); //muestra todos menos el que coincide con el id que quiero borrar
    },
  },
});

export const { setNote, deleteNote } = noteSlice.actions;

export default noteSlice.reducer;
