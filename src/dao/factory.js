import { PERSISTENCE } from "../config/config.js";
import pmDao from './product.dao.js';
import umDao from './user.dao.js';
import cmDao from './cart.dao.js';

let Products;
let Users;
let Carts;
let Orders;
let Messages;

switch (PERSISTENCE) {
  case "MONGO":
    Products = pmDao.getInstance();
    Users = umDao.getInstance();
    Carts = cmDao.getInstance();
    console.log("LOAD MONGO SERVICE***", Products);
    break;
  case "MEMORY":
    // TODO: Cargar el dao en memoria con await dynamic import
    console.log("LOAD MEMORY SERVICE***");
    const { default: ProductMemDao } = await import("../dao/product-mem.dao.js");
    Products = new ProductMemDao();
    break;
}

export { Products, Users, Carts };