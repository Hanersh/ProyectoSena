import { Router } from "express";
import {
  login,
  logout,
  register,
  profile,
  getClients,
  getClient,
  createClient,
  deleteClient,
  updateClient,
} from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), register);

router.post("/login", validateSchema(loginSchema), login);

router.post("/logout", logout);

router.get("/profile", authRequired, profile);

router.get("/clients", authRequired, getClients);

router.get("/clients/:id", authRequired, getClient);

router.post("/clients", authRequired, createClient);

router.delete("/clients/:id", authRequired, deleteClient);

router.put("/clients/:id", authRequired, updateClient);

export default router;
