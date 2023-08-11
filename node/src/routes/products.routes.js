import { Router } from "express";

const router = Router();

import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controller.js";
import { authRequired } from "../middlewares/validateUserToken.js";

router.get("/products", authRequired, getProducts);

router.get("/products/:id", authRequired, getProduct);

router.post("/products", authRequired, createProduct);

router.delete("/products/:id", authRequired, deleteProduct);

router.put("/products/:id", authRequired, updateProduct);

export default router;
