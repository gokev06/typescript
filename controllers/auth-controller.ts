const bcrypt = require("bcryptjs");
const db = require('../config/config-db.js');
const express = require('express');
const jwt = require('jsonwebtoken');


import UserRepository from '../repositories/UserRepository';
import { Request, Response } from 'express';
import jwtLibrary from "jsonwebtoken";


const secretKey = 'jhhkjkhghg58'; 

let auth = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const result: any = await UserRepository.sel(email); 
    console.log(333, result);
    console.log(password);
    if (result[0].length > 0) {
      const isPasswordValid = await bcrypt.compare(password, result[0][0].password);
      if (isPasswordValid) {
        // Si la contraseña es válida, generar un token JWT
        const token = jwt.sign({ email: result[0][0].email }, secretKey, { expiresIn: '1h' }); 
        return res.status(200).json({
          status: 'Successful authentication',
          token: token 
        });
      }
    }
    return res.status(401).json({
      status: 'Incorrect email or password'
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'Internal server error',
      error : error 
    });
  }
}

export default auth;