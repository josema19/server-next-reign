// Importar librerías
const axios = require('axios');

// Importar Modelo
const Article = require('../models/Articles');

// Exportar módulo
exports.saveArticles = async () => {
    // Obtener información de los artículos
    const articles = await axios({
        url: 'https://hn.algolia.com/api/v1/search_by_date?query=nodejs',
        method: 'get'
    });

    // Guardar información en la BD
    articles.data.hits.forEach(async (article) => {
        // Definir objeto
        const item = {
            author: article.author,
            created_at: article.created_at,
            title: article.title,
            url: article.url,
            story_title: article.story_title,
            story_url: article.story_url,
        };

        // Insertar sólo si el artículo no se encuentra en la BD
        const articleStored = await Article.findOne(item).exec();
        if (!articleStored) {
            // Guardar en la BD
            const articleBD = new Article(item);
            articleBD.save();
        };
    });

    console.log('Nuevos artículos almacenados en la BD');
}