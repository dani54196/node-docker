const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "holitas" });
});

module.exports = router;
