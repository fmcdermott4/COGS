const router = require("express").Router();
const { AmazonService } = require("../../models");

// find Amazon Item Data

router.post("/", async(req, res) => {
    try {
        const dbServiceData = await AmazonService.findOne({
            where: {
                subcat: req.body.subcat,
            },
        });
        if (!dbServiceData) {
            res
                .status(400)
                .json({ message: "Incorrect service. Please try again!" });
            return;
        }
        res.json({
            data: dbServiceData
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;