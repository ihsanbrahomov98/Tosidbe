const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  status: { type: String, enum: ["online", "offline"], default: "online" },
});

module.exports = mongoose.model("Player", playerSchema);
