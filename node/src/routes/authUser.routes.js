import { Router } from "express";
import {
  login,
  logout,
  register,
  profile,
  verifyToken,
} from "../controllers/authUser.controller.js";
import { authRequired } from "../middlewares/validateUserToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/authUser.schema.js";

const router = Router();

router.post("/userRegister", validateSchema(registerSchema), register);

router.post("/userLogin", validateSchema(loginSchema), login);

router.post("/userLogout", logout);

router.get("/verify", verifyToken);

router.get("/userProfile", authRequired, profile);

export default router;
