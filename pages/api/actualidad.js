import dbConnect from '../../lib/dbConnect';
import Actualidad from '../../models/actualidad';

export default async function handler(req, res) {
  // console.log(req.headers.cookie);

  await dbConnect();
  const { method } = req;
  switch (method) {
    case 'POST':
      try {
        req.body.date = new Date(`${req.body.date}T23:00:00Z`);
        const actualidad = new Actualidad(req.body);
        await actualidad.save();

        return res.status(200).json({ success: true, actualidad });
      } catch (error) {
        return res
          .status(400)
          .json({ succes: false, error: 'Falla de servidor' });
      }
    case 'PATCH':
      try {
        const actualidad = await Actualidad.findById(req.body.id).lean();

        return res.status(200).json({ success: true, actualidad });
      } catch (error) {
        return res
          .status(400)
          .json({ succes: false, error: 'Falla de servidor' });
      }
    case 'PUT':
      try {
        const { body } = req;
        // eslint-disable-next-line no-underscore-dangle
        const id = body._id;
        const form = {
          nombre: body.nombre,
          image: body.image,
          text: body.text,
          facboock: body.facboock,
          instagram: body.instagram,
          date: new Date(`${body.date}T23:00:00Z`),
        };
        const actualidad = await Actualidad.findByIdAndUpdate(id, form, {
          new: true,
          runValidators: true,
        });
        if (!actualidad) {
          return res
            .status(400)
            .json({ succes: false, error: 'Falla de servidor' });
        }
        return res.status(200).json({ success: true, actualidad });
      } catch (error) {
        return res
          .status(400)
          .json({ succes: false, error: 'Falla de servidor' });
      }
    case 'DELETE':
      try {
        const id = req.body;
        const actualidad = await Actualidad.findByIdAndDelete(id);
        return res.status(200).json({ success: true, actualidad });
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
