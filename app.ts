/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import errorHandler from './src/middleware/errorHandler';
import routes from './src/routes';
import sequelize from './src/db';

const app = express();
const PORT = 8080;

app.use(cors({ origin: '*' }));

app.use(express.json());
app.use('/api', routes);

app.get('/', (_req, res) => {
  res.json({ hi: 'Hello World' });
});

app.use(errorHandler);

app.listen(PORT, async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('Database synced');
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
