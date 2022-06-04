import dbConnect from '../../lib/dbConnect';
import Categoria from '../../models/categoria';

export default async function handler(req, res) {
  // console.log(req.headers.cookie);

  await dbConnect();
  const { method } = req;
  switch (method) {
    case 'GET':
      try {
        const categoria = await Categoria.find().lean();

        return res.status(200).json({ success: true, categoria });
      } catch (error) {
        return res.status(400).json({
          statusCode: 400,
          timestamp: new Date().toISOString(),
          class: 'bad-request',
          message: '¡ Excepción error !',
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
