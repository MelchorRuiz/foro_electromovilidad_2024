import mysql from 'mysql2/promise';
import 'dotenv/config';

const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306
}

const QUERY = 'INSERT INTO users (uuid, name, email, phone, company, position, country, state, city) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'

export default async function createRegistro({uuid, name, email, phone, company, position, country, state, city}) {
        
    const connection = await mysql.createConnection(config);

    try{
        await connection.query(
            QUERY, [uuid, name, email, phone, company, position, country, state, city]
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
