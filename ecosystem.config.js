module.exports = {
  apps: [
    {
      name: 'api',
      script: 'server.ts',
      env: {
        DATABASE_CLIENT: 'postgres',
        DATABASE_HOST: '127.0.0.1',
        DATABASE_PORT: '5432',
        DATABASE_NAME: 'leab',
        DATABASE_USERNAME: 'leab',
        DATABASE_PASSWORD: '***REMOVED***',
        DATABASE_SSL: 'false',
        DATABASE_SSL_REJECT_UNAUTHORIZED: 'false',
        JWT_SECRET: '***REMOVED***',
      },
    },
  ],
};

