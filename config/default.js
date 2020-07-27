module.exports = {
  api: {
    port: process.env.PORT,
    host: process.env.HOST,
    secret: process.env.SECRET,
    logs: {
      warning: "logs/warnings.default.log",
      error: "logs/errors.default.log",
    },
  },
  db: {
    connectionString: process.env.DB_CONNECTION_STRING,
    databaseName: process.env.DB_NAME,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
    maxDumpSize: 100000000,
  },
};
