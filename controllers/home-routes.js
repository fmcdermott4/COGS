const router = require("express").Router();

// Render Homepage
router.get("/", async (req,res) => {
    try{
        res.render("homepage", {
            loggedIn: req.session.loggedIn,
        });
    }
    catch(err) {
        res.status(500).json(err);
    }
});

// Login route
router.get("/login", (req, res) => {
    res.render("login");
  });

module.exports = router;
