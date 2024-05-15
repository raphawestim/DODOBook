import express from 'express';
import { PrismaClient } from '@prisma/client';
import passport from 'passport';
import { setupGoogleStrategy } from '../auth/googleStrategy';

const router = express.Router();
const prisma = new PrismaClient();

// Inicializa a estratégia do Google
setupGoogleStrategy();

// Registro de Usuário
router.post('/register', async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const user = await prisma.user.create({
      data: { email, password, name }
    });
    res.status(201).json(user);
  } catch (error) {
    console.error('Failed to register user:', error);
    res.status(500).json({ message: 'Failed to register user' });
  }
});

// Login de Usuário
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({
    where: { email }
  });
  if (user && user.password === password) {
    res.json(user);
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Rota para iniciar a autenticação do Google
router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

// Rota de callback após a autenticação do Google
router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Sucesso na autenticação, redirecionar para home ou outra rota
    res.redirect('/profile');
  });

export default router;
