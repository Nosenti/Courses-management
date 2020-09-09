import express from "express";
const router = express.Router();
import Sequelize from "sequelize";
const Op = Sequelize.Op;

router.get("/", (req, res) => {
  // Course.findAll()
  //   .then(
  //     (courses) => {
  //     res.send(courses);
  //     res.status(200);
  //   })
  //   .catch((err) => console.log(err));
  res.send("A list of Courses");
});
module.exports = router;
