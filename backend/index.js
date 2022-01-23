const express = require('express');
const app = express();
const conectarDB = require('./../backend/config/db');
const cors = require('cors')


conectarDB();

app.use(express.json({ extend: true }));//json
app.use(cors());

const PORT = process.env.PORT_SERVER || 4000;

//Rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/traductor', require('./routes/traductor'));

app.listen(PORT, () => {
    console.log(`Server escuchando en PORT: ${PORT}`);
});