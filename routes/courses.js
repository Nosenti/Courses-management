const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Course = require("../models/Course");
const Sequelize = require("sequelize");
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
