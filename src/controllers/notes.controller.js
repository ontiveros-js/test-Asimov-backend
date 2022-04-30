const noteCtrl = {}
const NoteModel = require("../models/Notes")

noteCtrl.getNotes = async (req , res) => {
    const notes = await NoteModel.find()
     res.json(notes)
}

noteCtrl.createNote = async (req, res) => {
    const {title , description, author, date} = req.body
    const newNote = new NoteModel({title, description, author, date})
    await newNote.save()
    res.json(req.body)
}

noteCtrl.updateNote = async (req, res) => {
    const {title, description, author, date} = req.body
    const noteEdited = await NoteModel.findByIdAndUpdate(req.params.id, {title, description, author, date}).lean()
    res.json(noteEdited)
}

noteCtrl.deleteNote = async (req, res) => {
    await NoteModel.findByIdAndDelete(req.params.id)
    res.json("note deleted")
}

noteCtrl.getOneNote = async (req, res) => {
    const oneNote = await NoteModel.findById(req.params.id)
    res.json(oneNote)
}

module.exports = noteCtrl