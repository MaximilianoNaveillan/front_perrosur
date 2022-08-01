import mongoose from 'mongoose';

const UsuarioSchema = new mongoose.Schema({
  token: { type: String, default: '' },
  nombre: { type: String, default: '' },
  email: { type: String, default: '' },
  fono: { type: String, default: '' },
  direccion: { type: String, default: '' },
  nivel: { type: Number, default: 3 },
  mistalleres: [
    {
      status: Boolean,
      talleritem: {
        type: mongoose.Schema.ObjectId,
        ref: 'Talleritem',
      },
    },
  ],
  misrecursos: [
    {
      status: Boolean,
      recursoitem: {
        type: mongoose.Schema.ObjectId,
        ref: 'Recurso',
      },
    },
  ],
  date: { type: Date, default: Date.now },
});

export default mongoose.models.Usuario ||
  mongoose.model('Usuario', UsuarioSchema);
