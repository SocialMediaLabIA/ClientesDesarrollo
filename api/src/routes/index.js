const express = require("express");
const { Router } = require("express");
const { getAllAdmin } = require("../controllers/Admin/getAllAdmin");
const { getAllClient } = require("../controllers/Client/getAllClient");
const { postAdmin } = require("../controllers/Admin/postAdmin");
const { postClient } = require("../controllers/Client/postClient");
const router = Router();

router.use(express.json());

// Find all Admin
router.get("/get-admin", async (req, res) => {
  try {
    const allAdmin = await getAllAdmin();
    res.status(200).json(allAdmin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//Create Admin
router.post("/post-admin", async (req, res) => {
  try {
    const { name } = req.body;

    const newAdmin = await postAdmin(name);
    return res.status(201).json(newAdmin);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// Find all Client
router.get("/get-client", async (req, res, next) => {
  try {
    const allClient = await getAllClient();
    return res.json(allClient);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

//Create Client
router.post("/post-client", async (req, res) => {
  try {
    const { name } = req.body;

    const newClient = await postClient(name);
    return res.status(201).json(newClient);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
