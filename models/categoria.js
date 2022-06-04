import mongoose from 'mongoose';

const CategoriaSchema = new mongoose.Schema({
  nombre: String,
  detalle: String,
});

export default mongoose.models.Categoria ||
  mongoose.model('Categoria', CategoriaSchema);
