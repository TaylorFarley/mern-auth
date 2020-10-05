const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const User = require("../models/userModel");

router.get("/admin", async (req, res) => {
  res.send('heres the admin page')
});



module.exports = router;