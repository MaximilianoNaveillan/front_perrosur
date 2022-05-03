import dbConnect from "../../lib/dbConnect";
import Tienda from "../../models/tienda";

export default async function handler(req, res) {
  console.log(req.headers.cookie);

  await dbConnect();
  const { method } = req;
  switch (method) {
    case "POST":
      try {
        const tienda = new Tienda(req.body);
        await tienda.save();

        return res.status(200).json({ success: true, tienda });
      } catch (error) {
        return res
          .status(400)
          .json({ succes: false, error: "Falla de servidor" });
      }
    case "PATCH":
      try {
        const tienda = await Tienda.findById(req.body.id).lean();

        return res.status(200).json({ success: true, tienda });
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
          equipo: body.equipo,
          state: body.state,
        };
        const tienda = await Tienda.findByIdAndUpdate(id, form, {
          new: true,
          runValidators: true,
        });
        if (!tienda) {
          console.log("no Encontrado");
          return res
            .status(400)
            .json({ succes: false, error: "Falla de servidor" });
        }
        return res.status(200).json({ success: true, tienda });
      } catch (error) {
        return res
          .status(400)
          .json({ succes: false, error: "Falla de servidor" });
      }
    case "DELETE":
      try {
        const id = req.body;
        const tienda = await Tienda.findByIdAndDelete(id);
        return res.status(200).json({ success: true, tienda });
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
