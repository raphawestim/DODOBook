import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

import bookRoutes from './routes/bookRoutes';
import userRoutes from './routes/userRoutes';

dotenv.config();
const app = express();

// Configurações de CORS
app.use(cors());

// Configurações de sessão segura
app.use(session({
    secret: process.env.SESSION_SECRET || 'a_very_secret_secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Configure como true se estiver em produção com HTTPS
}));

// Inicializa passport e sessão para autenticação
app.use(passport.initialize());
app.use(passport.session());

// Use o módulo de rotas de livros no caminho '/books'
app.use('/books', bookRoutes);

// Use o módulo de rotas de usuários no caminho '/users'
app.use('/users', userRoutes);

// Iniciar o servidor
try {
  // Tente iniciar o servidor
  app.listen(3000, () => {
      console.log('Server running on port 3000');
  });
} catch (error) {
  // Caso ocorra algum erro ao iniciar o servidor, ele será capturado aqui
  console.error('Failed to start server:', error);
}
