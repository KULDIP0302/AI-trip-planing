//user model
//this file is responsible for interacting with the user table.

//import database
const db = require("../config/db");

//create new user
const createUser = (userData, callback) => {
  const sql =
    "INSERT INTO users(full_name,email,password,role) VALUES(?,?,?,?)";

  db.query(
    sql,
    [userData.full_name, userData.email, userData.password, userData.role],
    callback,
  );
};

//find the user by email
const findUserByEmail = (email, callback) => {
  const sql = "SELECT * FROM users WHERE email=?";
  db.query(sql, [email], callback);
};

const getUserById = (id, callback) => {
  const sql = "SELECT * FROM users WHERE id=?";
  db.query(sql, [id], callback);
};
//export functions
module.exports = {
  createUser,
  findUserByEmail,
  getUserById,
};
