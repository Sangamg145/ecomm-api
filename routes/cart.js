const router = require("express").Router();
const { Cart } = require("../models/cart");
const { verifyToken } = require("./verifyToken");
router.get("/cart/:id", verifyToken, async (req, res) => {
  try {
    const userId = req.params.id;
    const cart = await Cart.find({ userId })
    res.status(200)
      .json({
        success: "true",
        status_code: 200,
        message: "Ok",
        data: cart,
      });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/cart", verifyToken, async (req, res) => {
  try {
    const cart = new Cart({
        userId:req.body.userId,
      name: req.body.name,
      desc: req.body.desc,
      img: req.body.img,
      size: req.body.size,
      color: req.body.color,
      liked: req.body.liked,
    });
    const saveData = await cart.save();
    res.status(201).json({
      success: "true",
      status_code: 200,
      message: "Ok",
      data: saveData,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
