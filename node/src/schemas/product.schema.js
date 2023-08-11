import { z } from "zod";

const priceValidator = (value) => {
  // Expresión regular para validar números decimales en formato de precio
  return /^\d+(\.\d{1,2})?$/.test(value);
};

export const createProductSchema = z.object({
  imgURL: z.string({
    required_error: "La imagen es requerida",
  }),
  nombre: z.string({
    required_error: "El nombre es requerido",
  }),
  descripcion: z.string({
    required_error: "La descripcion debe de ser texto",
  }),
  precio: z
    .number({
      required_error: "La descripcion debe de ser texto",
    })
    .refine(priceValidator, {
      message: "Formato invalido en formato de precio",
    }),
});
