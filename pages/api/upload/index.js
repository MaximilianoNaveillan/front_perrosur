/* eslint-disable no-unused-vars */
import { IncomingForm } from 'formidable';
// import { promises as fs } from 'fs';

const mv = require('mv');

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  const data = await new Promise((resolve, reject) => {
    const form = new IncomingForm();

    // eslint-disable-next-line consistent-return
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      const oldPath = files.file.filepath;
      const newPath = `./public/images/${files.file.originalFilename}`;
      mv(oldPath, newPath, () => {});
      res.status(200).json({ fields, files });
    });
  });
};
