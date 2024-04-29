/**
 * Controller class for managing carts.
 */
import CartService from "../services/cart.service.js";
import { logger } from "../utils/logger.js";
class CartCtrl {
    cartsService;
    constructor() {
        this.cartsService = new CartService();
    }

    /**
     * Add a new cart.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @returns {Object} The created cart.
     */
    addCartCtrl = async (req, res) => {
        try {
            console.log("BODY!!", req.body);

            const cart = await this.cartsService.add(req.body);

            return res.json({
                message: `cart created`,
                product: cart,
            });
        } catch (error) {
            logger.error(`${error}`);
            return res.status(500).json({ message: error.message });
        }
    };

    /**
     * Get the products of a cart.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @returns {Object} The products of the cart.
     */
    getCartProductsCtrl = async (req, res) => {
        const id = req.params.cid
        cartService.getCartProducts(id).then(result => {
            res.status(200).json(result);
        }).catch(err => {
            logger.error(`${error}`);
            res.status(400).json(err.message);
        });
    }

    /**
     * Add a product to a cart.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @returns {Object} The updated cart.
     */
    addProductToCartCtrl = async (req, res) => {
        const idCart = req.params.cid
        const idProduct = req.params.pid
        cartService.addProductToCart(idCart, idProduct).then(result => {
            res.status(200).json(result);
        }).catch(err => {
            logger.error(`${error}`);
            res.status(400).json(err.message);
        });
    }

    /**
     * Delete a product from a cart.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @returns {Object} The updated cart.
     */
    deleteProductCartCtrl = async (req, res) => {
        const idCart = req.params.cid
        const idProduct = req.params.pid

        cartService.deleteProductCart(idCart, idProduct).then(result => {
            res.status(200).json(result);
        }).catch(err => {
            logger.error(`${error}`);
            res.status(400).json(err.message);
        });
    }

    /**
     * Edit the quantity of a product in a cart.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @returns {Object} The updated cart.
     */
    editProductQuantityCtrl = async (req, res) => {
        const idCart = req.params.cid
        const idProduct = req.params.pid
        const quantity = req.query.quantity

        cartService.editProductQuantity(idCart, idProduct, quantity).then(result => {
            res.status(200).json(result);
        }).catch(err => {
            logger.error(`${error}`);
            res.status(400).json(err.message);
        });
    }

    /**
     * Delete all products from a cart.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @returns {Object} The updated cart.
     */
    deleteAllCartProductsCtrl = async (req, res) => {
        const idCart = req.params.cid

        cartService.deleteAllCartProducts(idCart).then(result => {
            res.status(200).json(result);
        }).catch(err => {
            logger.error(`${error}`);
            res.status(400).json(err.message);
        });
    }

}

export default CartCtrl;