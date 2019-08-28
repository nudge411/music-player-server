const express = require("express");
const router = express.Router();
const models = require("../models");
var problemsAnswer = [];

var _filterAnswer = function(objAnswer) {
  if (objAnswer === undefined) {
    objAnswer = "void";
  } else if (objAnswer.slice(0, 14) === "data:image/png") {
    console.log(objAnswer, objAnswer.length);
    objAnswer = "";
  } else {
    // space 또는 한글의 오탈자로 인하여 오답으로 처리되는 case를 방지...
    objAnswer = objAnswer.replace(/[^-0-9]/g, "");
  }
  return objAnswer;
};

router.get("/fetchProblem", async (req, res, next) => {
  try {
    let problems = await models.Problems.findAll();
    problems.forEach((problem, id) => {
      problemsAnswer.push(problem.answer);
      problem.id = id + 1;
    });
    res.status(200).send({ problems });
  } catch (error) {
    console.error(error);
    res.sendStatus(400);
  }
});

router.post("/submit", async (req, res, next) => {
  let input = JSON.parse(req.body.input);
  let viewResults = [];
  let dbResults = [];

  input.forEach((user, id) => {
    let getUserAnswer = _filterAnswer(user.answer);
    let getProblemsAnswer = _filterAnswer(problemsAnswer[id]);

    dbResults.push({
      problem_id: id + 1,
      result: Boolean(getProblemsAnswer === getUserAnswer),
      answer: getUserAnswer
    });

    viewResults.push({
      id: id + 1,
      result: Boolean(getProblemsAnswer === getUserAnswer),
      answer: problemsAnswer[id]
    });
  });
  try {
    await models.Results.bulkCreate(dbResults);
    res.status(200).send({ results: viewResults });
  } catch (error) {
    res.sendStatus(400);
  }
});

module.exports = router;
