const strapiServer = require('@strapi/strapi');
const app = strapiServer({ distDir: './dist' });
app.start();
