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
        uuid,
        name,
        email,
        phone,
        company,
        position,
        country,
        state,
        city,
    }) {
        
        const connection = await mysql.createConnection(config);
        try{
            await connection.query(
                'INSERT INTO users (uuid, name, email, phone, company, position, country, state, city) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [uuid, name, email, phone, company, position, country, state, city]
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
