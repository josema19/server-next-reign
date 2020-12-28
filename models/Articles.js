// Importar librerías
const mongoose = require('mongoose');

// Definir esquema
const Schema = mongoose.Schema;

// Artículos
const articlesSchema = new Schema({
    author: {
        type: String,
        trim: true,
    },
    created_at: Date,
    title: {
        type: String,
        trim: true,
    },
    story_title: {
        type: String,
        trim: true,
    },
    story_url: {
        type: String,
        trim: true,
    },
    url: {
        type: String,
        trim: true,
    },
    show: {
        type: Boolean,
        default: true,
    }
});

// Exportar modelo
module.exports = mongoose.model('Article', articlesSchema);