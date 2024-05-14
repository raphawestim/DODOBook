import { FastifyInstance, RouteShorthandOptions  } from 'fastify';
import axios from 'axios';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface Querystring {
  q: string;
}

const options: RouteShorthandOptions = {
  schema: {
    querystring: {
      type: 'object',
      properties: {
        q: { type: 'string' }
      },
      required: ['q']
    }
  }
};


const setupBookRoutes = (fastify: FastifyInstance) => {
  fastify.get<{ Querystring: Querystring }>('/search-books', options, async (request, reply) => {
    const { q } = request.query; // Agora, `q` é do tipo string e é garantido que será fornecido
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes`, {
        params: {
          q: q,
          key: process.env.GOOGLE_API_KEY
        }
      });
      reply.send(response.data.items);
    } catch (error) {
      console.error('Failed to fetch books:', error);
      reply.status(500).send({ message: 'Failed to fetch books', error });
    }
  });
};

export default setupBookRoutes;