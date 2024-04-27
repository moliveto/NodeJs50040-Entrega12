import cartModel from '../models/carts.model.js';
import Container from '../container/MongoDb.container.js';

let instance = null;

class CartMongo extends Container {
    constructor() {
        super(cartModel);
    };

    static getInstance() {
        if (!instance) {
            instance = new CartMongo();
        }
        return instance
    }
};

export default CartMongo;