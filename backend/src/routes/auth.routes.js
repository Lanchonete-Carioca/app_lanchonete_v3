const express = require("express");

const router = express.Router();

<<<<<<< HEAD
const authService = require(
  "../services/auth.service"
);

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await authService.login(
      email,
      password
    );

    res.json(result);
  } catch (error) {
    res.status(401).json({
      error: error.message
    });
  }
=======
router.post("/login", (req, res) => {
  res.json({
    message: "Login realizado com sucesso"
  });
>>>>>>> 8b6f417d58e6c712089b0e8095fa1b647d18cb73
});

module.exports = router;