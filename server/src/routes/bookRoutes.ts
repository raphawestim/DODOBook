import express from 'express';

const axios = require('axios');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const router = express.Router();

// Middleware para validar a query string 'q'
router.use('/search-books', (req, res, next) => {
  const { q } = req.query;
  if (!q) {
    return res.status(400).json({ message: "Query parameter 'q' is required" });
  }
  next();
});

router.get('/search-books', async (req, res) => {
  const { q } = req.query; // `q` é uma string e é garantido que será fornecido após o middleware
  try {
    const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
      params: {
        q: q,
        key: process.env.GOOGLE_API_KEY
      }
    });
    res.json(response.data.items);
  } catch (error) {
    console.error('Failed to fetch books:', error);
    res.status(500).json({ message: 'Failed to fetch books', error });
  }
});

export default router;
