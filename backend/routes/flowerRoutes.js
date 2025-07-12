const express = require("express");
const router = express.Router();
const flowerController = require("../controllers/flowerController");
const verifyToken = require("../middleware/verifyToken");

router.get("/", flowerController.getAll); // semua user bisa lihat bunga
router.get("/:id", flowerController.getOne); // lihat bunga per id

// hanya admin yang bisa tambah/edit/hapus
router.post("/", verifyToken("admin"), flowerController.createFlower);
router.put("/:id", verifyToken("admin"), flowerController.updateFlower);
router.delete("/:id", verifyToken("admin"), flowerController.deleteFlower);

module.exports = router;
