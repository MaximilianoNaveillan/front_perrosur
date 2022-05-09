import dbConnect from '../../lib/dbConnect';
import Taller from '../../models/taller';

export default async function handler(req, res) {
  // console.log(req.headers.cookie);

  await dbConnect();
  const { method } = req;
  switch (method) {
    case 'POST':
      try {
        const taller = new Taller(req.body);
        await taller.save();

        return res.status(200).json({ success: true, taller });
      } catch (error) {
        return res
          .status(400)
          .json({ succes: false, error: 'Falla de servidor' });
      }
    case 'PATCH':
      try {
        const taller = await Taller.findById(req.body.id).lean();

        return res.status(200).json({ success: true, taller });
      } catch (error) {
        return res
          .status(400)
          .json({ succes: false, error: 'Falla de servidor' });
      }
    case 'PUT':
      try {
        const { body } = req;
        const id = body._id;
        const form = {
          nombre: body.nombre,
          image: body.image,
          text: body.text,
        };
        const taller = await Taller.findByIdAndUpdate(id, form, {
          new: true,
          runValidators: true,
        });
        if (!taller) {
          return res
            .status(400)
            .json({ succes: false, error: 'Falla de servidor' });
        }
        return res.status(200).json({ success: true, taller });
      } catch (error) {
        return res
          .status(400)
          .json({ succes: false, error: 'Falla de servidor' });
      }
    case 'DELETE':
      try {
        const id = req.body;
        const taller = await Taller.findByIdAndDelete(id);
        return res.status(200).json({ success: true, taller });
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
