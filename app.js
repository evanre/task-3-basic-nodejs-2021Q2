require('dotenv').config();
const express = require('express');
const { sequelize } = require('./db');
const user = require('./controllers/usercontroller');
const game = require('./controllers/gamecontroller');

const app = express();
const { SERVER_PORT } = process.env;

sequelize.sync();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', user);
app.use(require('./middleware/validate-session'));

app.use('/api/game', game);

app.listen(SERVER_PORT, () => {
  console.log(`App is listening, http://localhost:${SERVER_PORT}`);
});
