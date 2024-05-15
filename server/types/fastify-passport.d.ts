// fastify-passport.d.ts
declare module 'fastify-passport' {
  import { Plugin } from 'fastify';
  import { Strategy } from 'passport';
  import { SecureSessionOptions } from 'fastify-secure-session';

  interface FastifyPassport {
      use(name: string, strategy: Strategy): void;
      initialize(): Plugin<SecureSessionOptions>;
      secureSession(): Plugin<SecureSessionOptions>;
  }

  const fastifyPassport: FastifyPassport;
  export default fastifyPassport;
}
