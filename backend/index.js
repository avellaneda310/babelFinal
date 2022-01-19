const express = require('express');
const app = express();
const conectarDB = require('./../backend/config/db');

const usuariosRoute = require('./routes/usuarios')

conectarDB();

// Habilitamos express.json
app.use(express.json({ extend: true }));

// port donde escucha el server
const PORT = process.env.PORT_SERVER || 4000;

// Crea ruta usuario api/usuarios
app.use('/api/usuarios', usuariosRoute);
app.use('/api/auth', require('./routes/auth'));// es el login....
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/traductor', require('./routes/traductor'));

app.listen(PORT, () => {
    console.log(`Server escuchando en PORT: ${PORT}`);
});