require("dotenv").config();
module.exports = {
  development: {
    database: "coursesmanagementdb",
    use_env_variables: "DB_DEV_URL",
    dialect: "postgres",
  },
  test: {
    database: "coursesmanagementdb",
    use_env_variables: "DB_DEV_URL",
    dialect: "postgres",
  },
};
