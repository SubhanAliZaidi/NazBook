import React, {useContext, useState} from 'react';
import NoteContext from '../context/Notes/NoteContext';

export default function () {
  const context = useContext(NoteContext);
  // eslint-disable-next-line
  const { addNote } = context;

  const [notes, setnotes] = useState({
    title: '',
    tag: '',
    description: ''
  });

  const handleclick = (e) => {
    e.preventDefault();
    addNote(notes.title, notes.description, notes.tag);
  };

  const onchange = (e) => {
    setnotes({ ...notes, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className='noteui'>

        <form className='formclass col-md-4'>
          <h3 className="display-6">Add Notes</h3>
          <div className="mb-3 w-100 text-center mt-3">

            <label htmlFor="title" className="form-label">Title (Add Your Note Title)</label>
            <input type="text" className="form-control mb-2" id="title" name='title' aria-describedby="emailHelp" onChange={onchange} />

            <label htmlFor="tag" className="form-label">Tag (Add Your Note Tag , Optional)</label>
            <input type="text" className="form-control mb-2" id="tag" name='tag' aria-describedby="emailHelp" onChange={onchange} />

            <label htmlFor="description" className="form-label">Description (Add Your Notes)</label>
            <textarea className="form-control" id="description" name='description' rows="3" onChange={onchange}></textarea>

          </div>

          <button type="submit" className="btn btn-danger" onClick={handleclick}>Submit</button>
        </form>

      </div>
    </>
  )
}
