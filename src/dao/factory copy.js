import connectDb from "./db.js";
import { PERSISTENCE } from "../config/config.js";

let UserService, ProductService;

switch (PERSISTENCE) {
  case "MONGO":
    await connectDb()
      .then(async () => {
        const { default: UserDao } = await import("../dao/user.dao.js");
        const { default: ProductDao } = await import("../dao/product.dao.js");
        UserService = new UserDao();
        ProductService = new ProductDao();
      })
      .catch((err) => {
        console.log("🚀 ~ file: factory.js:14 ~ err:", err);
      });
    break;
  case "MEMORY":
    // TODO: Cargar el dao en memoria con await dynamic import
    console.log("LOAD MEMORY SERVICE***");
    const { default: UserMemDao } = await import("../dao/user-mem.dao.js");
    const { default: ProductMemDao } = await import("../dao/product-mem.dao.js");
    UserService = new UserMemDao();
    ProductService = new ProductMemDao();
    break;
}

export { UserService, ProductService };