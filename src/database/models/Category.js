module.exports = (sequelize, dataTypes) => {
  let alias = "Categories";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    category: {
      type: dataTypes.STRING,
    }
  };
  let config = {
    tableName: "categories",
    timestamps: false,
  };
  const Category = sequelize.define(alias, cols, config);

  //las relaciones se crean despues del define
  Category.associate = function (models) {
    Category.hasMany(models.Products, {
      as: "products",
      foreignKey: "categories_PK",
    });
  }

  return Category;
};
