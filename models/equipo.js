import mongoose from 'mongoose';

const EquipoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es requerido'],
  },
  email: {
    type: String,
    required: [true, 'El e-mail es requerido'],
  },
  image: {
    type: String,
  },
  imageblog: {
    type: String,
  },
  items: {
    type: [Array],
  },
  sections: {
    type: [Array],
  },
  store: {
    type: [Array],
  },
});

export default mongoose.models.Equipo || mongoose.model('Equipo', EquipoSchema);
