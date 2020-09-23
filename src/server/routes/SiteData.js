import express from 'express'
import { promises as fsp } from 'fs'
import path from 'path'

const router = express.Router()

router.get('/', async (req, res, next) => {
	const file = process.env.NODE_ENV === 'development'
		? path.join('src', 'server', 'data', 'data.json')
		: path.join('data', 'data.json')

	try {
		res.send(await fsp.readFile(file)).status(200)
	} catch (err) {
		next(err)
	}
})

export default router
