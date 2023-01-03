import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    id: {type: String},
    name: {type: String, required: true},
    cod_costumer: {type: Number, required: true},
    localization: {type: String, required: true}
})

const service = mongoose.model("service", serviceSchema);

export default service;