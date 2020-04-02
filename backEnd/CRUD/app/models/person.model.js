module.exports = (sequelize, Sequelize) => {
    const Person = sequelize.define("person", {
      name: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      yearOfBirth: {
        type: Sequelize.DATE
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
          type: Sequelize.STRING
      },
      educationLevel: {
          type: Sequelize.INTEGER.UNSIGNED
      },
      image: {
          type: Sequelize.STRING
      },
      cardID: {
          type: Sequelize.INTEGER.UNSIGNED
      },
      points: {
          type: Sequelize.INTEGER.UNSIGNED
      }
    });
  
    return Person;
  };