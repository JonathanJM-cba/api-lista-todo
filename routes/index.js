const express = require("express");
const router = express.Router();

router.use("/auth", require("./authRoute"));
router.use("/task", require("./taskRoute"));

module.exports = router;
