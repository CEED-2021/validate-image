import express from 'express'

const router = express.Router();

router.get(
  ['/good/:id.jpg','/bad/:id.jpg'],
  (req, res) => {
    res.send('Irrelevant content')
})

export default router;
