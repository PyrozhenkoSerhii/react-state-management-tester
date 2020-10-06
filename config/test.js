module.exports = {
  api: {
    port: process.env.PORT,
    host: process.env.HOST,
    secret: process.env.SECRET,
    logs: {
      warning: "logs/warnings.test.log",
      error: "logs/errors.test.log",
    },
  },
  db: {
    connectionString: process.env.DB_CONNECTION_STRING_TEST,
    databaseName: process.env.DB_NAME_TEST,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
    maxDumpSize: 100000000,
  },
};
