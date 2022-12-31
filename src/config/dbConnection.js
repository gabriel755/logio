import mongoose from "mongoose";

mongoose.connect("mongodb+srv://root:S4f3h0us3!@cluster0.0znhhkc.mongodb.net/logio");
mongoose.set('strictQuery', true);

const db = mongoose.connection;

export default db;