import express from 'express';
import cors from 'cors';
import { Registro_Model } from './db.js';
import { validateUser } from './validations/user_validation.js';
const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:4321',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

app.get('/healthcheck/', (req, res) => {
    res.send({status: 'ok'});
})

app.post('/create-register/',  async (req, res) => {
    try {
        const errors = validateUser(req.body);
        if (errors.length > 0) {
            res.status(400).send(errors);
            return;
        }
        await Registro_Model.createRegistro(req.body);
        res.status(201).send('User created');
    } catch (error) {
        if (error.message === 'Mail or telephone already exist') {
            res.status(409).send(error.message);
        } else {
            res.status(500).send('Internal Server Error');
        }
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});