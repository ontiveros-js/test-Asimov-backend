const { Schema, model} = require("mongoose")

const noteSchema = new Schema({
    title: {type: String, required: true, trim: true},
    description: {type: String, required: true},
    author:{type: String, required: true, trim: true},
    date:{type: String}
},{
    timestamps: true
})

module.exports = model("Note", noteSchema)