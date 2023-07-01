const router = require("express").Router();
const { Products, ProductList } = require("../models/products");
router.get("/products", async (req, res) => {
  try {
    const products = await Products.find();
    res.status(200)
      .json({
        success: "true",
        status_code: 200,
        message: "Ok",
        data: products,
      });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/product-list", async (req, res) => {
    try {
      const productList = await ProductList.find();
      res.status(200)
        .json({
          success: "true",
          status_code: 200,
          message: "Ok",
          data: productList,
        });
    } catch (error) {
      res.status(500).json(error);
    }
  });

router.post("/products", async (req, res) => {
  try {
    const newProducts = new Products({
      name: req.body.name,
      desc: req.body.desc,
      img: req.body.img,
      size: req.body.size,
      color: req.body.color,
      liked: req.body.liked,
    });
    const saveUser = await newProducts.save();
    res.status(201).json({
      success: "true",
      status_code: 200,
      message: "Ok",
      data: saveUser,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/product-list", async (req, res) => {
    try {
      const newProductList = new Products({
        name: req.body.name,
        desc: req.body.desc,
        img: req.body.img,
        category: req.body.category
      });
      const saveUser = await newProductList.save();
      res.status(201).json({
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
