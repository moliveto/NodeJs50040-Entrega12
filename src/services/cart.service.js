import CartRepo from '../repositories/cart.repository.js'
const cartRepo = new CartRepo();

class CartsService {
    constructor() { };

    async getAll() {
        try {
            return await cartRepo.getAll();
        } catch (err) {
            console.log("🚀 ~ CartsService ~ getAll ~ err:", err)
            throw Error(err);
        }
    }

    async getByIdArray(ids) {
        try {
            return await cartRepo.getByIdArray(ids);
        } catch (err) {
            console.log("🚀 ~ CartsService ~ getByIdArray ~ err:", err);
            throw Error(err);
        }
    }

    async getById(id) {
        try {
            return await cartRepo.getById(id);
        } catch (err) {
            console.log("🚀 ~ CartsService ~ getById ~ err:", err)
            throw Error(err);
        }
    }

    async getProductsByIds(ids) {
        try {
            return await cartRepo.getByIdArray(ids);
        } catch (err) {
            console.log("🚀 ~ CartsService ~ getProductsByIds ~ err:", err)
            throw Error(err);
        }
    }

    async add(cart) {
        try {
            return await cartRepo.save(cart);
        } catch (err) {
            console.log("🚀 ~ CartsService ~ add ~ err:", err)
            throw Error(err);
        }
    }

    async update(id, cart) {
        try {
            return await cartRepo.update(id, cart);
        } catch (err) {
            console.log("🚀 ~ ProductsService ~ updateProduct ~ err:", err)
        }
    }

    async deleteById(id) {
        try {
            return await cartRepo.deleteById(id);
        } catch (err) {
            console.log("🚀 ~ CartsService ~ deleteById ~ err:", err);
            throw Error(err);
        }
    }
}

export default CartsService;