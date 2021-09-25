import { useContext } from "react";
import { NoteContext } from "../../NoteProvider/NoteProvider";
import Note from "../Note/Note";
import "./NoteList.scss";

const NoteList = ({ formVal }) => {
  const { notes } = useContext(NoteContext);
  return (
    <ul className="notes">
      {notes?.map((note) => (
        <Note key={note.id} {...note} {...formVal} />
      ))}
    </ul>
  );
};

export default NoteList;
