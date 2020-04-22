module.exports = (sequelize, Sequelize) => {
    const Answer = sequelize.define("answer", {
     textWrong1:{
         type: Sequelize.STRING
     },
     textWrong2:{
        type: Sequelize.STRING
    },
    textWrong3:{
        type: Sequelize.STRING
    },
    textRight:{
        type: Sequelize.STRING
    },
    explanation:{
        type: Sequelize.STRING
    }
    });
  
    return Answer;
  };