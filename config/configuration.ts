export default () => ({
  port: process.env.PORT || 3000,
  database: {
    host: buildDatabaseHost(process.env),
  },
});

function buildDatabaseHost(envVars) {
  const DatabaseHostVars = [
    envVars.DATABASE_HOST_START,
    envVars.DATABASE_USER_PASSWORD,
    envVars.DATABASE_HOST_COLLECTION,
    envVars.DATABASE_HOST_ENV,
    envVars.DATABASE_HOST_QUERY_PARAMS,
  ];

  return DatabaseHostVars.join('');
}
