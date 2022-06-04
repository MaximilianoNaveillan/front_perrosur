import mongoose from 'mongoose';

const TalleritemSchema = new mongoose.Schema({
  type: String,
  key: String,
  index: Number,
  inicio: { type: Date },
  termino: { type: Date },
  titulo: String,
  detalle: String,
  resumen: String,
  color: String,
  bg: Number,
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

export default mongoose.models.Talleritem ||
  mongoose.model('Talleritem', TalleritemSchema);
