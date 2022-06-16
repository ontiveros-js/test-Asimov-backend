const { Router } = require("express");
const router = Router();
const {
  createAppointment,
  updateAppointment,
  deleteAppointment,
  getOneAppointment,
} = require("../controllers/appointment.controller");

router.route("/").post(createAppointment);

router
  .route("/:id")
  .delete(deleteAppointment)
  .put(updateAppointment)
  .get(getOneAppointment);

module.exports = router;
