import NoteForm from "./components/NoteForm/NoteForm";
import NoteList from "./components/NoteList/NoteList";
import "./NoteApp.scss";

const NoteApp = () => {
  return (
    <div className="note-app">
      <h1>Note App</h1>
      <NoteForm />
      <NoteList />
    </div>
  );
};

export default NoteApp;
