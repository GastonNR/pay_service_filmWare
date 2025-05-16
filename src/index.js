const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const rutas_pagos = require('./routes/pagos.routes');

dotenv.config();
const app = express();
const puerto = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/api/pagos', rutas_pagos);

app.listen(puerto, () => {
  console.log(`Servidor corriendo en http://localhost:${puerto}`);
}
);

module.exports = app;