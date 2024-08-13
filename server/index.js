const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const expressConfig = require('./config/expressConfig');
const { initDB } = require('./config/databaseConfig');
const { PORT } = require('./config/env');
const router = require('./routes');


const app = express();

expressConfig(app)
app.use(cors({ origin: 'http://localhost:5173', credentials: true }))
app.use(cookieParser());
app.use(router);

initDB();

app.listen(PORT, () => console.log(`Server is listening at port ${PORT}`));