const Traductor = require('../models/traductor');
const Proyecto = require('../models/Proyectos');
const { validationResult } = require('express-validator');

// craar traductor
exports.crearTraductor = async (req, res) => {

    // revisamos si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }

    try {
        // Extraer el proyecto y comprobar si existe
        const { proyecto } = req.body;
        const existeProyecto = await Proyecto.findById(proyecto);
        console.log(existeProyecto)
        if (!existeProyecto) {
            return res.status(404).json({ msg: 'Proyecto no encontrado' });
        }

        // Revisar si el proyecto actual pertenece al usuario autenticado        
        // como el payload del jwt tenemos la info
        if (existeProyecto.creador.toString() != req.usuario.id) {
            return res.status(401).json({ msg: "No Autorizado" });
        }

        // Creamos traductor
        const traductor = new Traductor(req.body);
        await traductor.save();
        res.json({ traductor });


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

// Obtener traductor por proyecto
exports.obtenerTraductor = async (req, res) => {
    try {
        // Extraer el proyecto y comprobar si existe
        const { proyecto } = req.body;
        const existeProyecto = await Proyecto.findById(proyecto);
        console.log(existeProyecto)
        if (!existeProyecto) {
            return res.status(404).json({ msg: 'Proyecto no encontrado' });
        }

        // Revisar si el proyecto actual pertenece al usuario autenticado        
        // como el payload del jwt tenemos la info
        if (existeProyecto.creador.toString() != req.usuario.id) {
            return res.status(401).json({ msg: "No Autorizado" });
        }

        // Obtener Traductor por el proyecto
        const traductor = await Traductor.find({ proyecto });
        res.json({ traductor });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

