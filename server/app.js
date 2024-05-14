import express from 'express';
import {Registro_Model} from './db.js';
const app = express();
app.use(express.json());

app.post('/create-register/:data',  async (req, res) => {
    const {data} = req.body;
    await Registro_Model.createRegistro(data);    
    res.send('Hello World');
    }
);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
    }

);