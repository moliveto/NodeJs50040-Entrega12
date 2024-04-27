import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const cartSchema = new mongoose.Schema({
    products: {
        type: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "products",
                    required: true
                },
                quantity: { type: Number, default: 1 },
                closed: { type: Boolean, default: false },
                _id: false,
            },
        ],
        default: [],
    }
});

cartSchema.pre('findOne', function () {
    this.populate('products.product')
});

const collectionName = 'carts';
const cartModel = mongoose.model(collectionName, cartSchema);

export default cartModel;