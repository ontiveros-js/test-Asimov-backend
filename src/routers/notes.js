const {Router} = require("express")
const router = Router()
const {getNotes,
     createNote, 
     updateNote, 
     deleteNote,
     getOneNote} = require("../controllers/notes.controller")

router.route("/")
    .get(getNotes)
    .post(createNote)

router.route("/:id")
    .get(getOneNote)
    .delete(deleteNote)
    .put(updateNote)

module.exports= router