require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoutes = require("./routes/authRoutes");
const flowerRoutes = require("./routes/flowerRoutes");
const verifyToken = require("./middleware/verifyToken");

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/flowers", flowerRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
