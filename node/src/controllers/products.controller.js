import Product from "../models/productoModel.js";

export const getProducts = async (req, res) => {
  try {
    const productsList = await Product.find();
    res.json(productsList);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { imgURL, nombre, descripcion, precio } = req.body;

    const newProduct = new Product({ imgURL, nombre, descripcion, precio });

    const productSave = await newProduct.save();

    res.status(201).json(productSave);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product)
      return res.status(404).json({ message: "Producto no encontrado" });
    res.json(product);
  } catch (error) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product)
      return res.status(404).json({ message: "Producto no encontrado" });
    res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product)
      return res.status(404).json({ message: "Producto no encontrado" });
    res.status(200).json(product);
  } catch (error) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }
};
