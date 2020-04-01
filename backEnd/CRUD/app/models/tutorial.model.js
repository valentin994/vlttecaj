module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    level: {
      type: Sequelize.INTEGER.UNSIGNED
    }
  });

  return Tutorial;
};