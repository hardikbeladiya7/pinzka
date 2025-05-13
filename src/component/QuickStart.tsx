"use client";
import { Box, Button } from "@mui/material";
import React, { useState } from "react";

const QuickStart = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [disable, setDisable] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<any[]>([
    { option: "", isCorrect: null },
  ]);
  const [questions, setQuestions] = useState<any[]>([
    {
      id: 14,
      quiz_id: 6,
      question: "Which movie features the quote, I'll be back?",
      optionA: "Predator",
      optionB: "The Terminator",
      optionC: "Commando",
      optionD: "Total Recall",
      correct_answer: "The Terminator",
      coin: 200,
      isActive: true,
      created_at: "2024-09-27T11:20:29.000000Z",
      updated_at: "2024-09-27T11:20:29.000000Z",
    },
    {
      id: 15,
      quiz_id: 6,
      question: "Who is the highest-grossing actor of all time?",
      optionA: "Robert Downey Jr.",
      optionB: "Tom Hanks",
      optionC: "Samuel L. Jackson",
      optionD: "Scarlett Johansson",
      correct_answer: "Samuel L. Jackson",
      coin: 200,
      isActive: true,
      created_at: "2024-09-27T11:20:29.000000Z",
      updated_at: "2024-09-27T11:20:29.000000Z",
    },
  ]);

  const isCorrectAnswer = (option: string | null, ans: any) => {
    setDisable(true);
  };

  return (
    <Box
      className="quiz_main"
      sx={{ borderBottom: 1, borderColor: "divider", padding: "15px" }}
    >
      <Box className="ad250">
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-9987228570589642"
          data-ad-slot="9890041426"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </Box>
      <Box>
        <h1 style={{ textAlign: "center", fontSize: "24px" }}>Quick Start!</h1>
        <h5
          style={{
            textAlign: "center",
            fontSize: "16px",
            margin: "5px 0px",
            opacity: "0.5",
          }}
        >
          Answer 2 questions and win upto 200 coins.
        </h5>
        <Box className="quiz_box">
          <Box className="quiz_count">
            <div className="timer animatable">
              <p className="quiz_count_text">{currentQuestionIndex + 1}</p>
            </div>
          </Box>
          <h1 className="qution">{questions[currentQuestionIndex].question}</h1>
          <Box className="options">
            {/* OPTION A */}
            <Button
              key={questions[currentQuestionIndex].optionA}
              className={`option_button_disabled
                  ${selectedAnswer[currentQuestionIndex].option === "optionA"
                  ? selectedAnswer[currentQuestionIndex].isCorrect === true
                    ? "option_button_correct"
                    : "option_button_wrong"
                  : "view_option_button"
                }`}
              variant="contained"
              onClick={() =>
                isCorrectAnswer(
                  "optionA",
                  questions[currentQuestionIndex].optionA
                )
              }
              disabled={disable}
            >
              {questions[currentQuestionIndex].optionA}
            </Button>

            {/* OPTION B */}
            <Button
              key={questions[currentQuestionIndex].optionB}
              className={`option_button_disabled
                  ${selectedAnswer[currentQuestionIndex].option === "optionB"
                  ? selectedAnswer[currentQuestionIndex].isCorrect === true
                    ? "option_button_correct"
                    : "option_button_wrong"
                  : "view_option_button"
                }`}
              variant="contained"
              onClick={() =>
                isCorrectAnswer(
                  "optionB",
                  questions[currentQuestionIndex].optionB
                )
              }
              disabled={disable}
            >
              {questions[currentQuestionIndex].optionB}
            </Button>

            {/* OPTION C */}
            <Button
              key={questions[currentQuestionIndex].optionC}
              className={`
                  ${selectedAnswer[currentQuestionIndex].option === "optionC"
                  ? selectedAnswer[currentQuestionIndex].isCorrect === true
                    ? "option_button_correct"
                    : "option_button_wrong"
                  : "view_option_button"
                }`}
              variant="contained"
              onClick={() =>
                isCorrectAnswer(
                  "optionC",
                  questions[currentQuestionIndex].optionC
                )
              }
              disabled={disable}
            >
              {questions[currentQuestionIndex].optionC}
            </Button>

            {/* OPTION D */}
            <Button
              key={questions[currentQuestionIndex].optionD}
              className={`
                  ${selectedAnswer[currentQuestionIndex].option === "optionD"
                  ? selectedAnswer[currentQuestionIndex].isCorrect === true
                    ? "option_button_correct"
                    : "option_button_wrong"
                  : "view_option_button"
                }`}
              variant="contained"
              onClick={() =>
                isCorrectAnswer(
                  "optionD",
                  questions[currentQuestionIndex].optionD
                )
              }
              disabled={disable}
            >
              {questions[currentQuestionIndex].optionD}
            </Button>
          </Box>
        </Box>
        <Box className="quiz_box">
          <h2 style={{ textAlign: "center", fontSize: "24px", color:'#3b82f6' }}>Fun Facts</h2>
          <p>
            Mahendara Singh Dhoni clenches a title of being the most successful
            captain in the IPL history.
          </p>
        </Box>
        <Box sx={{ marginTop: "20px" }}>
          <h1 style={{ textAlign: "center", fontSize: "24px" }}>
            Play Quiz and Win Coins!
          </h1>
          <ul
            style={{
              padding: "15px 0px 0px 15px",
              textAlign: "left",
              color: "#FFFFFF",
            }}
          >
            <li>
              Play Quizzes in 25+ categories like GK, Sports, Bollywood,
              Business, Cricket & more!
            </li>
            <li>Compete with lakhs of other players!</li>
            <li>Win coins for every game</li>
            <li>Trusted by millions of other quiz enthusiasts like YOU!</li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default QuickStart;
