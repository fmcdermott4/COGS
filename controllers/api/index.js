const router = require("express").Router();

const userRoutes = require("./user-routes");
const lpnRoutes = require("./lpn-routes");
const serviceRoutes = require("./service-routes");

router.use("/users", userRoutes);
router.use("/lpn", lpnRoutes);
router.use("/service", serviceRoutes);

module.exports = router;