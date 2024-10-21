
const express = require('express');
const app = express();
const routes = require('./routes/default_Router');
const bodyParser = require('body-parser');
const db = require('./config/db');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/v1', routes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}/v1`);
});
