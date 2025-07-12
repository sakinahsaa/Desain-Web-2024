const Flower = require("../models/flowerModel");

exports.getAll = (req, res) => {
  Flower.getAll((err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });
    res.json(results);
  });
};

exports.getOne = (req, res) => {
  Flower.getById(req.params.id, (err, results) => {
    if (err || results.length === 0) return res.status(404).json({ message: "Flower not found" });
    res.json(results[0]);
  });
};

exports.createFlower = (req, res) => {
  const { name, description, price, image_url, video_url } = req.body;
  Flower.create({ name, description, price, image_url, video_url }, (err, result) => {
    if (err) return res.status(500).json({ message: "Insert failed" });
    res.json({ message: "Flower added", id: result.insertId });
  });
};

exports.updateFlower = (req, res) => {
  Flower.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ message: "Update failed" });
    res.json({ message: "Flower updated" });
  });
};

exports.deleteFlower = (req, res) => {
  Flower.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ message: "Delete failed" });
    res.json({ message: "Flower deleted" });
  });
};