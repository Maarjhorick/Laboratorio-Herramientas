const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Tarea #17: Login de Usuario
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    // Lógica de validación aquí...
    
    // Tarea #18: Generación de JWT
    const token = jwt.sign(
        { id: "user_id_ejemplo", role: "admin" }, 
        process.env.JWT_SECRET, 
        { expiresIn: process.env.JWT_EXPIRY || '24h' }
    );
    res.json({ token });
});

module.exports = router;