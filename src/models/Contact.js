import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    id: {type: String},
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true}
})

const contact = mongoose.model("contact", contactSchema);

export default contact;