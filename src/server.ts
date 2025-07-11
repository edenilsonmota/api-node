import { app } from "./app";
import  "dotenv/config";

// Iniciando o servidor
app.listen(process.env.PORT || 8000, () => console.log('App rodando na porta: ' + process.env.PORT || 8000));