import dbConnect from "../../lib/dbConnect";
import Actualidad from "../../models/actualidad";

export default async function handler(req, res) {
  console.log(req.headers.cookie);

  await dbConnect();
  const { method } = req;
  switch (method) {
    case "POST":
      try {
        const actualidad = new Actualidad(req.body);
        await actualidad.save();

        return res.status(200).json({ success: true, actualidad });
      } catch (error) {
        return res
          .status(400)
          .json({ succes: false, error: "Falla de servidor" });
      }
    case "PATCH":
      try {
        const actualidad = await Actualidad.findById(req.body.id).lean();

        return res.status(200).json({ success: true, actualidad });
      } catch (error) {
        console.log(error);
      }
    case "PUT":
      try {
        const body = req.body;
        const id = body._id;
        const form = {
          nombre: body.nombre,
          image: body.image,
          text: body.text,
          facboock: body.facboock,
          instagram: body.instagram,
          date: body.date,
        };
        const actualidad = await Actualidad.findByIdAndUpdate(id, form, {
          new: true,
          runValidators: true,
        });
        if (!actualidad) {
          console.log("no Encontrado");
          return res
            .status(400)
            .json({ succes: false, error: "Falla de servidor" });
        }
        return res.status(200).json({ success: true, actualidad });
      } catch (error) {
        return res
          .status(400)
          .json({ succes: false, error: "Falla de servidor" });
      }
    case "DELETE":
      try {
        const id = req.body;
        const actualidad = await Actualidad.findByIdAndDelete(id);
        return res.status(200).json({ success: true, actualidad });
      } catch (error) {
        console.log(error);
        return res
          .status(400)
          .json({ succes: false, error: "Falla de servidor" });
      }
    default:
      return res
        .status(500)
        .json({ succes: false, error: "Falla de servidor" });
  }
}
