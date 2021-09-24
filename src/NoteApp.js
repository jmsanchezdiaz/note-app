import React, { useContext } from "react";
import NoteList from "./components/NoteList/NoteList";
import "./NoteApp.scss";
import { NoteContext } from "./NoteProvider/NoteProvider";
import { types } from "./types";
import { useForm } from "./hooks/useForm";

const NoteApp = () => {
  const { notesDispatch } = useContext(NoteContext);
  const [values, handleInput, resetForm] = useForm({
    note__input: "",
    note__select: "URGENTE",
  });

  const addNote = () => {
    if (!values.note__input) return;
    const newNote = {
      id: Date.now(),
      content: values.note__input,
      priority: values.note__select,
    };
    notesDispatch({
      type: types.ADD,
      payload: newNote,
    });
  };

  const deleteAll = () => {
    resetForm();
    localStorage.setItem("notes", null);
    notesDispatch({ type: types.DELETE_ALL });
  };

  return (
    <div className="note-app">
      <h1>Note App</h1>
      <div className="note-app__form">
        <input
          value={values.note__input}
          onChange={handleInput}
          type="text"
          className="note__input"
          name="note__input"
        />
        <select
          onChange={handleInput}
          value={values.note__select}
          name="note__select"
          className="note__select"
        >
          <option value="URGENTE"> URGENTE</option>
          <option value="NORMAL"> NORMAL</option>
          <option value="BAJA"> BAJA</option>
        </select>
        <button onClick={addNote} class="note-app__add">
          Add
        </button>
        <button className="note-app__update" onClick={deleteAll}>
          Delete All
        </button>
      </div>
      <NoteList formVal={values} />
    </div>
  );
};

export default NoteApp;
