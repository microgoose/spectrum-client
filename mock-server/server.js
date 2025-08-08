import cors from 'cors';
import express from 'express';
import fs from 'fs';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const app = express();
app.use(express.json());
app.use(cors());

// Автоматическая маршрутизация по методам и путям
['GET', 'POST', 'PUT', 'PATCH'].forEach((method) => {
  const data = JSON.parse(fs.readFileSync('./routes.json', 'utf-8'));
  const entries = data[method];
  if (!entries) return;

  Object.entries(entries).forEach(([route, response]) => {
    const routePath = '/' + route;

    app[method.toLowerCase()](routePath, (req, res) => {
      // Примерно 1 из 3 запросов будет задержан на случайное время до 3 секунд
      if (Math.random() < 1 / 3) {
        const delay = Math.floor(Math.random() * 3000); // от 0 до 2999 мс
        setTimeout(() => {
          res.json(response);
        }, delay);
      } else {
        res.json(response);
      }
    });
  });
});

const argv = yargs(hideBin(process.argv))
  .option('port', {
    alias: 'p',
    type: 'number',
    default: 3100,
  })
  .parse();

const PORT = argv.port;
app.listen(PORT, () => {
  console.log(`Mock server running at http://localhost:${PORT}`);
});
