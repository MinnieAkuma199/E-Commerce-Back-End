// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

//ASSOCIATIONS

// Products belongsTo Category
//categoryId comes from Product.js
Product.belongsTo(Category, {
  foreignKey: "category_id",
});
// without the hasmany a category could NOT have multiple products
// Categories has many of this products so more than one product could reference this category_id
Category.hasMany(Product, {
  foreignKey: "category_id",
});

// Products belongToMany Tags (through ProductTag)
//We are saying here a tag can belong to multiple products

//tag_id is from ProductTag.js
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "product_id",
});
// A product could have more than one tag
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id",
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
