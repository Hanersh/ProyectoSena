import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema(
  {
    documento: { type: String, required: true, unique: true, trim: true },
    nombre: { type: String, required: true, trim: true },
    apellido: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    telefono: { type: String, required: true, trim: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Cliente", clienteSchema);
