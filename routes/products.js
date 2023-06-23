const router = require("express").Router();
const Products = require("../models/products");

router.get("/products", async (req, res) => {
  try {
    const products = await Products.find();
    res
      .status(200)
      .json({ success: "true", status_code: 200, message: "Ok", data: products });
  } catch (error) {
    res.status(500).json(error);
    console.log('first',error)
  }
});
router.post("/products", async (req, res) => {
  try {
    const newProducts = new Products({
      category: [{name:req.body.category[0].name,desc: req.body.category[0].desc,
        img: req.body.category[0].img,}],
        items: [{name:req.body.items[0].name,desc: req.body.items[0].desc,
            img: req.body.items[0].img,}]
    });
    const saveUser = await newProducts.save();
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
