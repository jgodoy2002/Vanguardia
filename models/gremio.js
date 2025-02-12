import mongoose from "mongoose";
const {Schema, model} = mongoose;
const gremioSchema = new Schema({
    nombre: String,
    cantidadMiembros: Number,
    casa:String,
    status: Boolean
});
const Gremio = model('Gremio', gremioSchema);
export default Gremio;
