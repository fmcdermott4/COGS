const router = require("express").Router();

// Render Homepage
router.get("/", async (req,res) => {
    try{
        if(req.session.loggedIn) {
            res.render("homepage", {
                loggedIn: req.session.loggedIn,
            });
        } else {
            res.render("login")
        }
    }
    catch(err) {
        res.status(500).json(err);
    }
});

// Login route
router.get("/login", (req, res) => {
    res.render("login");
  });

// Create User route
router.get("/createuser", (req, res) => {
    res.render("createuser");
  });
module.exports = router;
