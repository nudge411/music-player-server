module.exports = (sequelize, DataTypes) => {
  const Problems = sequelize.define(
    "Problems",
    {
      problem_text: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      type: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      choices: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      answer: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci"
    }
  );
  return Problems;
};
