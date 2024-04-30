import Fastify from 'fastify';
import cors from '@fastify/cors';
import { PrismaClient } from '@prisma/client';

// Instância do Prisma Client
const prisma = new PrismaClient({
  log: ['query'],
});

// Função principal
async function bootscrap() {
const fastify = Fastify({
  logger: true
});

// Registrando o plugin de CORS
await fastify.register(cors, {
  origin: true,
});

// Rota de boas-vindas
fastify.get('/', async (request, reply) => {
  reply.send({ message: 'Bem-vindo ao DODOBook!' });
});

// Rota para criar um novo usuário
fastify.post('/users/register', async (request, reply) => {
  const { email, password, name } = request.body as any;
  const user = await prisma.user.create({
    data: { email, password, name }
  });
  reply.code(201).send(user);
});

// Rota para listar todos os usuários
fastify.get('/users', async (request, reply) => {
  const users = await prisma.user.findMany();
  reply.send(users);
});

//Rota para login
fastify.post('/users/login', async (request, reply) => {
  const { email, password } = request.body as any;
  const user = await prisma.user.findFirst({
    where: { email, password}
  });
  if (user) {
    reply.send(user);
  } else {
    reply.code(401).send({ message: 'Credenciais inválidas' });
  }
});

// Rotas de livro
fastify.post('/books', async (request, reply) => {
  const { title, bannerUrl, author, isbn, price, synopsis } = request.body as any;
  const book = await prisma.book.create({
    data: { title, bannerUrl, author, isbn, price, synopsis }
  });
  reply.code(201).send(book);
});

fastify.get('/books', async (request, reply) => {
  const books = await prisma.book.findMany();
  reply.send(books);
});

// Rotas de grupo
fastify.post('/groups', async (request, reply) => {
  const { name, discord, weekDays, hourStart, hourEnd, private: isPrivate } = request.body as any;
  const group = await prisma.group.create({
    data: { name, discord, weekDays, hourStart, hourEnd, isPrivate }
  });
  reply.code(201).send(group);
});

fastify.get('/groups', async (request, reply) => {
  const groups = await prisma.group.findMany();
  reply.send(groups);
});



await fastify.listen({port: 3000, host: '0.0.0.0'});
console.log('Servidor rodando na porta 3000 PARABENS!');

}

bootscrap();