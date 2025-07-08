import express from "express";

//criando servidor
const server = express();

server.get("/", (req, res) => {
    res.send("Olá Dev!!");
});


// exportando servidor
export { server };