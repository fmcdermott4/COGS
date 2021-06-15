const router = require("express").Router();
const { ArcUser } = require("../../models");

// CREATE new user
router.post("/createuser", async(req, res) => {
    try {
        const dbUserData = await ArcUser.create({
            username: req.body.username,
            password: req.body.password,
        });
        res.status(200).json(dbUserData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Login
router.post("/login", async(req, res) => {
    try {
        const dbUserData = await ArcUser.findOne({
            where: {
                username: req.body.username,
            },
        });
        if (!dbUserData) {
            res
                .status(400)
                .json({ message: "Incorrect username or password. Please try again!" });
            return;
        }

        const validPassword = await dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: "Incorrect username or password. Please try again!" });
            return;
        };



        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json({ user: dbUserData, message: "You are now logged in!" });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Logout
router.post("/logout", (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;