import NoteApp from "./NoteApp";
import NoteProvider from "./NoteProvider/NoteProvider";

function AppWrapper() {
  return (
    <NoteProvider>
      <NoteApp />
    </NoteProvider>
  );
}

export default AppWrapper;
