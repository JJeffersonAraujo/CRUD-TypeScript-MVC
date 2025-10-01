import express from "express";
//import cors from "cors";
import taskRoutes from "./routes/taskRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

//app.use(cors());
app.use(express.json());
app.use("/api", taskRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/api`);
});
