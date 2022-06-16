const AppointmentCtrl = {};
const AppointmentModel = require("../models/Appointment");

AppointmentCtrl.createAppointment = async (req, res) => {
  const { nombre, apellido, correo, fecha, hora } = req.body;

  const verification = await AppointmentModel.find({
    fecha: fecha,
    nombre: nombre,
    apellido: apellido,
  });

  if (verification.length) {
    res.status(202).json();
  } else {
    const newappointment = new AppointmentModel({
      nombre,
      apellido,
      correo,
      fecha,
      hora,
    });
    await newappointment.save();
    res.json(req.body);
  }
};

AppointmentCtrl.updateAppointment = async (req, res) => {
  const { nombre, apellido, correo, fecha, hora } = req.body;
  const appointmentEdited = await AppointmentModel.findByIdAndUpdate(
    req.params.id,
    {
      nombre,
      apellido,
      correo,
      fecha,
      hora,
    }
  ).lean();
  res.json(appointmentEdited);
};

AppointmentCtrl.deleteAppointment = async (req, res) => {
  await AppointmentModel.findByIdAndDelete(req.params.id);
  res.json("note deleted");
};

AppointmentCtrl.getOneAppointment = async (req, res) => {
  const oneAppointment = await AppointmentModel.find({
    fecha: req.params.id,
  });
  res.json(oneAppointment);
};

module.exports = AppointmentCtrl;
