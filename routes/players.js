const express = require("express");
const router = express.Router();
const Player = require("../models/Player");

// Get all players
router.get("/", async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch players" });
  }
});

// Add a new player
router.post("/", async (req, res) => {
  try {
    const newPlayer = new Player(req.body);
    await newPlayer.save();
    res.status(201).json(newPlayer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update a player (e.g. status)
router.put("/:id", async (req, res) => {
  try {
    const player = await Player.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
    if (!player) return res.status(404).json({ error: "Player not found" });
    res.json(player);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
