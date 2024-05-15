// authRoutes.ts
import express from 'express';
import passport from 'passport';
import { setupGoogleStrategy } from '../auth/googleStrategy';  // Ajuste o caminho conforme sua estrutura de diretório

const router = express.Router();

// Inicializa a estratégia do Google
setupGoogleStrategy();

// Rota para iniciar a autenticação do Google
router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

// Rota de callback após a autenticação do Google
router.get('/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/',        // Defina para onde o usuário deve ser redirecionado após o login bem-sucedido
    failureRedirect: '/login'    // Defina para onde redirecionar em caso de falha no login
  }));

export default router;
