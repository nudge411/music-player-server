"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Albums",
      [
        {
          title: "꽃갈피 둘",
          artist: "아이유",
          cover_image:
            "https://nudge411-music-player.s3.ap-northeast-2.amazonaws.com/music-player/cover/%EC%95%84%EC%9D%B4%EC%9C%A0_%EA%BD%83%EA%B0%88%ED%94%BC+%EB%91%98.jpg",
          kinds: "스페셜",
          genre: "포크/어쿠스틱, 발라드",
          style: "발라드, 포크 팝",
          company: "페이브엔터테인먼트, ㈜ 카카오 M, ㈜페이브엔터테인먼트",
          distributor: "㈜ 카카오 M",
          sale_date: "2017-09-22",
          createdAt: "2019-09-18",
          updatedAt: "2019-09-18"
        },
        {
          title: "장범준 3집",
          artist: "장범준",
          cover_image:
            "https://nudge411-music-player.s3.ap-northeast-2.amazonaws.com/music-player/cover/%EC%9E%A5%EB%B2%94%EC%A4%80_%EC%9E%A5%EB%B2%94%EC%A4%80+3%EC%A7%91.jpg",
          kinds: "정규",
          genre: "댄스/팝",
          style: "팝 락",
          company: "(주)버스커버스커",
          distributor: "㈜ 카카오 M",
          sale_date: "2019-03-21",
          createdAt: "2019-09-18",
          updatedAt: "2019-09-18"
        },
        {
          title: "그리고 봄",
          artist: "정승환",
          cover_image:
            "https://nudge411-music-player.s3.ap-northeast-2.amazonaws.com/music-player/cover/%EC%A0%95%EC%8A%B9%ED%99%98_%EA%B7%B8%EB%A6%AC%EA%B3%A0+%EB%B4%84.jpg",
          kinds: "정규",
          genre: "발라드",
          style: "발라드",
          company: "안테나",
          distributor: "지니뮤직",
          sale_date: "2018-02-19",
          createdAt: "2019-09-18",
          updatedAt: "2019-09-18"
        },
        {
          title: "Summer Nights",
          artist: "TWICE(트와이스)",
          cover_image:
            "https://nudge411-music-player.s3.ap-northeast-2.amazonaws.com/music-player/cover/%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4_Summer+Nights.jpg",
          kinds: "EP(미니)",
          genre: "댄스/팝",
          style: "댄스 팝",
          company: "JYP 엔터테인먼트",
          distributor: "Dreamus",
          sale_date: "2018-07-09",
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
