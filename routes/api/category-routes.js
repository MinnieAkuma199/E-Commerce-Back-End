const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint
//http://localhost:3001/api/categories

router.get("/", async (req, res) => {
  try {
    const allCategoryData = await Category.findAll();
    res.status(200).json(allCategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const filterCategory = await Category.findByPk(req.params.id, {
      //attributes IS COMING FROM INDEX.JS as what you will set as foregin key, so think what do you want here? we want everything from the product table (product.js)
      include: [{ model: Product }],
    });

    if (!filterCategory) {
      res.status(404).json({ message: "No category found with this id!" });
      return;
    }

    res.status(200).json(filterCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/", async (req, res) => {
  //create a new category.
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData[0]) {
      res.status(404).json({ message: "No category with this id!" });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a category by its `id` value
router.delete("/:id", async (req, res) => {
  const categoryData = await Category.destroy({
    where: {
      id: req.params.id, //is this correct?
    },
  });

  return res.json(categoryData);
});

module.exports = router;
