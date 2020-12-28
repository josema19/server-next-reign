// Importar librerías
const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

// Crear conexión a la BD
const conectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log('DB Conected');
    } catch (error) {
        console.log('There was an error');
        console.log(error);
        process.exit(1);
    };
};

// Exportar módulo
module.exports = conectDB;