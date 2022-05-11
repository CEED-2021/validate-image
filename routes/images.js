import express from 'express'

const router = express.Router();

router.get('/good/:id.jpg', (req, res) => {
  const {pathname: root} = new URL('../img', import.meta.url)
  res.sendFile('good.png', { root: root })
})

router.get('/bad/:id.jpg', (req, res) => {
  const {pathname: root} = new URL('../img', import.meta.url)
  res.sendFile('bad.png', { root: root })
})

export default router;
