import dbConnect from '../../lib/dbConnect';
import Equipo from '../../models/equipo';

export default async function handler(req, res) {
  // console.log(req.headers.cookie);

  await dbConnect();
  const { method } = req;
  switch (method) {
    case 'POST':
      try {
        const equipo = new Equipo(req.body);
        await equipo.save();

        return res.status(200).json({ success: true, equipo });
      } catch (error) {
        return res
          .status(400)
          .json({ succes: false, error: 'Falla de servidor' });
      }
    case 'PATCH':
      try {
        const equipo = await Equipo.findById(req.body.id).lean();

        return res.status(200).json({ success: true, equipo });
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
          email: body.email,
          image: body.image,
          imageblog: body.imageblog,
          items: body.items,
          sections: body.sections,
        };
        const equipo = await Equipo.findByIdAndUpdate(id, form, {
          new: true,
          runValidators: true,
        });
        if (!equipo) {
          return res
            .status(400)
            .json({ succes: false, error: 'Falla de servidor' });
        }
        return res.status(200).json({ success: true, equipo });
      } catch (error) {
        return res
          .status(400)
          .json({ succes: false, error: 'Falla de servidor' });
      }
    case 'DELETE':
      try {
        const id = req.body;
        const equipo = await Equipo.findByIdAndDelete(id);
        return res.status(200).json({ success: true, equipo });
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
