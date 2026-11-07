export default {
  client: "sqlite3",
  connection: {
    filename: "./src/database/database.db",
  },
  useNullAsDefault: true,
  migrations: {
    extesions: "ts",
    diretory: "./src/database/migrations"
  },
}