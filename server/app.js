import express from 'express';
import {Registro_Model} from './db.js';
const app = express();
app.use(express.json());

app.post('/create-register/',  async (req, res) => {
    try {
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