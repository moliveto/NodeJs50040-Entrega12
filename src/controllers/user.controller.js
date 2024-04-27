import UserService from '../services/user.service.js';
import UserDTO from "../dto/user.dto.js";

export default class UserCtrl {
  userService;
  constructor() {
    this.userService = new UserService();
  }

  getUsers = async (req, res) => {
    try {
      const users = await this.userService.getUsers(req, res);
      return res.json({ message: `getUsers`, users });
    } catch (error) {
      console.log("🚀 ~ UserCtrl ~ getUsers= ~ error:", error)
      return res.status(500).json({ message: error.message });
    }
  };

  getUserById = async (req, res) => {
    try {
      console.log(req.params.uid);
      const user = await this.userService.getUserById(req, res);
      return res.json({ message: `getUserById`, user });
    } catch (error) {
      console.log("🚀 ~ UserCtrl ~ getUserById= ~ error:", error)
      return res.status(500).json({ message: error.message });
    }
  };

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
      return res.status(500).json({ message: error.message });
    }
  };

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
      console.log("🚀 ~ UserCtrl ~ createUser= ~ error:", error)
      return res.status(500).json({ message: error.message });
    }
  };

}
