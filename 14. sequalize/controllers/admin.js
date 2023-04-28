const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
  });
};

exports.postAddProduct = async (req, res, next) => {
  const { title, imageUrl, description, price } = req.body;
  try {
    await Product.create({
      title,
      imageUrl,
      description,
      price,
    });
    res.redirect("/");
  } catch (error) {
    console.error(err);
  }
};

exports.getEditProduct = async (req, res) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const prodId = req.params.productId;
  try {
    const product = await Product.findAll({
      where: {
        id: prodId,
      },
    });

    res.render("admin/edit-product", {
      pageTitle: "Edit Product",
      path: "/admin/edit-product",
      editing: editMode,
      product: product[0],
    });
  } catch (error) {
    console.error(error);
  }
};

exports.postEditProduct = async (req, res) => {
  const { productId, description, price, imageUrl, title } = req.body;
  try {
    await Product.update(
      {
        title,
        imageUrl,
        description,
        price,
      },
      {
        where: {
          id: productId,
        },
      }
    );
    res.redirect("/admin/products");
  } catch (error) {
    console.error(error);
  }
};

exports.postDeleteProduct = async (req, res, next) => {
  const { productId } = req.params;
  try {
    await Product.destroy({
      where: {
        id: productId,
      },
    });
    res.redirect("/");
  } catch (error) {
    console.error(error);
  }
};

exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      path: "/admin/products",
    });
  } catch (error) {
    console.error(error);
  }
};
