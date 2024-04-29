import CartRepo from '../repositories/cart.repository.js'
const cartRepo = new CartRepo();
import { logger } from "../utils/logger.js";

/**
 * Service class for managing carts.
 */
class CartsService {
    constructor() { };

    /**
     * Retrieves all carts.
     * @returns {Promise<Array>} A promise that resolves to an array of carts.
     * @throws {Error} If an error occurs while retrieving the carts.
     */
    async getAll() {
        try {
            return await cartRepo.getAll();
        } catch (err) {
            logger.error(`${err}`);
            throw Error(err);
        }
    }

    /**
     * Retrieves carts by their IDs.
     * @param {Array} ids - An array of cart IDs.
     * @returns {Promise<Array>} A promise that resolves to an array of carts.
     * @throws {Error} If an error occurs while retrieving the carts.
     */
    async getByIdArray(ids) {
        try {
            return await cartRepo.getByIdArray(ids);
        } catch (err) {
            logger.error(`${err}`);
            throw Error(err);
        }
    }

    /**
     * Retrieves a cart by its ID.
     * @param {string} id - The ID of the cart.
     * @returns {Promise<Object>} A promise that resolves to the cart object.
     * @throws {Error} If an error occurs while retrieving the cart.
     */
    async getById(id) {
        try {
            return await cartRepo.getById(id);
        } catch (err) {
            logger.error(`${err}`);
            throw Error(err);
        }
    }

    /**
     * Retrieves products by their IDs.
     * @param {Array} ids - An array of product IDs.
     * @returns {Promise<Array>} A promise that resolves to an array of products.
     * @throws {Error} If an error occurs while retrieving the products.
     */
    async getProductsByIds(ids) {
        try {
            return await cartRepo.getByIdArray(ids);
        } catch (err) {
            logger.error(`${err}`);
            throw Error(err);
        }
    }

    /**
     * Adds a new cart.
     * @param {Object} cart - The cart object to be added.
     * @returns {Promise<Object>} A promise that resolves to the added cart object.
     * @throws {Error} If an error occurs while adding the cart.
     */
    async add(cart) {
        try {
            return await cartRepo.save(cart);
        } catch (err) {
            logger.error(`${err}`);
            throw Error(err);
        }
    }

    /**
     * Updates a cart by its ID.
     * @param {string} id - The ID of the cart to be updated.
     * @param {Object} cart - The updated cart object.
     * @returns {Promise<Object>} A promise that resolves to the updated cart object.
     * @throws {Error} If an error occurs while updating the cart.
     */
    async update(id, cart) {
        try {
            return await cartRepo.update(id, cart);
        } catch (err) {
            logger.error(`${err}`);
            throw Error(err);
        }
    }

    /**
     * Deletes a cart by its ID.
     * @param {string} id - The ID of the cart to be deleted.
     * @returns {Promise<Object>} A promise that resolves to the deleted cart object.
     * @throws {Error} If an error occurs while deleting the cart.
     */
    async deleteById(id) {
        try {
            return await cartRepo.deleteById(id);
        } catch (err) {
            logger.error(`${err}`);
            throw Error(err);
        }
    }
}

export default CartsService;