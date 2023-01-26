module.exports = {
  dev: {
    connectionString: "postgresql://postgres:pass@localhost/my_db",
    port: "3003",
  },
  production: {
    connectionString: process.env.POSTGRES_CONNECTION_STRING + "?ssl=true",
    port: process.env.PORT,
  },
};
