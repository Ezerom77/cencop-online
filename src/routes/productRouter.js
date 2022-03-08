const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const multer = require("multer");
const path = require("path");

// configuracion de multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/images/products"));
  },
  filename: (req, file, cb) => {
    let newFilename = Date.now() + file.originalname;
    cb(null, newFilename);
  },
});

const uploadFile = multer({ storage: storage });
/* Main routes */
router.get("/", productController.index);

// Create a product
router.get("/create", productController.add);
router.post(
  "/create",
  uploadFile.single("productImage"),
  productController.store
);
// Get one product
router.get("/detail/:id", productController.detail);

// Edit an existing product
router.get("/edit/:id", productController.edit);
router.put('/edit/:id', productController.update);

module.exports = router;
