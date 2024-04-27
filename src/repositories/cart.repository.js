import { Carts } from '../dao/factory.js';

class CartRepo {
    constructor() {
        this.dao = Carts;
    }

    async getAll() {
        return await this.dao.getAll();
    }

    async getByIdArray(ids) {
        return await this.dao.getByIdArray(ids);
    }

    async getById(id) {
        return await this.dao.getById(id);

    }

    async save(cart) {
        return await this.dao.save(cart);
    }

    async update(id, cart) {
        return await this.dao.update(id, cart);
    }

    async deleteById(id) {
        return await this.dao.deleteById(id);
    }
}

export default CartRepo;