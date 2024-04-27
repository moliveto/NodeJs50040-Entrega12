import UserRepo from '../repositories/user.repository.js'
const userRepo = new UserRepo();

class UserService {
    constructor() { };

    async getAllUSers() {
        try {
            return await userRepo.getAll();
        } catch (err) {
            console.log("🚀 ~ UserService ~ getAllUSers ~ err:", err)
        }
    }

    async getUserById(id) {
        try {
            return await userRepo.getById(id);
        } catch (err) {
            console.log("🚀 ~ UserService ~ getUserById ~ err:", err)
        }
    }

    async addUser(product) {
        try {
            return await userRepo.save(product);
        } catch (err) {
            console.log("🚀 ~ UserService ~ addUser ~ err:", err)
        }
    }

    async updateUser(id, product) {
        try {
            return await userRepo.update(id, product);
        } catch (err) {
            console.log("🚀 ~ UserService ~ updateUser ~ err:", err)
        }
    }

    async deleteUserById(id) {
        try {
            return await userRepo.deleteById(id);
        } catch (err) {
            console.log("🚀 ~ UserService ~ deleteUserById ~ err:", err)
        }
    }

};

export default UserService;