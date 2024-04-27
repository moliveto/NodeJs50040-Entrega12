import CartService from "../services/cart.service.js";

class CartCtrl {
    cartsService;
    constructor() {
        this.cartsService = new CartService();
    }

    addCartCtrl = async (req, res) => {
        try {
            console.log("BODY!!", req.body);

            const cart = await this.cartsService.add(req.body);

            return res.json({
                message: `cart created`,
                product: cart,
            });
        } catch (error) {
            console.log("🚀 ~ CartCtrl ~ addCartCtrl= ~ error:", error)
            return res.status(500).json({ message: error.message });
        }
    };

    getCartProductsCtrl = async (req, res) => {
        const id = req.params.cid
        cartService.getCartProducts(id).then(result => {
            res.status(200).json(result);
        }).catch(err => {
            console.log(err);
            res.status(400).json(err.message);
        });
    }

    addProductToCartCtrl = async (req, res) => {
        const idCart = req.params.cid
        const idProduct = req.params.pid
        cartService.addProductToCart(idCart, idProduct).then(result => {
            res.status(200).json(result);
        }).catch(err => {
            console.log(err);
            res.status(400).json(err.message);
        });
    }

    deleteProductCartCtrl = async (req, res) => {
        const idCart = req.params.cid
        const idProduct = req.params.pid

        cartService.deleteProductCart(idCart, idProduct).then(result => {
            res.status(200).json(result);
        }).catch(err => {
            console.log(err);
            res.status(400).json(err.message);
        });
    }

    editProductQuantityCtrl = async (req, res) => {
        const idCart = req.params.cid
        const idProduct = req.params.pid
        const quantity = req.query.quantity

        cartService.editProductQuantity(idCart, idProduct, quantity).then(result => {
            res.status(200).json(result);
        }).catch(err => {
            console.log(err);
            res.status(400).json(err.message);
        });
    }

    deleteAllCartProductsCtrl = async (req, res) => {
        const idCart = req.params.cid

        cartService.deleteAllCartProducts(idCart).then(result => {
            res.status(200).json(result);
        }).catch(err => {
            console.log(err);
            res.status(400).json(err.message);
        });
    }

}

export default CartCtrl;