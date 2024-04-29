import ProductsService from '../services/product.service.js';
import ProductDTO from "../dto/product.dto.js";
import { logger } from "../utils/logger.js";

/**
 * Controller class for handling product-related operations.
 */
class ProductCtrl {
  productsService;

  constructor() {
    this.productsService = new ProductsService();
  }

  /**
   * Retrieves all products.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {Object} - The response containing the message and products.
   */
  getAllProducts = async (req, res) => {
    try {
      const products = await this.productsService.getAllProducts(req, res);
      return res.json({ message: `getAllProducts`, products });
    } catch (error) {
      logger.error(`${error}`);
      return res.status(500).json({ message: error.message });
    }
  };

  /**
   * Retrieves a product by its ID.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {Object} - The response containing the message and product.
   */
  getProductById = async (req, res) => {
    try {
      console.log(req.params.pId);
      const product = await this.productsService.getProductById(req.params.pId);
      return res.json({ message: `method getProductById`, product });
    } catch (error) {
      logger.error(`${error}`);
      return res.status(500).json({ message: error.message });
    }
  };

  /**
   * Deletes a product by its ID.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {Object} - The response containing the message and product.
   */
  deleteProductById = async (req, res) => {
    try {
      console.log(req.params.pId);
      const product = await this.productsService.deleteProductById(req.params.pId);
      if (!product) {
        res.status(500).json({
          message: `can not delete this product`,
        });
      }

      return res.json({
        message: `method deleteUserById`,
        product,
      });
    } catch (error) {
      logger.error(`${error}`);
      return res.status(500).json({ message: error.message });
    }
  };

  /**
   * Creates a new product.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {Object} - The response containing the message and product.
   */
  createProduct = async (req, res) => {
    try {
      console.log("BODY!!", req.body);

      const productDto = new ProductDTO(req.body);

      const product = await this.productsService.addProduct(productDto);

      return res.json({
        message: `product created`,
        product,
      });
    } catch (error) {
      logger.error(`${error}`);
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ProductCtrl;