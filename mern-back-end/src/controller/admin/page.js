const Page = require("../../models/page");
exports.createPage = (req, res) => {
  const { banners, products } = req.files;

  if (banners.length > 0) {
    banners.map((banner, index) => ({
      img: `$(process.env.API)/public/${banner.filename}`,
      navigateTo: `/bannerClicked?categoryId=${req.body.category}&type=${req.body.type}`,
    }));
  }
  if (products.length > 0) {
    products.map((product, index) => ({
      img: `$(process.env.API)/public/${products.filename}`,
      navigateTo: `/productClicked?categoryId=${req.body.category}&type=${req.body.type}`,
    }));
  }
  req.body.createdBy = req.user._id;
  const page = new Page(req.body);
  page.save((error) => {
    if (error) return res.status(400).json({ error });
  });

  if (page) {
    res.status(201).json({ page });
  }
};
