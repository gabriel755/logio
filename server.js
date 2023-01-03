import express from "express";

const app = express();

const port = process.env.PORT || 8000;

app.listen(port, (err) => {
   if(err){
    console.log(`O serviço não pode ser iniciado no endereço http://localhost:${port}.`);
   }else{
    console.log(`O serviço foi iniciado no endereço http://localhost:${port}.`);
   }
})