// Importar Modelo
const Article = require('../models/Articles');

// Definir funciones
exports.getArticles = async (_, res) => {
    // Intentar obtener informaci+on d ela bd
    try {
        const articles = await Article.find({ show: true }).sort({ created_at: -1 });
        return res.status(200).json({ articles });
    } catch (error) {
        return res.status(400).json({ msg: 'Hubo un error al intentar obtener la información de la BD' })
    };
};

exports.deleteArticle = async (req, res) => {
    // Obtener id del artículo
    const { id } = req.params;

    // Obtener información del artículo
    const article = await Article.findById(id).exec();
    if (!article) {
        return res.status(400).json({ msg: 'El artículo no se encuentra registrado' })
    };

    // Actualizar información
    try {
        await Article.findByIdAndUpdate(id, { show: false });
        return res.status(200).json({ msg: 'El artículo se eliminó correctamente' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Hubo un error al intentar eliminar la información del artículo' });
    };
};