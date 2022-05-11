import express from 'express'

const router = express.Router();

const GOOD_REGEX = /^https?:\/\/.*\/good\/.*\.jpg$/

router.post('/validate', (req, res) => {
  const url = req.body.url
  const valid = GOOD_REGEX.test(url)

  res.send({ valid })
})

export default router;
