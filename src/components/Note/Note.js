import { useContext } from "react";
import { NoteContext } from "../../NoteProvider/NoteProvider";
import { types } from "../../types";
import "./Note.scss";

const Note = ({ id, content, priority }) => {
  const { notesDispatch, values, handleInput, resetForm } =
    useContext(NoteContext);
  const { note__input, note__select } = values;
  const deleteNote = () => {
    //Simulates Server Call, dispatch the action and reset the form.,
    setTimeout(
      () =>
        notesDispatch({
          type: types.DELETE,
          payload: id,
        }),
      1000
    );
  };

  const updateNote = () => {
    //Set the item content to input value
    handleInput({
      target: {
        name: "note__input",
        value: content,
      },
    });

    //Gets the input and force focus event.
    const input = document.querySelector(".note__input");
    input.focus();

    //If there isnt a new value for the note it returns nothing.
    if (!note__input) return;

    //The updated note.
    const updatedNote = {
      id,
      content: note__input,
      priority: note__select,
    };

    //Simulates Server Call, dispatch the action and reset the form.,
    setTimeout(
      () =>
        notesDispatch({
          type: types.UPDATE,
          payload: updatedNote,
        }),
      1000
    );
    resetForm();
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
