// Middleware para asegurar que solo docentes asignados accedan
const verifyDocente = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).send("Token requerido");
    // Lógica de verificación...
    next();
};

module.exports = { verifyDocente };