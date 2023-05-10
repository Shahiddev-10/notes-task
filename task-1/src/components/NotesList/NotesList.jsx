import { useSelector } from "react-redux";
import Note from "../Note/Notes";
import "./NotesList.css"

const NotesList = () => {
    const notes = useSelector(state => state.notes.list)
    console.log("notes",notes)
    return <div className="notes-list-main">
        <h2 className="list-title">Notes</h2>
        <div className="list">
            {notes?.map(note => <Note note={note} key={note.id}/>)}
        </div>
    </div>
}
export default NotesList;