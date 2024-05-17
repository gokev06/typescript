import db from '../config/config-db';
import Pedido from '../Dto/pedidosDto';


class ProductosRepository{

    static async registrarPedido(pedido: Pedido): Promise<boolean> {
        try {
            
            const sql = 'INSERT INTO pedidos (id_pro, cantidad , direccion_entrega) VALUES (?, ?, ?)';
            const values = [pedido.id_pro,pedido.cantidad, pedido.direccion_entrega];
    
            const [result] = await db.execute(sql, values);
    
            
            if (result && ('affectedRows' in result) && result.affectedRows && result.affectedRows > 0) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error('Error al registrar el pedido de domicilio:', error);
            throw error;
        }
    }

    static async actualizarProducto(pedido : Pedido): Promise<boolean>{
        try{

        const sql = 'UPDATE productos set cantidad = cantidad -  ? WHERE id_pro = ?';
        const values = [pedido.cantidad ,pedido.id_pro];

        const [result] = await db.execute(sql, values);

        
        if (result && ('affectedRows' in result) && result.affectedRows && result.affectedRows > 0) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Error al registrar el pedido de domicilio:', error);
        throw error;
    }
    }
    

}



export default ProductosRepository;