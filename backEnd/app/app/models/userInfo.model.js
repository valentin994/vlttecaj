module.exports = (sequelize, Sequelize) => {
    const userInfo = sequelize.define("usersInfo", {
      name: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      points:{
          type: Sequelize.INTEGER
      }
    });
  
    return userInfo;
  };
  