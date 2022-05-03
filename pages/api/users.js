// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../lib/dbConnect";
import User from "../../models/user";

export default async function handler(req, res) {
  // POST api/ users
  const { method } = req;
  switch (method) {
    case "POST":
      try {
        const user = new User(req.body);
        await user.save();

        return res.status(200).json({ success: true, user });
      } catch (error) {
        return res
          .status(400)
          .json({ succes: false, error: "Falla en el servidor" });
      }
    default:
      return res
        .status(500)
        .json({ succes: false, error: "Falla en el servidor" });
  }
}
