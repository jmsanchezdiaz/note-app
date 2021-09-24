import { useContext } from "react";
import Note from "../../Note/Note";
import { NoteContext } from "../../NoteProvider/NoteProvider";

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
