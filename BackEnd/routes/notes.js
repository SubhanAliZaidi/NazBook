const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Notes = require('../models/NoteSchema');
const { body, validationResult } = require('express-validator');

// ROUTE 1: Add a new notes using: GET "/notes/fetchnotes". Login required
router.get('/fetchnotes', fetchuser, async (req, res) => {

  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);

  }

  catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error")
  }
});




// ROUTE 2: Add a new notes using: POST "/api/auth/addnote". Login required

router.post("/addnotes", fetchuser, [

  body('title', "Enter at Least 3 Character long Title").isLength({ min: 3 }),
  body('description', "Enter at Least 5 Character Long Description").isLength({ min: 5 }),

], async (req, res) => {

  try {
    const { title, description, tag } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const note = new Notes({
      user: req.user.id,
      title,
      description,
      tag
    })

    const savednotes = await note.save();
    res.json(savednotes);

  }

  catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error")
  }

})





// ROUTE 3: Update a note using: POST "/api/auth/updatenotes". Login required

router.put('/updatenotes/:id', fetchuser, async (req, res) => {
  
  try {
    const { title, description, tag } = req.body;

    // Create A New Note
    const newNote = {};
    if (title) { newNote.title = title };
    if (description) { newNote.description = description };
    if (tag) { newNote.tag = tag };
    
    const note = Notes.findById(req.parmas.id);
    if (!note) { res.status(404).send('Not Found') };
    
    // Find Note to update it
    // const note = Notes.findByIdAndUpdate(req.user.id, newNote);
  }
  
  catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error")
  }

});

module.exports = router;

