import { Router } from "express";
// import {
//   getUsers,
//   getUserById,
//   createUser,
//   updateUserById,
//   deleteUserById,
// } from "../controllers/user.controller.js";

import UserCtrl from "../controllers/user.controller.js";

const usersRoutes = Router();
const userCtrl = new UserCtrl();

usersRoutes.get("/", userCtrl.getUsers);

usersRoutes.get("/:pId", userCtrl.getUserById);

usersRoutes.delete("/:pId", userCtrl.deleteUserById);

usersRoutes.post("/", userCtrl.createUser);

export default usersRoutes;
