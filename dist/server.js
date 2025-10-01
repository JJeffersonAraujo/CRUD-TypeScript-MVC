"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import cors from "cors";
const taskRoutes_1 = __importDefault(require("./routes/taskRoutes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
//app.use(cors());
app.use(express_1.default.json());
app.use("/api", taskRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/api`);
});
