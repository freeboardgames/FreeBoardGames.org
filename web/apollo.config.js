module.exports = {
  client: {
    service: {
      name: 'fbg-backend',
      localSchemaFile: '../common/gql/schema.gql',
    },
    includes: ['src/**/*.ts{,x}'],
  },
};
