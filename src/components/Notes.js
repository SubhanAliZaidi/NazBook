import React, {useContext, useEffect} from 'react'
import NoteContext from '../context/Notes/NoteContext';
import Notesitem from './Notesitem.js';
import AddNote from './AddNote.js';

export default function Notes() {

  const context = useContext(NoteContext);
  const { notes, getNote} = context;
  useEffect(() => {
    getNote();
    // eslint-disable-next-line
  }, []);
  
  return (
    <>
      <AddNote/>

      <div className='noteui1'>
        <h2 className='text-center mb-4'>Your Notes</h2>
        <div className='d-flex align-items-center justify-content-center flex-wrap gap-3'>
          {notes.map((note) => {
            return (
              <Notesitem key={note._id} note={note} />
            )
          })}
        </div>
      </div>
    </>
  )
}
