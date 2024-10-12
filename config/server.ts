export default ({ env }) => ({
  host: env('HOST', '127.0.0.1'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  url: env('PUBLIC_URL', 'https://strapi.leabergougnoux.com'),
  proxy: env.bool('IS_PROXIED', true),
  cron: {
    enabled: env.bool('CRON_ENABLED', false),
  }
});
