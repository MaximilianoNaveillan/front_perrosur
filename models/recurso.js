import mongoose from 'mongoose';

const RecursoSchema = new mongoose.Schema({
  nombre: String,
  type: String,
  url: String,
  key: String,
  config: String,
  time: String,
  date: Date,
  index: Number,
  modulo: {
    type: mongoose.Schema.ObjectId,
    ref: 'Modulo',
  },
  taller: {
    type: mongoose.Schema.ObjectId,
    ref: 'Talleritem',
  },
  tallerista: String,
  calendario: Array,
  eval: Number,
  maxeval: Number,
  status: Boolean,
  complete: Boolean,
  hidden: Boolean,
});

export default mongoose.models.Recurso ||
  mongoose.model('Recurso', RecursoSchema);
