const express = require('express');
const router = express.Router();
const traductorController = require('../controllers/traductorController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');


// crear una tarea
// api/Tareas
router.post('/',
    auth,
    [
        check('nombre', 'El nombre del traductor es obligatorio').not().isEmpty(),
        check('proyecto', 'El proyecto es obligatorio').not().isEmpty()
    ],
    traductorController.crearTraductor
);

// Obtener las tarea / as  por proyecto
router.get('/',
    auth,
    [
        check('proyecto', 'El ID de proyecto es obligatorio').not().isEmpty()
    ],
    traductorController.obtenerTraductor
)
module.exports = router;