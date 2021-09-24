import { createContext, useEffect, useReducer } from "react";
import { noteReducer } from "../reducer/noteReducer";

const NoteContext = createContext();

const initState = JSON.parse(localStorage.getItem("notes")) || [];

const NoteProvider = ({ children }) => {
  const [notes, notesDispatch] = useReducer(noteReducer, initState);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const data = { notes, notesDispatch };

  return <NoteContext.Provider value={data}>{children}</NoteContext.Provider>;
};

export { NoteContext };
export default NoteProvider;
