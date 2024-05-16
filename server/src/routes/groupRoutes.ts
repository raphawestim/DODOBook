import express from 'express';
import { PrismaClient } from '@prisma/client';
import createGroupValidations from '../services/groupValidations';
import { validationResult } from 'express-validator';


const prisma = new PrismaClient();
const router = express.Router();

// Rota para criar um grupo
router.post('/groups', createGroupValidations, async (req: express.Request, res: express.Response) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    const { name, discord, weekDays, hourStart, hourEnd, isPrivate, userId } = req.body;
    try {
      const group = await prisma.group.create({
          data: { 
              name, 
              discord, 
              weekDays, 
              hourStart, 
              hourEnd, 
              isPrivate, 
              isAvailable: true,  // Inicialmente disponível para adesão
              //userId              // Opcional: Identificador do usuário criador do grupo
          }
      });
      res.status(201).json(group);
  } catch (error) {
      console.error('Failed to create group:', error);
      res.status(500).json({ message: 'Failed to create group' });
  }
});

// Rota para Listar Grupos Disponíveis
router.get('/groups', async (req, res) => {
  try {
      const groups = await prisma.group.findMany({
          where: {
              isAvailable: true
          },
          include: {
              memberships: true  // Inclui detalhes dos membros para contar
          }
      });
      // Filtra grupos que têm menos de 5 membros
      const availableGroups = groups.filter(group => group.memberships.length < 5);
      res.json(availableGroups);
  } catch (error) {
      console.error('Failed to retrieve groups:', error);
      res.status(500).json({ message: 'Failed to retrieve groups' });
  }
});

//Rota para adesão de grupo
router.post('/groups/:id/members', async (req, res) => {
  const { userId } = req.body;  // Assume que userId é passado no corpo da requisição
  const groupId = req.params.id;

  try {
      const group = await prisma.group.findUnique({
          where: { id: groupId },
          include: { memberships: true }
      });

      if (!group) {
          return res.status(404).json({ message: 'Group not found' });
      }

      if (group.memberships.length >= 5) {
          return res.status(400).json({ message: 'Group is full' });
      }

      // Adiciona o usuário ao grupo
      const newMember = await prisma.membership.create({
          data: {
              groupId,
              userId
          }
      });

      // Atualiza a disponibilidade do grupo se necessário
      if (group.memberships.length + 1 <= 5) {
          await prisma.group.update({
              where: { id: groupId },
              data: { isAvailable: false }
          });
      }

      res.status(201).json(newMember);
  } catch (error) {
      console.error('Failed to add member to group:', error);
      res.status(500).json({ message: 'Failed to add member to group' });
  }
});

// rota para atualizar um grupo
router.put('/groups/:id', async (req, res) => {
  const { id } = req.params;
  const { name, discord, weekDays, hourStart, hourEnd, isPrivate } = req.body;
  try {
      const group = await prisma.group.update({
          where: { id },
          data: { name, discord, weekDays, hourStart, hourEnd, isPrivate }
      });
      res.json(group);
  } catch (error) {
      console.error('Failed to update group:', error);
      res.status(500).json({ message: 'Failed to update group' });
  }
});

// rota para deletar um grupo específico
router.delete('/groups/:id', async (req, res) => {
  const { id } = req.params;
  try {
      const membershipCount = await prisma.membership.count({
          where: { groupId: id }
      });
      if (membershipCount > 0) {
          return res.status(400).json({ message: 'Cannot delete group with members' });
      }
      const group = await prisma.group.delete({
          where: { id }
      });
      res.json({ message: 'Group deleted successfully', group });
  } catch (error) {
      console.error('Failed to delete group:', error);
      res.status(500).json({ message: 'Failed to delete group' });
  }
});

export default router;