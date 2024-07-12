import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import QRCode from 'qrcode';
import createRegistro from '../src/db.js'
import validateUser from './validations.js';
import sendEmail from '../src/email.js'
import 'dotenv/config';

const app = express();

app.use(cors({
    origin: process.env.DEV ? 'http://localhost:4321' : ["https://www.foro-electromovilidad.igeco.mx", "https://foro-electromovilidad.igeco.mx"],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));
app.use(express.json());

app.get('/healthcheck/', (_, res) => {
    res.send({status: 'ok'});
})

app.post('/create-register/',  async (req, res) => {
    const user = req.body;
    user.uuid = uuidv4();
    user.qr = await QRCode.toDataURL(user.uuid);

    const errors = validateUser(user);
    if (errors.length > 0) {
        res.status(400).send(errors);
        return;
    }
    
    try {
        await createRegistro(user);
    } catch (error) {
        if (error.message === 'Mail or telephone already exist') {
            res.status(409).send(error.message);
        } else {
            res.status(500).send('Internal Server Error');
        }
        return;
    }
    
    try {
        await sendEmail(user);
    } catch (error) {
        console.error('Error sending email', error);
        res.status(500).send('Internal Server Error');
        return;
    }

    res.status(201).send({qr: user.qr});
});

export default app;