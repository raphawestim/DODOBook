import { body, ValidationChain } from 'express-validator';

const createGroupValidations: ValidationChain[] = [
    body('name').not().isEmpty().withMessage('Name is required'),
    body('discord').optional().isURL().withMessage('Discord must be a valid URL'),
    body('weekDays').not().isEmpty().withMessage('WeekDays are required'),
    body('hourStart').isInt({ min: 0, max: 23 }).withMessage('HourStart must be between 0 and 23'),
    body('hourEnd').isInt({ min: 0, max: 23 }).withMessage('HourEnd must be between 0 and 23'),
    body('isPrivate').isBoolean().withMessage('isPrivate must be a boolean'),
    body('userId').optional().isString().withMessage('UserId must be a valid string'),
];

export default createGroupValidations;
