const { Schema, model } = require("mongoose");

const noteSchema = new Schema(
  {
    nombre: { type: String, required: true, trim: true },
    apellido: { type: String, required: true },
    correo: { type: String, required: true, trim: true },
    fecha: { type: String, required: true, trim: true },
    hora: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Appointment", noteSchema);
