import mongoose from 'mongoose';

const TallerItemSchema = new mongoose.Schema({
  type: String,
  key: String,
  index: Number,
  inicio: Date,
  termino: Date,
  titulo: String,
  imagen: String,
  tallerista: String,
  usuarios: Array,
  calendar: Array,
  recursos: Array,
  modulos: Array,
  categoria: Array,
  duracion: Array,
  dificultad: Array,
  incluyereunion: Boolean,
  incluyerecursos: Boolean,
  sincronico: Boolean,
  status: Boolean,
});

export default mongoose.models.TallerItem ||
  mongoose.model('TallerItem', TallerItemSchema);
