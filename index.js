const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("🎉 API is working!");
});
// Routes
const playerRoutes = require("./routes/players");
app.use("/players", playerRoutes);

// ✅ Add this route for sanity check
app.get("/", (req, res) => {
  res.send("🎉 API is working!");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

// mongodb+srv://master4y:K5Cg81d2i5hlBhSH@master4y.faflv27.mongodb.net/?retryWrites=true&w=majority&appName=master4y