import { createContext, useEffect, useReducer } from "react";
import { useForm } from "../hooks/useForm";
import { noteReducer } from "../reducer/noteReducer";

const NoteContext = createContext();

const initState = JSON.parse(localStorage.getItem("notes")) || [];

const NoteProvider = ({ children }) => {
  const [notes, notesDispatch] = useReducer(noteReducer, initState);
  const [values, handleInput, resetForm] = useForm({
    note__input: "",
    note__select: "URGENTE",
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const data = { notes, notesDispatch, values, handleInput, resetForm };

  return <NoteContext.Provider value={data}>{children}</NoteContext.Provider>;
};

export { NoteContext };
export default NoteProvider;
