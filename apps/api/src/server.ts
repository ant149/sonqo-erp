import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    mensaje: "API SONQO ERP funcionando 🚀",
  });
});

app.get("/clientes", (_req, res) => {
  res.json([
    {
      id: 1,
      ruc: "20612918504",
      nombre: "IMPORTACIONES YERANY S.A.C.",
      telefono: "999638020",
      ciudad: "Lima",
    },
  ]);
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`🚀 API SONQO ERP corriendo en http://localhost:${PORT}`);
});