const { products } = require("../db");
const perPage = 8;
const totalPage = Math.ceil(products.size().value() / 8);

module.exports.index = (req, res) => {
  let page = +req.query.page || 1;
  page = Math.min(page, totalPage);
  page = Math.max(page, 1);

  const pagedProducts = products
    .drop((page - 1) * perPage)
    .take(perPage)
    .value();

  let startPage = Math.max(page - 2, 1);
  let endPage = Math.min(startPage + 4, totalPage);
  startPage = Math.max(endPage - 4, 1);
  res.render("products/index", { products: pagedProducts, activePage: page, startPage, endPage, totalPage });
};
