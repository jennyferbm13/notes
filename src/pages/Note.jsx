import { useState } from "react";
import { setNote, deleteNote } from "../redux/noteReducer";
import { useDispatch, useSelector } from "react-redux";
import { PrimaryButton } from "../components/PrimaryButton";
import { SecundaryButton } from "../components/SecundaryButton";
import { Card } from "../components/Card";
import { InputText } from "../components/InputText";

const Note = () => {
  const dispatch = useDispatch();

  const [noteText, setNoteText] = useState("");

  const notes = useSelector((state) => state.note.notes);
  const handleInputChange = (text) => {
    setNoteText(text);
  };

  const newNote = () => {
    if (noteText != "") {
      dispatch(setNote({ id: Date.now(), newNote: noteText }));
      setNoteText("");
    }
  };

  const handleDeleteNote = (id) => {
    dispatch(deleteNote(id));
  };

  return (
    <div>
      <h2>Mis notas</h2>
      <InputText
        placeholder="Algo para recordar..."
        noteText={noteText}
        handleInputChange={handleInputChange}
      ></InputText>
      <PrimaryButton text="Crear" onClick={() => newNote()}></PrimaryButton>
      <div className="notes-list">
        {notes.map((note) => (
          <Card key={note.id}>
            <p>{note.text}</p>

            <SecundaryButton
              bottom={10}
              right={10}
              text="Borrar"
              onClick={() => handleDeleteNote(note.id)}
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export { Note };
