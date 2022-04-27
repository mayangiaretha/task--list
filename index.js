import express from 'express';
import bodyParser from 'body-parser';
import itemsRoutes from './ROUTES/items.js';

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.use('/items', itemsRoutes);

app.get('/', (req, res) => res.json('task completed'));

app.listen(PORT, () =>
  console.log(`server Running on port: http://localhost:${PORT}`)
);

