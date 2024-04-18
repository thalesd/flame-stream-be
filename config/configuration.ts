export default () => ({
    port: process.env.PORT || 3000,
    database: {
        host: process.env.DATABASE_HOST
    }
});

function buildDatabaseHost(envVars){
    return `${envVars.DATABASE_HOST_START}${envVars.DATABASE_USER}:${envVars.DATABASE_PASSWORD}${envVars.DATABASE_HOST_END}`
}