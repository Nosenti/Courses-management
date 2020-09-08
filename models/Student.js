const Sequelize = require("sequelize");
const db = require("../config/database");

const Course = db.define("course", {
  name: {
    type: Sequelize.STRING,
  },
  content: {
    type: Sequelize.STRING,
  },
});
module.exports = Course;
