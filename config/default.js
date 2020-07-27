module.exports = {
  api: {
    port: process.env.PORT,
    host: process.env.HOST,
    secret: process.env.SECRET,
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
