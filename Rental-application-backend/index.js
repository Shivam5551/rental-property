import express from 'express';
import cors from 'cors';
import router from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', router);

app.listen(PORT);