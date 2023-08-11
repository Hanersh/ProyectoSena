import { z } from "zod";

const documentoNumberValidator = (value) => {
  // Verifica si el valor contiene solo números y tiene una longitud de 8 a 10 dígitos
  return /^\d{8,10}$/.test(value);
};

const nombreValidator = (value) => {
  return /^[A-Za-z\s]+$/.test(value);
};

const apellidoValidator = (value) => {
  return /^[A-Za-z\s]+$/.test(value);
};

const numberValidator = (value) => {
  // Verifica si el valor contiene solo números y tiene una longitud de 10 dígitos
  return /^\d{10}$/.test(value);
};

export const registerSchema = z.object({
  documento: z
    .string({
      required_error: "El documento es requerido",
    })
    .refine(documentoNumberValidator, {
      message:
        "El documento invalido, debe contener solo número, de 8 a 10 dígitos",
    }),
  nombre: z
    .string({
      required_error: "Los nombres son requeridos",
    })
    .refine(nombreValidator, {
      message: "El nombre debe contener solo letras",
    }),
  apellido: z
    .string({
      required_error: "Los apellidos son requeridos",
    })
    .refine(apellidoValidator, {
      message: "El apellido debe contener solo letras",
    }),
  email: z
    .string({
      required_error: "El email es requerido",
    })
    .email({
      required_error: "Email invalido",
    }),
  telefono: z
    .string({
      required_error: "El telefono es requerido",
    })
    .refine(numberValidator, {
      message: "El telefono debe contener solo números y tener 10 dígitos",
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
  documento: z
    .string({
      required_error: "El documento es requerido",
    })
    .refine(documentoNumberValidator, {
      message: "El documento es invalido",
    }),
  password: z
    .string({
      required_error: "La contraseña es requerida",
    })
    .min(6, {
      message: "La contraseña debe de ser almenos de 6 caracteres",
    }),
});
