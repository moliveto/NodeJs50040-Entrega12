import { Router } from "express";

import { authMdw } from "../middleware/auth.middleware";

import CartCtrl from "../controllers/carts.controller.js";

const cartRouter = Router()
const cartCtrl = new CartCtrl();

cartRouter.post("/", authMdw(['public']), cartCtrl.addCartCtrl)

cartRouter.get("/:cid", authMdw(['public']), cartCtrl.getCartProductsCtrl)

cartRouter.post("/:cid/product/:pid", authMdw(['user', 'admin']), cartCtrl.addProductToCartCtrl)

cartRouter.delete("/:cid/product/:pid", authMdw(['user', 'admin']), cartCtrl.deleteProductCartCtrl)

cartRouter.put("/:cid/product/:pid", authMdw(['user', 'admin']), cartCtrl.editProductQuantityCtrl)

cartRouter.delete("/:cid", authMdw(['user', 'admin']), cartCtrl.deleteAllCartProductsCtrl)

export default cartRouter;