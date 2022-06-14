// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
//categoryId comes from Product.js
Product.belongsTo(Category, {
  foreignKey: "categoryId",
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "",//what would be the foreign key here?
});

//WHAT DOES IT MEAN WHEN IT SAYS THROUGH ProductTag??
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  foreignKey:
});
// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
