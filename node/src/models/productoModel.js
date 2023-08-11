import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    imgURL: String,
    nombre: String,
    descripcion: String,
    precio: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Product", productSchema);
