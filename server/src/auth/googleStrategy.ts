import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

export const setupGoogleStrategy = () => {
  passport.use(new GoogleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      callbackURL: "http://localhost:3000/users/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      // Implemente sua lógica de verificação/criação de usuário aqui
      done(null, profile);
    }
  ));
};
