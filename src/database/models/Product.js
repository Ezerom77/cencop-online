module.exports = (sequelize, dataTypes) => {
  let alias = "Products";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    image: {
      type: dataTypes.STRING,
    },
    name: {
      type: dataTypes.STRING,
    },
    description: {
      type: dataTypes.STRING,
    },
    pages: {
      type: dataTypes.INTEGER,
    },
    categories_PK: {
      type: dataTypes.INTEGER,
    },
    stock: {
      type: dataTypes.INTEGER,
    }
  };
  let config = {
    tableName: "products",
    timestamps: false,
  };
  const Product = sequelize.define(alias, cols, config);
//las relaciones se crean despues del define
Product.associate = function (models) {
Product.belongsTo(models.Categories, {
  as: "categories",
  foreignKey: "categories_PK",
})
};
  return Product;
};
