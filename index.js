const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");

const db = require("./models");
const APIRouter = require("./routes/api");

dotenv.config();
const app = express();
db.sequelize.sync();

// 요청로그찍음
app.use(morgan("dev"));

// 이전에 body-parser 가 대신하던 부분
app.use(express.json()); // json형식으로 본문처리
app.use(express.urlencoded({ extended: true })); // form data 처리
app.use(cors());

app.use("/", APIRouter);

app.listen(3000, () => {
  console.log(`server is running on 3000`);
});
