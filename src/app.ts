// Arquivoo de configuração do servidor
import express from "express";
import { router } from "./routes";

//criando servidor
const app = express();

// Permite que o servidor entenda requisições com corpo em JSON
app.use(express.json());

//usando rotas e middlewares
app.use(router);

// exportando servidor
export { app };