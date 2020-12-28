// Importar librerías
const CronJob = require('cron').CronJob;
const { saveArticles } = require('../middleware/saveArticles');

// Definir tarea
const job = new CronJob('0 */59 * * * *', async () => {
    saveArticles();
}, null, true, 'America/Santiago');

// Exportar módulo
module.exports = job;