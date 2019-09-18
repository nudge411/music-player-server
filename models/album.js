module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define(
    "Album",
    {
      title: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      artist: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      cover_image: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      kinds: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      genre: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      style: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      company: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      distributor: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      sale_date: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci"
    }
  );

  Album.associate = db => {
    db.Album.hasMany(db.Song, { as: "Songs" });
  };

  return Album;
};
