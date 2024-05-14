import { FastifyInstance } from "fastify";
import { PrismaClient } from "@prisma/client";
import { fastifyPassport } from "fastify-passport";

const prisma = new PrismaClient(); 

export const setupUserRoutes = (fastify: FastifyInstance) => {
  //Registro de Usuário
  fastify.post('/register', async (request, reply) => {
    const { email, password, name} = request.body as any;

    try{
      const user = await prisma.user.create({
        data:{email, password, name}
      });
      reply.code(201).send(user);
    }catch(error){
      console.error('Failed to register user:', error);
      reply.status(500).send({message: 'Failed to register user'});
    }
  });

  //Login de Usuário
  fastify.post('/login', async (request, reply) => {
    const { email, password } = request.body as any;
    const user = await prisma.user.findUnique({
      where: { email}
    });
    if(user && user.password === password){
      reply.send(user);
    }else{
      reply.status(401).send({ message: 'Invalid credentials' });
    }
  });

}