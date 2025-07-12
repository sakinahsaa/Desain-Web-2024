const db = require("./db");

const Flower = {
  getAll: (cb) => {
    db.query("SELECT * FROM flowers", cb);
  },
  getById: (id, cb) => {
    db.query("SELECT * FROM flowers WHERE id = ?", [id], cb);
  },
  create: (data, cb) => {
    db.query("INSERT INTO flowers SET ?", [data], cb);
  },
  update: (id, data, cb) => {
    db.query("UPDATE flowers SET ? WHERE id = ?", [data, id], cb);
  },
  delete: (id, cb) => {
    db.query("DELETE FROM flowers WHERE id = ?", [id], cb);
  },
};

module.exports = Flower;