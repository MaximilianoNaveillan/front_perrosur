import dbConnect from '../../lib/dbConnect';
import Talleritem from '../../models/talletitem';

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
        return res
          .status(400)
          .json({ succes: false, error: 'Falla de servidor' });
      }

    default:
      return res
        .status(500)
        .json({ succes: false, error: 'Falla de servidor' });
  }
}
