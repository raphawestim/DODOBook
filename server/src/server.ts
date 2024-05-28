import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

import bookRoutes from './routes/bookRoutes';
import userRoutes from './routes/userRoutes';
import groupRoutes from './routes/groupRoutes';

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


// Importante: Middleware para analisar JSON deve vir antes das rotas
app.use(express.json());

// Inicializa passport e sessão para autenticação
app.use(passport.initialize());
app.use(passport.session());

// módulo de rotas
app.use('/books', bookRoutes);
app.use('/users', userRoutes);
app.use('/api', groupRoutes);

// Iniciar o servidor
try {
  // Tente iniciar o servidor
  app.listen(3001, () => {
      console.log('Servidor iniciado! Para encerrar pressione Ctrl + C.');
  });
} catch (error) {
  // Caso ocorra algum erro ao iniciar o servidor, ele será capturado aqui
  console.error('Falha ao iniciar o servidor!', error);
}
