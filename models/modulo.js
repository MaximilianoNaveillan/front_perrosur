import mongoose from 'mongoose';

const ModuloSchema = new mongoose.Schema({
  type: String,
  nombre: String,
  detalle: String,
  recursos: Object,
  start: Date,
  end: Date,
  calendar: Object,
  status: Boolean,
  disabled: Boolean,
});

export default mongoose.models.Modulo || mongoose.model('Modulo', ModuloSchema);
