// Importar librerías
const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articlesController');

// Definir ruta para obtener artículos
router.get('/',
    articlesController.getArticles,
);

router.delete('/:id',
    articlesController.deleteArticle,
)

// Exportar rutas
module.exports = router;
