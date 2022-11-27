import Heading from "./Heading";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";

function createNote (note){
  return <Note  title={note.title}
                content={note.content}
          />
}

function App() {
  return (
    <div><header><Heading/></header>
        {notes.map(createNote)}
        <footer><Footer/></footer>
    </div>
  );
}

export default App;
