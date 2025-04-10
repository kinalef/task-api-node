
const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) return res.status(401).json({ mensaje: 'Token no proporcionado' });

  try {
    const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
    req.usuario = decoded;
    next();

  } catch (error) {
    return res.status(403).json({ mensaje: 'Token inválido' });
  }
};

module.exports = verificarToken;