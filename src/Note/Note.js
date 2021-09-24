import { useContext } from "react";
import { NoteContext } from "../NoteProvider/NoteProvider";
import { types } from "../types";
import "./Note.scss";

const Note = ({ id, content, priority, note__input, note__select }) => {
  const { notesDispatch } = useContext(NoteContext);

  const deleteNote = () => {
    notesDispatch({
      type: types.DELETE,
      payload: id,
    });
  };

  const updateNote = () => {
    if (!note__input) return;
    const updatedNote = {
      id,
      content: note__input,
      priority: note__select,
    };
    notesDispatch({
      type: types.UPDATE,
      payload: updatedNote,
    });
  };

  return (
    <div className="note">
      <p className="note__text">{content}</p>
      <span className={`note__priority note__priority--${priority}`}>
        {priority}
      </span>
      <div className="note__buttons">
        <button onClick={deleteNote} className="note__delete">
          Delete
        </button>
        <button onClick={updateNote} className="note__update">
          Update
        </button>
      </div>
    </div>
  );
};

export default Note;
