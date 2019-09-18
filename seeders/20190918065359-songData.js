"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Songs",
      [
        {
          title: "가을아침",
          url:
            "https://nudge411-music-player.s3.ap-northeast-2.amazonaws.com/music-player/mp3/%EC%95%84%EC%9D%B4%EC%9C%A0_%EA%B0%80%EC%9D%84%EC%95%84%EC%B9%A8.mp3",
          Albumid: 1,
          createdAt: "2019-09-18",
          updatedAt: "2019-09-18"
        },
        {
          title: "비밀의 화원",
          url:
            "https://nudge411-music-player.s3.ap-northeast-2.amazonaws.com/music-player/mp3/%EC%95%84%EC%9D%B4%EC%9C%A0_%EB%B9%84%EB%B0%80%ED%99%94%EC%9B%90.mp3",
          Albumid: 1,
          createdAt: "2019-09-18",
          updatedAt: "2019-09-18"
        },
        {
          title: "잠 못드는 밤에 비는 내리고",
          url:
            "https://nudge411-music-player.s3.ap-northeast-2.amazonaws.com/music-player/mp3/%EC%95%84%EC%9D%B4%EC%9C%A0_%EC%9E%A0%EB%AA%BB%EB%93%9C%EB%8A%94%EB%B0%A4%EC%97%90%EB%B9%84%EB%8A%94%EB%82%B4%EB%A6%AC%EA%B3%A0.mp3",
          Albumid: 1,
          createdAt: "2019-09-18",
          updatedAt: "2019-09-18"
        },
        {
          title: "일산으로",
          url:
            "https://nudge411-music-player.s3.ap-northeast-2.amazonaws.com/music-player/mp3/%EC%9E%A5%EB%B2%88%EC%A4%80_%EC%9D%BC%EC%82%B0%EC%9C%BC%EB%A1%9C.mp3",
          Albumid: 2,
          createdAt: "2019-09-18",
          updatedAt: "2019-09-18"
        },
        {
          title: "노래방 에서",
          url:
            "https://nudge411-music-player.s3.ap-northeast-2.amazonaws.com/music-player/mp3/%EC%9E%A5%EB%B2%94%EC%A4%80_%EB%85%B8%EB%9E%98%EB%B0%A9%EC%97%90%EC%84%9C.mp3",
          Albumid: 2,
          createdAt: "2019-09-18",
          updatedAt: "2019-09-18"
        },
        {
          title: "당신과는 천천히",
          url:
            "https://nudge411-music-player.s3.ap-northeast-2.amazonaws.com/music-player/mp3/%EC%9E%A5%EB%B2%94%EC%A4%80_%EB%8B%B9%EC%8B%A0%EA%B3%BC%EB%8A%94%EC%B2%9C%EC%B2%9C%ED%9E%88.mp3",
          Albumid: 2,
          createdAt: "2019-09-18",
          updatedAt: "2019-09-18"
        },
        {
          title: "눈사람",
          url:
            "https://nudge411-music-player.s3.ap-northeast-2.amazonaws.com/music-player/mp3/%EC%A0%95%EC%8A%B9%ED%99%98_%EB%88%88%EC%82%AC%EB%9E%8C.mp3",
          Albumid: 3,
          createdAt: "2019-09-18",
          updatedAt: "2019-09-18"
        },
        {
          title: "다시 봄",
          url:
            "https://nudge411-music-player.s3.ap-northeast-2.amazonaws.com/music-player/mp3/%EC%A0%95%EC%8A%B9%ED%99%98_%EB%8B%A4%EC%8B%9C%EB%B4%84.mp3",
          Albumid: 3,
          createdAt: "2019-09-18",
          updatedAt: "2019-09-18"
        },
        {
          title: "비가온다",
          url:
            "https://nudge411-music-player.s3.ap-northeast-2.amazonaws.com/music-player/mp3/%EC%A0%95%EC%8A%B9%ED%99%98_%EB%B9%84%EA%B0%80%EC%98%A8%EB%8B%A4.mp3",
          Albumid: 3,
          createdAt: "2019-09-18",
          updatedAt: "2019-09-18"
        },
        {
          title: "CHILLAX",
          url:
            "https://nudge411-music-player.s3.ap-northeast-2.amazonaws.com/music-player/mp3/%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4_CHILLAX.mp3",
          Albumid: 4,
          createdAt: "2019-09-18",
          updatedAt: "2019-09-18"
        },
        {
          title: "Dance The Night Away",
          url:
            "https://nudge411-music-player.s3.ap-northeast-2.amazonaws.com/music-player/mp3/%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4_Dance+The+Night+Away.mp3",
          Albumid: 4,
          createdAt: "2019-09-18",
          updatedAt: "2019-09-18"
        },
        {
          title: "Shot thru the heart",
          url:
            "https://nudge411-music-player.s3.ap-northeast-2.amazonaws.com/music-player/mp3/%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4_Shot+thru+the+heart.mp3",
          Albumid: 4,
          createdAt: "2019-09-18",
          updatedAt: "2019-09-18"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
