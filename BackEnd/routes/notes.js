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




// ROUTE 2: Add a new notes using: POST "/api/notes/addnote". Login required

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





// ROUTE 3: Update a note using: PUT "/api/notes/updatenotes/id". Login required

router.put('/updatenotes/:id', fetchuser, async (req, res) => {

  try {
    const { title, description, tag } = req.body;

    // Create A New Note
    const newNote = {};
    if (title) { newNote.title = title };
    if (description) { newNote.description = description };
    if (tag) { newNote.tag = tag };

    const note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).send('Not Found')
    };

    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Request Not Allowed")
    }

    // Find Note to update it
    const notes = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });

    res.send(notes);
  }

  catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error")
  }

});





// ROUTE 4: Delete a note using: DELETE "/api/notes/updatenotes". Login required

router.delete('/deletenotes/:id', fetchuser, async (req, res) => {

  try {

    const note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).send('Not Found')
    };

    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Request Not Allowed")
    }

    // Find Note to Delete it
    Notes.findByIdAndDelete(req.params.id, (err, result) => {
      if (err) {
        res.send({'Error:': err});
      } else {
        res.send({'Deleted document:': result});
      }
    });

  }

  catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error")
  }

});

module.exports = router;

