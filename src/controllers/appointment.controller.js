const AppointmentCtrl = {};
const AppointmentModel = require("../models/Appointment");

AppointmentCtrl.getAppointments = async (req, res) => {
  const appointments = await AppointmentModel.find();
  res.json(appointments);
};

AppointmentCtrl.createAppointment = async (req, res) => {
  const { nombre, apellido, correo, fecha, hora } = req.body;
  const newappointment = new AppointmentModel({
    nombre,
    apellido,
    correo,
    fecha,
    hora,
  });
  await newappointment.save();
  res.json(req.body);
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
  console.log(req.params.d + "/" + req.params.m + "/" + req.params.y);
  const oneAppointment = await AppointmentModel.find({
    fecha: req.params.d + "/" + req.params.m + "/" + req.params.y,
  });
  res.json(oneAppointment);
};

module.exports = AppointmentCtrl;
