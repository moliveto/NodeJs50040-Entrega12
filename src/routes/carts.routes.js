import { Router } from "express";

import { handlePolicies } from "../middleware/handle-policies.middleware.js";

import CartCtrl from "../controllers/carts.controller.js";

const cartRouter = Router()
const cartCtrl = new CartCtrl();

cartRouter.post("/", handlePolicies(['public']), cartCtrl.addCartCtrl)

cartRouter.get("/:cid", handlePolicies(['public']), cartCtrl.getCartProductsCtrl)

cartRouter.post("/:cid/product/:pid", handlePolicies(['user', 'admin']), cartCtrl.addProductToCartCtrl)

cartRouter.delete("/:cid/product/:pid", handlePolicies(['user', 'admin']), cartCtrl.deleteProductCartCtrl)

cartRouter.put("/:cid/product/:pid", handlePolicies(['user', 'admin']), cartCtrl.editProductQuantityCtrl)

cartRouter.delete("/:cid", handlePolicies(['user', 'admin']), cartCtrl.deleteAllCartProductsCtrl)

export default cartRouter;