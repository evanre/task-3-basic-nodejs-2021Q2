require('dotenv').config();
const express = require('express');

const app = express();
const { SERVER_PORT } = process.env;

db.sync();
app.use(require('body-parser'));

app.use('/api/auth', user);
app.use(require('./middleware/validate-session'));

app.use('/api/game', game);

app.listen(SERVER_PORT, () => {
  console.log(`App is listening, http://localhost:${SERVER_PORT}`);
});
