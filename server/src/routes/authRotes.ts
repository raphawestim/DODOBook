import { fastifyPassport } from 'fastify-passport';

export const setupAuthRoutes = (fastify: any) => {
  fastify.get('/auth/google',
    { preValidation: fastifyPassport.authenticate('google', { scope: ['profile', 'email'] }) }
  );

  fastify.get('/auth/google/callback',
    {
      preValidation: fastifyPassport.authenticate('google', {
        successRedirect: '/',
        failureRedirect: '/login'
      })
    }
  );
};
