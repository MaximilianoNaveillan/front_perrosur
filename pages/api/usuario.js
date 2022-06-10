import dbConnect from '../../lib/dbConnect';
import Usuario from '../../models/usuario';
import Recurso from '../../models/recurso';
import Talleritem from '../../models/talletitem';

export default async function handler(req, res) {
  // console.log(req.headers.cookie);

  await dbConnect();
  const { method } = req;
  switch (method) {
    case 'PATCH':
      try {
        const usuario = await Usuario.findOne(req.body)
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
    case 'GET':
      try {
        // const usuarios = await Usuario.find({ nivel: { $gt: 1 } }).lean();
        const usuarios = await Usuario.find({}).lean();
        return res.status(200).json({ success: true, usuarios });
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
