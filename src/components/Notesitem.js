import React, {useContext} from 'react';
import NoteContext from '../context/Notes/NoteContext';

export default function Notesitem(props) {
  const note = props.note
  const {deleteNote, updateNote} = useContext(NoteContext)
  return (
    <>
      <div className="card col-md-4 bg-danger text-white ">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="card-title">{note.title}</h5>
            <div>
              <i className="fa-solid fa-trash me-3" onClick={()=>{deleteNote(note._id)}}></i>
              <i className="fa-solid fa-pen-to-square" onClick={()=>{updateNote(note._id)}}></i>
            </div>
          </div>
          <p className="card-text mt-3">{note.description }</p>
        </div>
      </div>
    </>
  )
}
