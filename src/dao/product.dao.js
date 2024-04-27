import productModel from '../models/product.model.js';
import Container from '../container/MongoDb.container.js';

let instance = null;

class ProductsMongo extends Container {
  constructor() {
    super(productModel);
  };

  static getInstance() {
    if (!instance) {
      instance = new ProductsMongo();
    }
    return instance
  }
};

export default ProductsMongo;