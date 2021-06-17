const router = require("express").Router();
const { AmazonItem } = require("../../models");

// find Amazon Item Data
router.post("/", async(req, res) => {
    try {
        const dbLpnData = await AmazonItem.findOne({
            where: {
                lpn: req.body.lpn,
            },
        });
        if (!dbLpnData) {
            res
                .status(400)
                .json({ message: "Incorrect LPN. Please try again!" });
            return;
        }
        res.status(200).json({ data: dbLpnData, message: "You have the LPN data!" });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;