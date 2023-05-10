import { useDispatch } from "react-redux";
import { setCurrentNote } from "../../features/reducer/notes";
import "./Notes.css"

const Note = ({ note }) => {
    const { title = null, body = null, id = null, dateCreated = null, dateModified = null } = note
    const dispatch = useDispatch();

    return id && <div className="note">
        <h3>{title}</h3>
        <p>{body}</p>
        <button type="button" onClick={() => dispatch(setCurrentNote({ id }))}>view</button>
    </div>
}
export default Note;