import React, { useContext } from "react";
import { NoteContext } from "../../NoteProvider/NoteProvider";
import { types } from "../../types";
import "./NoteForm.scss";

const NoteForm = () => {
  const { notesDispatch, values, handleInput, resetForm } =
    useContext(NoteContext);
  const { note__input, note__select } = values;
  const addNote = () => {
    //If there isnt a new value for the note it returns nothing.
    if (!note__input) return;
    //Prepare the new note.
    const newNote = {
      id: Date.now(),
      content: note__input,
      priority: note__select,
    };
    //Simulates Server Call, dispatch the action and reset the form.,
    setTimeout(() => {
      notesDispatch({
        type: types.ADD,
        payload: newNote,
      });
    }, 1000);
    resetForm();
  };

  const deleteAll = () => {
    //Simulates Server Call, dispatch the action and reset the form.,
    resetForm();
    setTimeout(() => {
      localStorage.setItem("notes", null);
      notesDispatch({ type: types.DELETE_ALL });
    }, 1000);
  };
  return (
    <div className="note-app__form">
      <input
        value={note__input}
        onChange={handleInput}
        type="text"
        className="note__input"
        name="note__input"
      />
      <select
        onChange={handleInput}
        value={note__select}
        name="note__select"
        className="note__select"
      >
        <option value="URGENTE"> URGENTE</option>
        <option value="NORMAL"> NORMAL</option>
        <option value="BAJA"> BAJA</option>
      </select>
      <button onClick={addNote} className="note-app__add">
        Add
      </button>
      <button className="note-app__update" onClick={deleteAll}>
        Delete All
      </button>
    </div>
  );
};

export default NoteForm;
