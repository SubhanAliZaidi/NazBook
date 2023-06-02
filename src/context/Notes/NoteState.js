import NoteContext from "./NoteContext.js";
import { useState } from "react";

const NoteState = (props) => {

  const host = 'http://localhost:5000'
  const authtoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2YzZhYzkyNzMyN2I2MTI5NjAwYzlmIn0sImlhdCI6MTY4NDgyNjg1OX0.Kx_5z1eRN38cKeEY9sTUN5sAU18egqzaLsGKnJKX42U";
  const notesinitial = []

  const [notes, setNotes] = useState(notesinitial)





  // Get Note
  const getNote = async () => {
    const url = `${host}/api/notes/fetchnotes`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authtoken
      },
    });

    const json = await response.json();
    console.log(json)

    setNotes(json);
  };
    





  // Create Note
  const addNote = async (title, description, tag) => {
    const url = `${host}/api/notes/addnotes`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authtoken
      },
      body: JSON.stringify({title, description, tag}),
    });

    getNote();
    const json = await response.json();
    console.log(json)
  };
  




  // Update Note
  const updateNote = async (id, title, description,tag) => {
    const url = `${host}/api/notes/updatenotes/${id}`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authtoken
      },
      body: JSON.stringify({title, description, tag}),
    });

    console.log(response.json());
    
    // Login To edit in client
    for (let index = 0; index < notes.length; index++) {
      
      const element = notes[index];
      if (element._id === id) {
        element.title = title   
        element.description = description   
        element.tag = tag   
      }
    }
    
  };
  





  // Delete Note
  const deleteNote = async (id) => {
    const url = `${host}/api/notes/deletenotes/${id}`;

    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authtoken
      },
    });

    // const filteredPeople = notes.filter((item) => {return item._id !== id});
    // setNotes(filteredPeople);
    getNote();

    const json = await response.json();
    console.log(json)
    
  };





  return (
    <NoteContext.Provider value={{notes, addNote, updateNote, deleteNote, getNote}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;