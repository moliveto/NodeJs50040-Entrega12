import UserService from '../services/user.service.js';
import UserDTO from "../dto/user.dto.js";
import { logger } from "../utils/logger.js";

/**
 * Controller class for handling user-related operations.
 */
export default class UserCtrl {
  userService;

  constructor() {
    this.userService = new UserService();
  }

  /**
   * Get all users.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {Object} - The response JSON containing the message and users.
   */
  getUsers = async (req, res) => {
    try {
      const users = await this.userService.getUsers(req, res);
      return res.json({ message: `getUsers`, users });
    } catch (error) {
      logger.error(`${error}`);
      return res.status(500).json({ message: error.message });
    }
  };

  /**
   * Get a user by ID.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {Object} - The response JSON containing the message and user.
   */
  getUserById = async (req, res) => {
    try {
      console.log(req.params.uid);
      const user = await this.userService.getUserById(req, res);
      return res.json({ message: `getUserById`, user });
    } catch (error) {
      logger.error(`${error}`);
      return res.status(500).json({ message: error.message });
    }
  };

  /**
   * Delete a user by ID.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {Object} - The response JSON containing the message and user.
   */
  deleteUserById = async (req, res) => {
    try {
      console.log("IN USER CONTROLLER****");
      const user = await this.userService.deleteUser(req, res);

      if (!user) {
        res.status(500).json({
          message: `can not delete this user`,
        });
      }

      return res.json({
        message: `method deleteUserById`,
        user,
      });
    } catch (error) {
      logger.error(`${error}`);
      return res.status(500).json({ message: error.message });
    }
  };

  /**
   * Create a new user.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {Object} - The response JSON containing the message and user.
   */
  createUser = async (req, res) => {
    try {
      console.log("BODY!!", req.body);

      const userDto = new UserDTO(req.body);
      console.log("DTO!!", userDto);
      const user = await this.userService.addUser(userDto);

      return res.json({
        message: `user created`,
        product: user,
      });
    } catch (error) {
      logger.error(`${error}`);
      return res.status(500).json({ message: error.message });
    }
  };
}
