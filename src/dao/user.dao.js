import userModel from "../model/user.model.js";

export default class UserDao {
  constructor() { }

  getAll = async () => {
    try {
      return await userModel.find();
    } catch (error) {
      console.log("🚀 ~ UserDao ~ getAll= ~ error:", error)
      return res.status(500).json({ message: error.message });
    }
  };

  getUserById = async (id) => {
    try {
      return await userModel.findOne({ _id: id });
    } catch (error) {
      console.log("🚀 ~ UserDao ~ getUserById= ~ error:", error)
      return res.status(500).json({ message: error.message });
    }
  };

  createUser = async (createUserDTO) => {
    try {
      return await userModel.create(createUserDTO);
    } catch (error) {
      console.log("🚀 ~ UserDao ~ createUser= ~ error:", error)
      return res.status(500).json({ message: error.message });
    }
  };

  updateUserById = async (id, updateUserDTO) => {
    try {
      return await userModel.updateOne({ _id: id }, updateUserDTO);
    } catch (error) {
      console.log("🚀 ~ UserDao ~ updateUserById= ~ error:", error)
      return res.status(500).json({ message: error.message });
    }
  };

  deleteUserById = async (id) => {
    try {
      return await userModel.deleteOne({ _id: id });
    } catch (error) {
      console.log("🚀 ~ UserDao ~ deleteUserById ~ error:", error)
      return res.status(500).json({ message: error.message });
    }
  };
}
