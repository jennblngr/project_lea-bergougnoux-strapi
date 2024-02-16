export default {
  graphql: {
    enabled: true,
    config: {
      defaultLimit: 100,
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
	introspection: true,
	playground: true,
      },
    },
  },
};
