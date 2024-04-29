import UserRepo from '../repositories/user.repository.js'
const userRepo = new UserRepo();
import { logger } from "../utils/logger.js";

/**
 * Represents a user service.
 */
class UserService {
    constructor() { };

    /**
     * Retrieves all users.
     * @returns {Promise<Array>} A promise that resolves to an array of users.
     */
    async getAllUSers() {
        try {
            return await userRepo.getAll();
        } catch (err) {
            logger.error(`${error}`);
            throw Error(err);
        }
    }

    /**
     * Retrieves a user by their ID.
     * @param {number} id - The ID of the user.
     * @returns {Promise<Object>} A promise that resolves to the user object.
     */
    async getUserById(id) {
        try {
            return await userRepo.getById(id);
        } catch (err) {
            logger.error(`${err}`);
            throw Error(err);
        }
    }

    /**
     * Adds a new user.
     * @param {Object} product - The user object to be added.
     * @returns {Promise<Object>} A promise that resolves to the added user object.
     */
    async addUser(product) {
        try {
            return await userRepo.save(product);
        } catch (err) {
            logger.error(`${err}`);
            throw Error(err);
        }
    }

    /**
     * Updates a user by their ID.
     * @param {number} id - The ID of the user to be updated.
     * @param {Object} product - The updated user object.
     * @returns {Promise<Object>} A promise that resolves to the updated user object.
     */
    async updateUser(id, product) {
        try {
            return await userRepo.update(id, product);
        } catch (err) {
            logger.error(`${error}`);
            throw Error(err);
        }
    }

    /**
     * Deletes a user by their ID.
     * @param {number} id - The ID of the user to be deleted.
     * @returns {Promise<boolean>} A promise that resolves to true if the user is deleted successfully, false otherwise.
     */
    async deleteUserById(id) {
        try {
            return await userRepo.deleteById(id);
        } catch (err) {
            logger.error(`${err}`);
            throw Error(err);
        }
    }

};

export default UserService;