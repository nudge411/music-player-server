module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define(
    "Song",
    {
      title: {
        type: DataTypes.TEXT,
        allowNull: false
      },

      url: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci"
    }
  );

  Song.associate = db => {
    db.Song.belongsTo(db.Album);
  };

  return Song;
};
