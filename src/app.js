import express from "express";
import db from "./config/dbConnection.js";

db.on("error", console.log.bind(console, 'Erro de conexão com o DB.'));
db.once("open", () => {
    console.log("Conexão efetuada com sucesso!");
})

const app = express();
app.use(
    express.json()
)

export default app;
