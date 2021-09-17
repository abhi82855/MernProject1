const router = require("express").Router();
const shortid = require("shortid");
const Product = require("../models/product");
const slugify = require("slugify");
const Category =require("../models/category");

exports.createProduct = (req, res) => {
  const { name, price, description, category, quantity, createdBy } = req.body;
  let productPictures = [];

  if (req.files.length > 0) {
    productPictures = req.files.map((file) => {
      return { img: file.filename };
    });
  }

  const product = new Product({
    name: name,
    slug: slugify(name),
    price,
    quantity,
    description,
    productPictures,
    category,
    createdBy: req.user._id,
  });

  product.save((error, product) => {
    if (error) return res.status(400).json({ error });
    if (product) {
      res.status(201).json({ product, files: req.files });
    }
  });
};

//RUD apis delete in future

exports.getProducts = (req, res) => {
  Product.find({}).exec((error, products) => {
    if (error) return res.status(400).json({ error });
    if (products) {
      if (products) {
        res.status(200).json({ products });
      }
    }
  });
};

exports.deleteProduct = (req, res) => {
  Prodcut.findOneAndDelete({ _id: req.params.id }, (err, product) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!product) {
      return res.status(404).json({ success: false, error: `Movie not found` });
    }

    return res.status(200).json({ success: true, data: product });
  }).catch((err) => console.log(err));
};

exports.updateProduct = (req, res) => {
  Product.findOne({ _id: req.params.id }, (err, product) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Not found!",
      });
    }
    product.name = body.name;
    product.price = body.price;
    product.quantity = body.quantity;
    product.description = body.description;
    product.category = body.category;
    product.save();
    // .then(() => {
    //   return res.status(200).json({
    //     success: true,
    //     id: product._id,
    //     message: "Product updated!",
    //   });
    // })
    // .catch((error) => {
    //   return res.status(404).json({
    //     error,
    //     message: "Product not updated!",
    //   });
    // });
  });
};


exports.getProductsBySlug=(req,res)=>{
  const {slug}=req.params;
  Category.findOne({slug:slug})
  .select('_id')
  .exec((error,category)=>{
    if(error)
    {
      return res.status(404).json({error})
    }
    else
    {
      res.status(200).json({category})
    }
  })
   
}


// add by nitish
// exports.getProductsBySlug = (req, res) => {
//   const { slug } = req.params;
//   Category.findOne({ slug: slug })
//     .select("_id type")
//     .exec((error, category) => {
//       if (error) {
//         return res.status(400).json({ error });
//       }

//       if (category) {
//         Product.find({ category: category._id }).exec((error, products) => {
//           if (error) {
//             return res.status(400).json({ error });
//           }

//           if (category.type) {
//             if (products.length > 0) {
//               res.status(200).json({
//                 products,
//                 priceRange: {
//                   under5k: 5000,
//                   under10k: 10000,
//                   under15k: 15000,
//                   under20k: 20000,
//                   under30k: 30000,
//                 },
//                 productsByPrice: {
//                   under5k: products.filter((product) => product.price <= 5000),
//                   under10k: products.filter(
//                     (product) => product.price > 5000 && product.price <= 10000
//                   ),
//                   under15k: products.filter(
//                     (product) => product.price > 10000 && product.price <= 15000
//                   ),
//                   under20k: products.filter(
//                     (product) => product.price > 15000 && product.price <= 20000
//                   ),
//                   under30k: products.filter(
//                     (product) => product.price > 20000 && product.price <= 30000
//                   ),
//                 },
//               });
//             }
//           } else {
//             res.status(200).json({ products });
//           }
//         });
//       }
//     });
// };