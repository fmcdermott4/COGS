const router = require("express").Router();

const userRoutes = require("./user-routes");
const lpnRoutes = require("./lpn-routes");

router.use("/users", userRoutes);
router.use("/lpn", lpnRoutes);

module.exports = router;