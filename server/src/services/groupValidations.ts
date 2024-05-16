import { body, ValidationChain } from 'express-validator';

const createGroupValidations: ValidationChain[] = [
    body('name').not().isEmpty().withMessage('Nome é Requerido'),
    body('discord').optional().isURL().withMessage('Link do Discord deve ser uma URL válida'),
    body('weekDays').not().isEmpty().withMessage('Dias da semana é Requerido'),
    body('hourStart').isInt({ min: 0, max: 23 }).withMessage('Hora de inicio deve ser entre 0 e 23'),
    body('hourEnd').isInt({ min: 0, max: 23 }).withMessage('Hora de término deve ser entre 0 e 23'),
    body('isPrivate').isBoolean().withMessage('isPrivate deve ser um valor booleano'),
    body('userId').optional().isString().withMessage('Id do usuário deve ser uma string válida'),
];

export default createGroupValidations;
