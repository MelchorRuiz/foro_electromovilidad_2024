import mysql from 'mysql2/promise';
import 'dotenv/config';

const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
}

export class Registro_Model {

    static async createRegistro({
        name,
        email,
        phone,
        empresa,
        cargo,
        estado,
        municipio,
    }) {
        
        const connection = await mysql.createConnection(config);
        try{
            const [rows] = await connection.query(
                'INSERT INTO users (name, email, phone, empresa, cargo, estado, municipio) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [name, email, phone, empresa, cargo, estado, municipio]
            );
            console.log(rows);
            
        } catch (error) {
            console.log(error);
        } finally {
            await connection.end();
        }
    
    }
}
