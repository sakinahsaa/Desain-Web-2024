const db = require("./db");
const User = {
  findByEmail: (email, cb) => {
    db.query("SELECT * FROM users WHERE email = ?", [email], cb);
  },
  create: (data, cb) => {
    db.query("INSERT INTO users SET ?", data, cb);
  },
};
module.exports = User;