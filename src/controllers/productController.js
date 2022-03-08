//requiers
const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

//controller
const productController = {
  index: (req, res) => {
    res.render("./products/index", {
      title: "Todos los productos",
      products: products,
    });
  },
  add: (req, res) => {
    res.render("./products/productCreate", { title: "Crear Producto Nuevo" });
  },
};

module.exports = productController;
