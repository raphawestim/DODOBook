import { fastifyPassport } from 'fastify-passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

export const setupGoogleStrategy = () => {
  fastifyPassport.use(new GoogleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      callbackURL: "http://localhost:3000/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      // Lógica para verificar/criar usuário no banco de dados
      done(null, profile);
    }
  ));
};
