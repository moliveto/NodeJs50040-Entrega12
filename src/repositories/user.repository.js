import { Users } from '../dao/factory.js';

class UserRepo {
    constructor() {
        this.dao = Users;
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

    async save(user) {
        return await this.dao.save(user);
    }

    async update(id, user) {
        return await this.dao.update(id, user);
    }

    async deleteById(id) {
        return await this.dao.deleteById(id);
    }
}

export default UserRepo;