const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
const PORT = 5000;

// Connect to MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const playerRoutes = require("./routes/players");
app.use("/players", playerRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});


// mongodb+srv://master4y:K5Cg81d2i5hlBhSH@master4y.faflv27.mongodb.net/?retryWrites=true&w=majority&appName=master4y