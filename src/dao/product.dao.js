import productModels from "../model/product.model.js";

class ProductDao {
  constructor() { }

  getAllProducts = async (req, res) => {
    try {
      return await productModels.find({});
    } catch (error) {
      console.log("🚀 ~ ProductDao ~ getAllProducts= ~ error:", error)
      return res.status(500).json({ message: error.message });
    }
  };

  getProductById = async (req, res) => {
    try {
      return await productModels.findById({ _id: req.params.pId });
    } catch (error) {
      console.log("🚀 ~ ProductDao ~ getProductById= ~ error:", error)
      return res.status(500).json({ message: error.message });
    }
  };

  createProduct = async (productBodyDto) => {
    try {
      const newProduct = await productModels.create(productBodyDto);
      return newProduct;
    } catch (error) {
      console.log("🚀 ~ ProductRepositoryDao ~ createProduct= ~ error:", error)
      throw error;
    }
  };

  deleteProduct = async (req, res) => {
    try {
      const deleteProduct = await productModels.deleteOne(req.params.pId);
      return deleteProduct;
    } catch (error) {
      console.log("🚀 ~ ProductDao ~ deleteProduct ~ error:", error)
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ProductDao