import Fastify from 'fastify';
import dotenv from 'dotenv';
import cors from '@fastify/cors';
import fastifySecureSession from 'fastify-secure-session';
import fastifyPassport from 'fastify-passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

import setupBookRoutes from './routes/bookRoutes';
import { setupAuthRoutes } from './routes/authRotes'; // Assumindo que isso esteja definido
import { setupGoogleStrategy } from './auth/googleStrategy'; // Assumindo que isso esteja definido

async function bootstrap() {
  dotenv.config();
  const fastify = Fastify({ logger: true });

  // Configurações de CORS
  fastify.register(cors, { origin: true });

  // Configurações de sessão segura
  fastify.register(fastifySecureSession, {
    secret: process.env.SESSION_SECRET || 'a_very_secret_secret',
    cookie: {
      secure: false,
    },
  });

  // Inicializa fastify-passport e sessão segura
  fastify.register(fastifyPassport.initialize());
  fastify.register(fastifyPassport.secureSession());

  // Configuração da estratégia do Google
  setupGoogleStrategy();

  // Registro de rotas
  setupBookRoutes(fastify);
  setupAuthRoutes(fastify); // Registro das rotas de autenticação

  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
    console.log('Servidor rodando na porta 3000 PARABÉNS!');
  } catch (error) {
    console.error('Falha ao iniciar o servidor:', error);
    process.exit(1);
  }
}

bootstrap();
