import ProductRepo from '../repositories/product.repository.js'
const productRepo = new ProductRepo();
import { logger } from "../utils/logger.js";

/**
 * Service class for managing products.
 */
class ProductsService {
    constructor() { };

    /**
     * Retrieves all products.
     *
     * @returns {Promise<Array>} A promise that resolves to an array of products.
     */
    async getAllProducts() {
        try {
            return await productRepo.getAll();
        } catch (err) {
            logger.error(`${err}`);
            throw Error(err);
        }
    }

    /**
     * Retrieves products by an array of IDs.
     *
     * @param {Array} ids - An array of product IDs.
     * @returns {Promise<Array>} A promise that resolves to an array of products.
     */
    async getProductsByIdArray(ids) {
        try {
            return await productRepo.getByIdArray(ids);
        } catch (err) {
            logger.error(`${err}`);
            throw Error(err);
        }
    }

    /**
     * Retrieves a product by its ID.
     *
     * @param {string} id - The ID of the product.
     * @returns {Promise<Object>} A promise that resolves to the product object.
     */
    async getProductById(id) {
        try {
            return await productRepo.getById(id);
        } catch (err) {
            logger.error(`${err}`);
            throw Error(err);
        }
    }

    /**
     * Retrieves products by an array of IDs.
     *
     * @param {Array} ids - An array of product IDs.
     * @returns {Promise<Array>} A promise that resolves to an array of products.
     */
    async getProductsByIds(ids) {
        try {
            return await productRepo.getByIdArray(ids);
        } catch (err) {
            logger.error(`${err}`);
            throw Error(err);
        }
    }

    /**
     * Adds a new product.
     *
     * @param {Object} product - The product object to be added.
     * @returns {Promise<Object>} A promise that resolves to the added product object.
     */
    async addProduct(product) {
        try {
            return await productRepo.save(product);
        } catch (err) {
            logger.error(`${err}`);
            throw Error(err);
        }
    }

    /**
     * Updates a product by its ID.
     *
     * @param {string} id - The ID of the product to be updated.
     * @param {Object} product - The updated product object.
     * @returns {Promise<Object>} A promise that resolves to the updated product object.
     */
    async updateProduct(id, product) {
        try {
            return await productRepo.update(id, product);
        } catch (err) {
            logger.error(`${err}`);
            throw Error(err);
        }
    }

    /**
     * Deletes a product by its ID.
     *
     * @param {string} id - The ID of the product to be deleted.
     * @returns {Promise<boolean>} A promise that resolves to true if the product is deleted successfully, false otherwise.
     */
    async deleteProductById(id) {
        try {
            return await productRepo.deleteById(id);
        } catch (err) {
            logger.error(`${error}`);
            throw Error(err);
        }
    }

};


export default ProductsService;