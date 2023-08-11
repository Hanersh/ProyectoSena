import Cliente from "../models/clienteModel.js";
import bcrypt from "bcrypt";
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  const { documento, nombre, apellido, email, telefono, password } = req.body;

  try {
    const clientFoundByDocumento = await Cliente.findOne({ documento });
    const clientFoundByEmail = await Cliente.findOne({ email });
    if (clientFoundByDocumento)
      return res.status(400).json(["El documento ya se encuentra registrado"]);
    else if (clientFoundByEmail)
      return res.status(400).json(["El email ya se encuentra registrado"]);

    const passwordHash = await bcrypt.hash(password, 10);

    const newCliente = new Cliente({
      documento,
      nombre,
      apellido,
      email,
      telefono,
      password: passwordHash,
    });

    const clienteSaved = await newCliente.save();
    const token = await createAccessToken({ id: clienteSaved._id });

    res.cookie("token", token);
    res.json({
      id: clienteSaved._id,
      documento: clienteSaved.documento,
      nombre: clienteSaved.nombre,
      apellido: clienteSaved.apellido,
      email: clienteSaved.email,
      telefono: clienteSaved.telefono,
      createAt: clienteSaved.createdAt,
      updateAt: clienteSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { documento, password } = req.body;

  try {
    const clientFound = await Cliente.findOne({ documento });
    if (!clientFound)
      return res.status(400).json({ message: "Client not found" });

    const isMatch = await bcrypt.compare(password, clientFound.password);
    if (!isMatch)
      return res.status(400).json({ message: "Incorrect password" });

    const token = await createAccessToken({ id: clientFound._id });

    res.cookie("token", token);
    res.json({
      id: clientFound._id,
      documento: clientFound.documento,
      nombre: clientFound.nombre,
      apellido: clientFound.apellido,
      email: clientFound.email,
      telefono: clientFound.telefono,
      createAt: clientFound.createdAt,
      updateAt: clientFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  const clientFound = await Cliente.findById(req.cliente.id);

  if (!clientFound)
    return res.status(400).json({ message: "Client not found" });

  return res.json({
    id: clientFound._id,
    documento: clientFound.documento,
    nombre: clientFound.nombre,
    apellido: clientFound.apellido,
    email: clientFound.email,
    telefono: clientFound.telefono,
    createAt: clientFound.createdAt,
    updateAt: clientFound.updatedAt,
  });
};

export const getClients = async (req, res) => {
  try {
    const clientsList = await Cliente.find();
    res.json(clientsList);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const createClient = async (req, res) => {
  try {
    const { documento, nombre, apellido, email, telefono, password } = req.body;

    const newClient = new Cliente({
      documento,
      nombre,
      apellido,
      email,
      telefono,
      password,
    });

    const clientSave = await newClient.save();

    res.status(201).json(clientSave);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getClient = async (req, res) => {
  try {
    const client = await Cliente.findById(req.params.id);
    if (!client)
      return res.status(404).json({ message: "Cliente no encontrado" });
    res.json(client);
  } catch (error) {
    return res.status(404).json({ message: "Cliente no encontrado" });
  }
};

export const deleteClient = async (req, res) => {
  try {
    const client = await Cliente.findByIdAndDelete(req.params.id);
    if (!client)
      return res.status(404).json({ message: "Cliente no encontrado" });
    res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ message: "Cliente no encontrado" });
  }
};

export const updateClient = async (req, res) => {
  try {
    const client = await Cliente.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!client)
      return res.status(404).json({ message: "Cliente no encontrado" });
    res.status(200).json(product);
  } catch (error) {
    return res.status(404).json({ message: "Cliente no encontrado" });
  }
};
