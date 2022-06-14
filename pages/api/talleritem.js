import dbConnect from '../../lib/dbConnect';
import Talleritem from '../../models/talletitem';
import Modulo from '../../models/modulo';
import Recurso from '../../models/recurso';

export default async function handler(req, res) {
  // console.log(req.headers.cookie);

  await dbConnect();
  const { method } = req;
  switch (method) {
    case 'GET':
      try {
        const talleres = await Talleritem.find().lean();

        return res.status(200).json({ success: true, talleres });
      } catch (error) {
        return res.status(500).json({
          statusCode: 500,
          timestamp: new Date().toISOString(),
          class: 'bad-request',
          message: '¡ falla delservidor !',
        });
      }
    case 'PATCH':
      try {
        const talleres = await Talleritem.find(req.body)
          .populate([
            {
              path: 'modulos',
              model: Modulo,
              populate: {
                path: 'recursos',
                model: Recurso,
              },
            },
          ])
          .lean();

        return res.status(200).json({ success: true, talleres });
      } catch (error) {
        return res.status(500).json({
          statusCode: 500,
          timestamp: new Date().toISOString(),
          class: 'bad-request',
          message: '¡ falla delservidor !',
        });
      }

    default:
      return res.status(500).json({
        statusCode: 500,
        timestamp: new Date().toISOString(),
        class: 'bad-request',
        message: '¡ falla delservidor !',
      });
  }
}
