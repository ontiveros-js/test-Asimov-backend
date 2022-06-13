const { Router } = require("express");
const router = Router();
const {
  getAppointments,
  createAppointment,
  updateAppointment,
  deleteAppointment,
  getOneAppointment,
} = require("../controllers/appointment.controller");

router.route("/").get(getAppointments).post(createAppointment);

router.route("/:id").delete(deleteAppointment).put(updateAppointment);

router.route("/:d/:m/:y").get(getOneAppointment);

module.exports = router;
