const Cart = require("../models/cart");

exports.addItemToCart = (req, res) => {
  Cart.find({ user: req.user._id }).exec((error, cart) => {
    if (error) return res.status(400).json({ error });
    if (cart) {
      //Cart already exists then update
      //return res.status(400).json({ message: cart });
      //this query find existing and update

      const isItemAdded = cart.cartItems.find(
        (c) => c.product == req.body.cart.product
      );

      Cart.findOneAndUpdate(
        { user: req.user._id },
        {
          $push: {
            cartItems: req.body.cartItems,
          },
        }
      ).exec((error, _cart) => {
        if (error) return res.status(400).json({ error });
        if (_cart) {
          return res.status(201).json({ cart: _cart });
        }
      });
    } else {
      //if doesnt exists the make new cart
      const cart = new Cart({
        user: req.user._id,
        cartItems: [req.body.cartItems],
      });

      cart.save((error, cart) => {
        if (error) return res.status(400).json({ error });
        if (cart) {
          return res.status(201).json({ cart });
        }
      });
    }
  });
};
