import dbConnect from '../../lib/dbConnect';
import Usuario from '../../models/usuario';
import Recurso from '../../models/recurso';
import Talleritem from '../../models/talletitem';

export default async function handler(req, res) {
  // console.log(req.headers.cookie);

  await dbConnect();
  const { method, body } = req;
  switch (method) {
    case 'PATCH':
      // const usuario = await Usuario.findByIdAndUpdate(id, form, { new: true, runValidators: true, });
      try {
        const filter = { email: body.email };
        const update = { mistalleres: body.mistalleres };
        const usuario = await Usuario.findOneAndUpdate(filter, update, {
          new: true,
          runValidators: true,
        })
          .populate({
            path: 'mistalleres.talleritem',
            model: Talleritem,
            select: 'titulo',
          })
          .populate({
            path: 'misrecursos.recursoitem',
            model: Recurso,
            select: ['nombre', 'type'],
          })
          .lean();
        return res.status(200).json({ success: true, usuario });
      } catch (error) {
        return res.status(400).json({
          statusCode: 400,
          timestamp: new Date().toISOString(),
          class: 'bad-request',
          message: '¡ Ups. ! Creo que tenemos problemascon el servidor',
        });
      }

    default:
      return res
        .status(500)
        .json({ succes: false, error: 'Falla de servidor' });
  }
}
