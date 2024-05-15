import mysql from 'mysql2/promise';
import 'dotenv/config';
import { v4 } from 'uuid';

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
        company,
        position,
        state,
        city,
    }) {
        
        const connection = await mysql.createConnection(config);
        try{
            const [rows] = await connection.query(
                'INSERT INTO users (uuid, name, email, phone, company, position, state, city) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
                [v4(), name, email, phone, company, position, state, city]
            );
        } catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new Error('Mail or telephone already exist');
            } else {
                throw new Error(error);
            }
        } finally {
            await connection.end();
        }
    
    }
}
