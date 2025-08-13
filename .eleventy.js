// .eleventy.js
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {

    // Filtro para formatear fechas
    eleventyConfig.addFilter("date", (dateObj, format) => {
        if (typeof dateObj === 'string' && dateObj.toLowerCase() === 'now') {
            return DateTime.now().toFormat(format);
        }
        const dt = DateTime.fromJSDate(dateObj, { zone: 'utc' });
        if (format === 'iso') {
            return dt.toISODate();
        }
        return dt.setLocale('es').toLocaleString(DateTime.DATE_FULL);
    });

    // Le decimos a Eleventy que vigile los cambios en el CSS final para recargar el navegador
    eleventyConfig.addWatchTarget("./_site/css/style.css");

    return {
        // ESTA ES LA LÍNEA CLAVE QUE FALTABA:
        // Le decimos explícitamente qué formatos son plantillas que debe procesar.
        templateFormats: ["md", "njk", "html"],

        // Mapeamos las extensiones a los motores de plantilla
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",

        dir: {
            input: "src",
            output: "_site",
            includes: "_includes"
        }
    };
};