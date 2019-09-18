const express = require("express");
const router = express.Router();
const models = require("../models");

router.get("/album", async (req, res, next) => {
  try {
    let result = [];
    let Albums = await models.Album.findAll();
    Albums.forEach(Album => {
      const { id, title, artist, cover_image, sale_date } = Album.dataValues;
      result.push({ id, title, artist, cover_image, sale_date });
    });
    res.status(200).send({ result });
  } catch (error) {
    console.error(error);
    res.sendStatus(400);
  }
});

router.get("/album/:id", async (req, res, next) => {
  let albumId = req.params.id;
  try {
    let result = [];
    let Albums = await models.Album.findAll({
      include: [
        {
          model: models.Song,
          as: "Songs",
          where: {
            albumId: albumId
          }
        }
      ]
    });
    Albums.forEach(Album => {
      result.push(Album.dataValues);
    });
    res.status(200).send({ result });
  } catch (error) {
    console.error(error);
    res.sendStatus(400);
  }
});

module.exports = router;
