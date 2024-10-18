import express from 'express';

const app = express();
const PORT = 8080;

app.get('/', (_req, res) => {
  res.json({ hi: 'Hello World' });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}`);
});
