import { Request, Response } from "express";
import dotenv from "dotenv";
import DomicilioService from '../services/pedidosServices';
dotenv.config();


let PedidosController = async (req: Request, res: Response) => {
    const { id_pro, cantidad , direccion_entrega } = req.body;

    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            return res.status(401).json({ message: 'Cabecera de autorización no proporcionada' });
        }
                
        const pedidoRealizado = await DomicilioService.pedirDomicilio( id_pro,cantidad, direccion_entrega);


        if (pedidoRealizado) {
            return res.status(201).json({ message: 'Pedido realizado con éxito' });
        } else {
            return res.status(500).json({ message: 'Error al realizar el pedido' });
        }
    } catch (error) {
        console.error('Error al procesar el pedido a domicilio:', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
}

export default PedidosController;