import ProductosRepository from '../repositories/ProductosRepository';
import PedidoDomicilio from '../Dto/pedidosDto';

class DomicilioService {

    static async pedirDomicilio(id_pro: number,cantidad:number, direccion_entrega: string): Promise<boolean> {
        try {
            const pedido: PedidoDomicilio = {
                id_pro,
                cantidad,
                direccion_entrega,
            };
            const result = await ProductosRepository.registrarPedido(pedido);
             await ProductosRepository.actualizarProducto(pedido);
            return result;
        } catch (error) {
            console.error('Error al registrar el pedido de domicilio:', error);
            throw error;
        }
    }
}

export default DomicilioService;