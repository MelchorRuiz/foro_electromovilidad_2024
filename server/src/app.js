import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import { Registro_Model } from './db.js';
import { validateUser } from './validations/user_validation.js';
import { sendEmail } from './email/sendEmail.js';
import { createPdf } from './pdf.js';
import dotenv from 'dotenv'
dotenv.config()

const app = express();

app.use(express.json());
app.use(cors({
    origin: process.env.DEV ? 'http://localhost:4321' : 'https://www.example.com',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use('/acknowledgments', express.static(path.join(__dirname, '../acknowledgments')));

app.get('/healthcheck/', (_, res) => {
    res.send({status: 'ok'});
})

app.post('/create-register/',  async (req, res) => {
    const user = req.body;
    user.uuid = uuidv4();

    const errors = validateUser(user);
    if (errors.length > 0) {
        res.status(400).send(errors);
        return;
    }
    
    try {
        await Registro_Model.createRegistro(user);
    } catch (error) {
        if (error.message === 'Mail or telephone already exist') {
            res.status(409).send(error.message);
        } else {
            res.status(500).send('Internal Server Error');
        }
        return;
    }

    await createPdf(user);
    
    try {
        await sendEmail(user);
    } catch (error) {
        console.error('Error sending email', error);
        res.status(500).send('Internal Server Error');
        return;
    }

    res.status(201).send({uuid: user.uuid});
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});