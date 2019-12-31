import express from 'express';
import fs from 'fs';

const router = express.Router();

router.get('/', (req, res) => {
  const file = process.env.NODE_ENV === 'development'
    ? './src/server/data/data.json'
    : './data/data.json'

  fs.readFile(file, (err, data) => {
    res.status(200).send(data)
  })
})

export default router