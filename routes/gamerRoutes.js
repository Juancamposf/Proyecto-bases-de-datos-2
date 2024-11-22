const express = require('express');
const Gamer = require('../models/Gamer');
const router = express.Router();

// Crear
router.post('/gamers', async (req, res) => {
    try {
        const gamer = await Gamer.create(req.body);
        res.status(201).json(gamer);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Leer
router.get('/gamers', async (req, res) => {
    try {
        const gamers = await Gamer.find();
        res.status(200).json(gamers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Actualizar
router.put('/gamers/:id', async (req, res) => {
    try {
        const updatedGamer = await Gamer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedGamer);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Eliminar
router.delete('/gamers/:id', async (req, res) => {
    try {
        await Gamer.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Gamer eliminado' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
