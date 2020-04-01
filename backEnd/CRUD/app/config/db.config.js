module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "V1v2v3v4v5",
    DB: "pitanja_odgovori",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };