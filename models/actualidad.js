import mongoose from "mongoose";

const ActualidadSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es requerido"],
  },
  image: {
    type: String,
  },
  text: {
    type: String,
  },
  facboock: {
    type: String,
  },
  instagram: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Actualidad ||
  mongoose.model("Actualidad", ActualidadSchema);
