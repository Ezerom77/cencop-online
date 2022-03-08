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
  store: (req, res) => {
    idNuevo = 0;

    for (let s of products) {
      if (idNuevo < s.id) {
        idNuevo = s.id;
      }
    }

    idNuevo++;

    let nombreImagen = req.file.filename;

    let productoNuevo = {
      id: idNuevo,
      name: req.body.productName,
      description: req.body.productDescription,
      categories: req.body.productCategorie,
      pages: req.body.productPages,
      stock: req.body.productStock,
      image: nombreImagen,
    };

    products.push(productoNuevo);

    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));

    res.redirect("/products");
  },
  detail: (req, res) => {
    let productoSeleccionado = null;
    for (i = 0; i < products.length; i++) {
      if (req.params.id == products[i].id) {
        productoSeleccionado = products[i];
      }
    }
    res.render("./products/productDetail", {
      title: "Detalle de producto",
      productDetail: productoSeleccionado,
    });
  },
  // Edit Method
  edit: (req, res) => {
    let id = req.params.id;
    let productoEncontrado = null;
    for (let s of products) {
      if (id == s.id) {
        productoEncontrado = s;
      }
    }
    res.render("./products/productEdit", {
      title: "Editar Producto",
      ProductoaEditar: productoEncontrado,
    });
  },
  update: (req, res) => {
    let id = req.params.id;
    for (let s of products) {
      if (id == s.id) {
        s.name = req.body.productName;
        s.description = req.body.productDescription;
        s.categories = req.body.categorias;
        s.pages = req.body.productPages;
        s.stock = req.body.productStock;
        break;
      }
    }
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
    res.redirect("/");
  },
  delete: (req, res) => {
    let id = req.params.id;
    let ProductoEncontrado = null;

    let Nproducts = products.filter(function (e) {
      return id != e.id;
    });

    for (let producto of products) {
      if (producto.id == id) {
        ProductoEncontrado = producto;
      }
    }

    fs.unlinkSync(
      path.join(
        __dirname,
        "../../public/images/products/",
        ProductoEncontrado.image
      )
    );

    fs.writeFileSync(productsFilePath, JSON.stringify(Nproducts, null, " "));

    res.redirect("/products");
  },
};

module.exports = productController;
