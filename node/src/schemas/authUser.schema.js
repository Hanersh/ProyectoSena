import { z } from "zod";

const usernameValidator = (value) => {
  return /^[A-Za-z]{10}$/.test(value);
};

export const registerSchema = z.object({
  username: z
    .string({
      required_error: "Los nombres son requeridos",
    })
    .refine(usernameValidator, {
      message: "El nombre debe contener solo letras",
    }),
  email: z
    .string({
      required_error: "El email es requerido",
    })
    .email({
      required_error: "Email invalido",
    }),
  password: z
    .string({
      required_error: "La contraseña es requerida",
    })
    .min(6, {
      message: "La contraseña debe de ser almenos de 6 caracteres",
    }),
});

export const loginSchema = z.object({
  username: z
    .string({
      required_error: "El Usuario es requerido",
    })
    .refine(usernameValidator, {
      message: "El Usuario es invalido",
    }),
  password: z
    .string({
      required_error: "La contraseña es requerida",
    })
    .min(6, {
      message: "La contraseña debe de ser almenos de 6 caracteres",
    }),
});
