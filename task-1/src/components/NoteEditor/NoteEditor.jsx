import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, clearCurrentNote, deleteNote, updateNote } from "../../features/reducer/notes";

const NoteEditor = () => {
    const dispatch = useDispatch()
    const currentNote = useSelector(state => state.notes.currentNote);

    const [note, setNote] = useState({ title: "", body: "" });
    const [isDisabled, setDisabled] = useState(false);
    const [isEdit, setEdit] = useState(false);

    useEffect(() => {
        if (currentNote.id) {
            setNote(currentNote)
            setDisabled(true);
        }
    }, [currentNote])

    const editHandler = () => {
        setEdit(true)
        setDisabled(false)
    }
    const updateHandler = () => {
        setEdit(false)
        setDisabled(true)
        dispatch(updateNote({ id: note.id, ...note }))
    }
    const addHandler = () => {
        dispatch(addNote({ title: note.title, body: note.body }))
        setNote({ title: "", body: "" })
    }
    const deleteHandler = () => {
        setEdit(false)
        setDisabled(false)
        dispatch(deleteNote({ id: note.id }))
        dispatch(clearCurrentNote())
        setNote({ title: "", body: "" })
    }
    const addNewHandler = () => {
        setEdit(false)
        setDisabled(false)
        dispatch(clearCurrentNote())
        setNote({ title: "", body: "" })
    }
    const changeHandler = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return <div className="note-form">
        {note.id && isDisabled && <button className="button" type="button" onClick={addNewHandler}>Add New</button>}

        <label className="note-label">Title</label>
        <br />
        <input
            placeholder="Enter title"
            value={note.title}
            disabled={isDisabled}
            required
            name="title"
            onChange={changeHandler}
            className="input-text"
        />
        <br />
        <br />
        <label className="note-label">body</label>
        <br />
        <textarea
            placeholder="Enter body"
            value={note.body}
            disabled={isDisabled}
            name="body"
            required
            onChange={changeHandler}
            className="input-area"
        />
        <br />
        {!note.id && <button className="button" type="button" onClick={addHandler}>Add</button>}
        {note.id && !isEdit && <button className="button" type="button" onClick={editHandler}>Edit</button>}
        {note.id && isEdit && <button className="button" type="button" onClick={updateHandler}>Update</button>}
        {note.id && !isEdit && <button className="button" type="button" onClick={deleteHandler}>delete</button>}

    </div>
}
export default NoteEditor;