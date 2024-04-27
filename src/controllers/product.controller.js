import ProductsService from '../services/product.service.js';
import ProductDTO from "../dto/product.dto.js";

class ProductCtrl {
  productsService;
  constructor() {
    this.productsService = new ProductsService();
  }

  getAllProducts = async (req, res) => {
    try {
      const products = await this.productsService.getAllProducts(req, res);
      return res.json({ message: `getAllProducts`, products });
    } catch (error) {
      console.log("🚀 ~ ProductCtrl ~ getAllProducts= ~ error:", error)
      return res.status(500).json({ message: error.message });
    }
  };

  getProductById = async (req, res) => {
    try {
      console.log(req.params.pId);
      const product = await this.productsService.getProductById(req.params.pId);
      return res.json({ message: `method getProductById`, product });
    } catch (error) {
      console.log("🚀 ~ ProductCtrl ~ getProductById= ~ error:", error)
      return res.status(500).json({ message: error.message });
    }
  };

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
      return res.status(500).json({ message: error.message });
    }
  };

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
      console.log("🚀 ~ ProductCtrl ~ createProduct= ~ error:", error)
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ProductCtrl;