import express from 'express'
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const router = express.Router()

router.get('/:width/:id/:title', (req, res, next) => {
  let { width, id, title } = req.params
  const srcPath = id === '0'
    ? path.join('src', 'server', 'images', `${title}.jpg`)
    : path.join('src', 'server', 'images', id, `${title}.jpg`)
  
  width = parseInt(width)

  if (fs.existsSync(srcPath) && typeof width === 'number') {
    req.srcPath = srcPath
    req.width = Math.max(360, Math.min(width, 4096))

    return next()
  }
  
  res.status(400)
}, (req, res) => {
  const stream = fs.createReadStream(req.srcPath)
  const transform = sharp().resize({
    width: req.width,
    withoutEnlargement: true
  })

  res.status(200).type('image/jpeg')
  stream.pipe(transform).pipe(res)
})

export { router }
