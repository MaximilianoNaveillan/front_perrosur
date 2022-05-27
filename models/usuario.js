import mongoose from 'mongoose';

const UsuarioSchema = new mongoose.Schema({
  token: String,
  nombre: String,
  email: String,
  fono: String,
  direccion: String,
  nivel: Number,
  mistalleres: [
    {
      status: Boolean,
      talleritem: {
        type: mongoose.Schema.ObjectId,
        ref: 'TallerItem',
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
  date: Date.now,
});

export default mongoose.models.Usuario ||
  mongoose.model('Usuario', UsuarioSchema);
