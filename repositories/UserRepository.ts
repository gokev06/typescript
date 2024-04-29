import db from '../config/config-db';
import User from '../Dto/UserDto';

class UserRepository {

    static async add(user: User){
        const sql = 'INSERT INTO users (email, nombres, apellidos,establecimiento,departamento,municipio, direccion, telefono, password) VALUES (?, ?, ?,?,?, ? , ?, ?, ?)';
        const values = [user.email, user.nombres,user.apellidos,user.establecimiento,user.departamento, user.municipio, user.direccion,  user.telefono, user.password];
        return db.execute(sql, values);
    }

        static async sel(email : string) {
            try {
              // Realizar una consulta SQL para buscar un usuario por su correo electrónico
              const query = 'SELECT * FROM users WHERE email = ?';
              const values = [email];

              // Devolver los resultados de la consulta
              return await db.execute(query, values);

            } catch (error) {
              // Manejar errores si ocurre algún problema durante la consulta
              console.error('Error en UserRepository.add:', error);
              throw error;
            }
          }
    }



export default UserRepository;