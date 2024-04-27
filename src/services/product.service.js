import ProductRepo from '../repositories/product.repository.js'
const productRepo = new ProductRepo();

class ProductsService {
    constructor() { };

    async getAllProducts() {
        try {
            return await productRepo.getAll();
        } catch (err) {
            console.log("🚀 ~ ProductsService ~ getAllProducts ~ err:", err)
        }
    }

    async getProductsByIdArray(ids) {
        try {
            return await productRepo.getByIdArray(ids);
        } catch (err) {
            console.log("🚀 ~ ProductsService ~ getProductsByIdArray ~ err:", err)
        }
    }

    async getProductById(id) {
        try {
            return await productRepo.getById(id);
        } catch (err) {
            console.log("🚀 ~ ProductsService ~ getProductById ~ err:", err)
        }
    }

    async getProductsByIds(ids) {
        try {
            return await productRepo.getByIdArray(ids);
        } catch (err) {
            console.log("🚀 ~ ProductsService ~ getProductsByIds ~ err:", err)
        }
    }

    async getProductsByCategory(category) {
        try {
            return await productRepo.getProductsByCategory(category);
        } catch (err) {
            console.log("🚀 ~ ProductsService ~ getProductsByCategory ~ err:", err)
        }
    }

    async addProduct(product) {
        try {
            return await productRepo.save(product);
        } catch (err) {
            console.log("🚀 ~ ProductsService ~ addProduct ~ err:", err)
        }
    }

    async updateProduct(id, product) {
        try {
            return await productRepo.update(id, product);
        } catch (err) {
            console.log("🚀 ~ ProductsService ~ updateProduct ~ err:", err)
        }
    }

    async deleteProductById(id) {
        try {
            return await productRepo.deleteById(id);
        } catch (err) {
            console.log("🚀 ~ ProductsService ~ deleteProductById ~ err:", err)
        }
    }

};


export default ProductsService;