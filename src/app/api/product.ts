import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'List of products' });
});

router.get('/:id', (req, res) => {
  res.json({ message: 'List of products with id' });
});
export default router;
