import mongoose from 'mongoose';

const TiendaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es requerido'],
  },
  image: {
    type: String,
  },
  text: {
    type: String,
  },
  equipo: {
    type: String,
  },
  val: {
    type: Number,
  },
  state: {
    type: Boolean,
  },
});

export default mongoose.models.Tienda || mongoose.model('Tienda', TiendaSchema);
