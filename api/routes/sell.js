const Product = require('../models/Sell');

class sellRoute {
  constructor(router) {
    this.router = router;
    this.registerRoutes();
  }

  registerRoutes() {
    this.router.post("/sell", this.sellProduct.bind(this));
  }

  sellProduct(req, res, next) {
    const newProduct = new Product({
      name: req.body.productname,
      description: req.body.productDescription,
      location: req.body.location,
      quantity: req.body.quantity
    });

    newProduct.save()
    .then(product => res.json(product))
    .catch(err => console.log(err));
  }
}


export default sellRoute;
