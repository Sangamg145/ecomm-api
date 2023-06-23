const router = require("express").Router();
const Banner = require("../models/banner");

router.get("/banner", async (req, res) => {
  try {
    const banner = await Banner.find();
    res
      .status(200)
      .json({ success: "true", status_code: 200, message: "Ok", data: {banner} });
  } catch (error) {
    res.status(500).json(error);
  }
});
router.post("/banner", async (req, res) => {
  try {
    const newBanner = new Banner({
      name: req.body.name,
      desc: req.body.desc,
      img: req.body.img,
    });
    const saveUser = await newBanner.save();
    res
      .status(201)
      .json({
        success: "true",
        status_code: 200,
        message: "Ok",
        data: saveUser,
      });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
