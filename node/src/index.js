import app from "./app.js";
import { connectDB } from "./db.js";

connectDB();
const port = 4000;

app.listen(port, () => {
  console.log(`servidor iniciado en el puerto ${port}`);
});

app.get("/", (req, res) => {
  res.send("Bienvenido a la API");
});
