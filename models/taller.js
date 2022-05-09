import mongoose from 'mongoose';

const TallerSchema = new mongoose.Schema({
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
});

export default mongoose.models.Taller || mongoose.model('Taller', TallerSchema);
