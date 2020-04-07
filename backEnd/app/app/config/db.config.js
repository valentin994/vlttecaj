module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "V1v2v3v4v5",
  DB: "userdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
