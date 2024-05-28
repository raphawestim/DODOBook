import express from 'express';
const router = express.Router();
import { PrismaClient } from '@prisma/client';
import passport from 'passport';
import { setupGoogleStrategy } from '../auth/googleStrategy';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

// Inicializa a estratégia do Google
setupGoogleStrategy();

// Registro de Usuário
router.post('/register', async (req, res) => {
  const { email, password, name } = req.body;
  try {
    // Primeiro, verifica se o usuário já existe
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });
    if (existingUser) {
      return res.status(409).json({ message: "Email já está em uso." }); // Conflito
    }
    // Se não existir, cria o novo usuário
    const user = await prisma.user.create({
      data: { email, password, name }
    })
    res.status(201).json(user);
  } catch (error) {
    console.error('Failed to register user:', error);
    res.status(201).send({ message: 'Usuário registrado com sucesso!' });
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
    // Gera um token usando jwt
    const token = jwt.sign({ userId: user.id }, 'seuSecretAqui', { expiresIn: '1h' });
    res.json({ user, token });
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
