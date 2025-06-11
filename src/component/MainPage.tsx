"use client";
import useCoin from '@/hooks/useCoin';
import { Box, Button, LinearProgress } from '@mui/material'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState, useRef } from 'react'

const MainPage = () => {

  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<any[]>([{ option: '', isCorrect: null }]);
  const [disable, setDisable] = useState(false);
  const { addCoin, deductCoin } = useCoin();
  const questions = [
    {
      id: 133,
      quiz_id: 14,
      question: "What is the capital of France?",
      optionA: "London",
      optionB: "Paris",
      optionC: "Berlin",
      optionD: "Rome",
      correct_answer: "Paris",
      coin: 100,
      isActive: true,
      created_at: "2024-09-30T10:59:42.000000Z",
      updated_at: "2024-09-30T10:59:42.000000Z"
    },
    {
      id: 134,
      quiz_id: 14,
      question: "Who wrote 'Romeo and Juliet'?",
      optionA: "William Shakespeare",
      optionB: "Charles Dickens",
      optionC: "Jane Austen",
      optionD: "Leo Tolstoy",
      correct_answer: "William Shakespeare",
      coin: 100,
      isActive: true,
      created_at: "2024-09-30T10:59:42.000000Z",
      updated_at: "2024-09-30T10:59:42.000000Z"
    }
  ];

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/ad_script.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const isCorrectAnswer = (option: string | null, ans: any) => {
    setDisable(true);
    const ansCorrect = questions[currentQuestionIndex].correct_answer === ans;
    const coins = questions[currentQuestionIndex].coin;
    const obj = {
      option,
      isCorrect: ansCorrect,
      correct_answer: questions[currentQuestionIndex].correct_answer
    }

    if (ansCorrect) {
      addCoin(coins);
    } else {
      deductCoin(coins);
    }

    selectedAnswer[currentQuestionIndex] = obj;
    const temp = [...selectedAnswer]
    setSelectedAnswer(temp);
    localStorage.setItem('result', JSON.stringify(selectedAnswer));
    getNextQuestion();
  }

  const getNextQuestion = () => {
    if (currentQuestionIndex < (questions.length - 1)) {
      setSelectedAnswer([...selectedAnswer, { option: '', isCorrect: null }])
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        setDisable(false);
      }, 650)
    } else {
      setTimeout(() => {
        router.push("/start");
      }, 650)
    }
  }

  return (
    <Box className="quiz_main" sx={{ borderBottom: 1, borderColor: "divider", padding: "0" }}>
      <Box sx={{ marginTop: '10px'}}></Box>
      <Box className="ad250" sx={{ height: '280px' }}>
        <ins className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-4238460264484843"
          data-ad-slot="9018076593"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
      </Box>
      {/* {questions[currentQuestionIndex] ? (
        <LinearProgress
          variant="determinate"
          value={100 * currentQuestionIndex / questions.length - 1}
          sx={{ marginTop: 5, marginBottom: 5, borderRadius: 10 }}
        />) : null} */}
      <Box sx={{ marginTop: '10px', padding: '15px', paddingTop: '0' }}>
        <Box>
          {questions[currentQuestionIndex] ? (
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
                  ${selectedAnswer[currentQuestionIndex].option === 'optionA'
                      ? selectedAnswer[currentQuestionIndex].isCorrect === true ? "option_button_correct"
                        : "option_button_wrong"
                      : 'view_option_button'}`}
                  variant="contained"
                  onClick={() => isCorrectAnswer('optionA', questions[currentQuestionIndex].optionA)}
                  disabled={disable}
                >
                  {questions[currentQuestionIndex].optionA}
                </Button>

                {/* OPTION B */}
                <Button
                  key={questions[currentQuestionIndex].optionB}
                  className={`option_button_disabled
                  ${selectedAnswer[currentQuestionIndex].option === 'optionB'
                      ? selectedAnswer[currentQuestionIndex].isCorrect === true ? "option_button_correct"
                        : "option_button_wrong"
                      : 'view_option_button'}`}
                  variant="contained"
                  onClick={() => isCorrectAnswer('optionB', questions[currentQuestionIndex].optionB)}
                  disabled={disable}
                >
                  {questions[currentQuestionIndex].optionB}
                </Button>

                {/* OPTION C */}
                <Button
                  key={questions[currentQuestionIndex].optionC}
                  className={`
                  ${selectedAnswer[currentQuestionIndex].option === 'optionC'
                      ? selectedAnswer[currentQuestionIndex].isCorrect === true ? "option_button_correct"
                        : "option_button_wrong"
                      : 'view_option_button'}`}
                  variant="contained"
                  onClick={() => isCorrectAnswer('optionC', questions[currentQuestionIndex].optionC)}
                  disabled={disable}
                >
                  {questions[currentQuestionIndex].optionC}
                </Button>

                {/* OPTION D */}
                <Button
                  key={questions[currentQuestionIndex].optionD}
                  className={`
                  ${selectedAnswer[currentQuestionIndex].option === 'optionD'
                      ? selectedAnswer[currentQuestionIndex].isCorrect === true ? "option_button_correct"
                        : "option_button_wrong"
                      : 'view_option_button'}`}
                  variant="contained"
                  onClick={() => isCorrectAnswer('optionD', questions[currentQuestionIndex].optionD)}
                  disabled={disable}
                >
                  {questions[currentQuestionIndex].optionD}
                </Button>
              </Box>
            </Box>
          ) : (
            <h2 style={{ textAlign: 'center', color: '#FFFFFF', marginTop: '150px' }}>Quiz not found</h2>
          )}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '3px', marginTop: '10px', justifyContent: 'center' }}>
          <a href="" style={{ color: '#ffb540', fontSize: '16px', fontWeight: '600' }}>Sign-Up</a>
          <a href="" style={{ color: '#ffb540', fontSize: '16px', fontWeight: '600' }}>or Login</a>
        </Box>
        <Box className="play_coins_details" sx={{ marginTop: '25px' }}>
          <h1 style={{ color: '#FFFFFF', fontSize: '18px', marginBottom: '15px' }}>Play Quiz and Win Coins!</h1>
          <ul style={{ textAlign: 'start' }}>
            <li>Play Quizzes in 25+ categories like GK, Sports, Bollywood, Business, Cricket & more!</li>
            <li>Compete with lakhs of other players!</li>
            <li>Win coins for every game</li>
            <li>Trusted by millions of other quiz enthusiasts like YOU!</li>
          </ul>
        </Box>
        <Box className="quiz_box" sx={{ marginBottom: '100px' }}>
          <h2 style={{ textAlign: "center", fontSize: "24px", color: '#ffffff', marginBottom: '5px' }}>Fun Facts</h2>
          <p style={{ color: '#FFFFFF', fontSize: '16px' }}>The insurance industry is one of the largest industries in the United States, with over $1.5 trillion in annual premiums.The word "insurance" comes from the French word "assurer", which means "to make sure". The first insurance company in the United States was founded in Charleston, South Carolina, in 1735.The insurance industry employs over 2 million people in the United States. The average American household spends about $1,500 per year on insurance premiums. The most expensive type of insurance in the United States is long-term care insurance, which can cost upwards of $5,000 per month.</p>
        </Box>
      </Box>
    </Box >
  )
}

export default MainPage