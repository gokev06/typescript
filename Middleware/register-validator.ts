import { log } from 'console';
import { Request, Response, NextFunction } from 'express';
import { check, validationResult } from 'express-validator';

const validatorParams = [
    check('email').isEmail().withMessage('El email debe tener @'),
    check('name').isLength({ min: 1, max: 255 }).withMessage('El nombre debe tener entre 1 y 255 caracteres'),
    check('lastName ').isLength({ min: 1, max: 255 }).withMessage('El apellido debe tener entre 1 y 255 caracteres'),
    check('establecimiento ').isLength({ min: 1, max: 255 }).withMessage('El nombre del establecimiento debe tener entre 1 y 255 caracteres'),
    check('departamento').isLength({ min: 1, max: 255 }).withMessage('El departamento debe tener entre 1 y 255 caracteres'),
    check('municipio').isLength({ min: 1, max: 255 }).withMessage('El municipio debe tener entre 1 y 255 caracteres'),
    check('direccion').isLength({ min: 1, max: 255 }).withMessage('La dirección debe tener entre 1 y 255 caracteres'),
    check('phoneNumber')
    .isLength({ min: 1, max: 20 }).withMessage('El teléfono debe tener entre 1 y 20 caracteres')
    .isNumeric().withMessage('El teléfono debe contener solo números'),
    check('password').isLength({ min: 8, max: 15 }).withMessage('La contraseña debe tener entre 8 y 15 caracteres'),
  ];
  
  function validator(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);    
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  }
  
  export {
    validatorParams,
    validator
  };