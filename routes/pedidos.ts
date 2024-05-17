import express from "express";
import PedidosController from '../controllers/pedidos-controller';
const router = express.Router();


router.post('/', PedidosController);


export default router;
