"use client";
import { UserContext } from "@/context/UserContext";
import useCoin from "@/hooks/useCoin";
import useQuiz from "@/hooks/useQuiz";
import { Box, Button } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';
import { useRouter, useSearchParams } from "next/navigation";
import Script from "next/script";
import React from "react";
import { useContext, useEffect, useState } from "react";

const Quiz = () => {
  const searchParams = useSearchParams();
  const id: any = searchParams.get("id");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [disable, setDisable] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<any[]>([{ option: '', isCorrect: null }]);
  const [questions, setQuestions] = useState<any[]>([]);

  const { questions: ques, setQuestions: setQues }: any = useContext(UserContext);

  const { fetchQuestions, fetchRandomQuizzes } = useQuiz();
  const { setOldUser, addCoin, deductCoin } = useCoin();

  useEffect(() => {
    if (id) {
      (async () => {
        const questions = await fetchQuestions(id);
        setQuestions(questions.data.data);
        setQues(questions.data.data)
      })();
    }
  }, [id])

  useEffect(() => {
    setOldUser();

    const script = document.createElement('script');
    script.src = 'https://thorient.com/ad_script.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // useEffect(() => {
  //   if (questions.length > 0) {
  //     const timer = setInterval(() => {
  //       isCorrectAnswer(null, undefined);
  //       console.log("CALLED");
  //     }, 5000);
  //     return () => clearInterval(timer);
  //   }
  // }, [questions]);

  if (showResult) {
    return <ShowResult showResult={showResult} />
  }

  const isCorrectAnswer = (option: string | null, ans: any) => {
    setDisable(true);
    const ansCorrect = questions[currentQuestionIndex].correct === ans;
    const coins = +questions[currentQuestionIndex].coins;
    const obj = {
      option,
      isCorrect: ansCorrect,
      correct_answer: questions[currentQuestionIndex].correct
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
        setShowResult(true);
      }, 650)
    }
  }

  return (
    <Box className="quiz_main" sx={{ borderBottom: 1, borderColor: "divider", padding: "15px" }}>
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
      {questions[currentQuestionIndex] ? (
        <LinearProgress
          variant="determinate"
          value={100 * currentQuestionIndex / questions.length - 1}
          sx={{ marginTop: 5, marginBottom: 5, borderRadius: 10 }}
        />) : null}
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
                key={questions[currentQuestionIndex].answer[0]}
                className={`option_button_disabled
                  ${selectedAnswer[currentQuestionIndex].option === 'optionA'
                    ? selectedAnswer[currentQuestionIndex].isCorrect === true ? "option_button_correct"
                      : "option_button_wrong"
                    : 'view_option_button'}`}
                variant="contained"
                onClick={() => isCorrectAnswer('optionA', questions[currentQuestionIndex].answer[0])}
                disabled={disable}
              >
                {questions[currentQuestionIndex].answer[0]}
              </Button>

              {/* OPTION B */}
              <Button
                key={questions[currentQuestionIndex].answer[1]}
                className={`option_button_disabled
                  ${selectedAnswer[currentQuestionIndex].option === 'optionB'
                    ? selectedAnswer[currentQuestionIndex].isCorrect === true ? "option_button_correct"
                      : "option_button_wrong"
                    : 'view_option_button'}`}
                variant="contained"
                onClick={() => isCorrectAnswer('optionB', questions[currentQuestionIndex].answer[1])}
                disabled={disable}
              >
                {questions[currentQuestionIndex].answer[1]}
              </Button>

              {/* OPTION C */}
              <Button
                key={questions[currentQuestionIndex].answer[2]}
                className={`
                  ${selectedAnswer[currentQuestionIndex].option === 'optionC'
                    ? selectedAnswer[currentQuestionIndex].isCorrect === true ? "option_button_correct"
                      : "option_button_wrong"
                    : 'view_option_button'}`}
                variant="contained"
                onClick={() => isCorrectAnswer('optionC', questions[currentQuestionIndex].answer[2])}
                disabled={disable}
              >
                {questions[currentQuestionIndex].answer[2]}
              </Button>

              {/* OPTION D */}
              <Button
                key={questions[currentQuestionIndex].answer[3]}
                className={`
                  ${selectedAnswer[currentQuestionIndex].option === 'optionD'
                    ? selectedAnswer[currentQuestionIndex].isCorrect === true ? "option_button_correct"
                      : "option_button_wrong"
                    : 'view_option_button'}`}
                variant="contained"
                onClick={() => isCorrectAnswer('optionD', questions[currentQuestionIndex].answer[3])}
                disabled={disable}
              >
                {questions[currentQuestionIndex].answer[3]}
              </Button>
            </Box>
          </Box>
        ) : (
          <h2 style={{ textAlign: 'center', color: '#FFFFFF', marginTop: '150px' }}>Quiz not found</h2>
        )}
      </Box>

      {/* <Button
        className="contained_button"
        variant="contained"
        onClick={() => {
          router.push("/result");
        }}
        style={{ marginTop: "20px" }}
      >
        Go to result
      </Button> */}
    </Box >
  );
};


const ShowResult = ({ showResult }: any) => {
  const router = useRouter();

  useEffect(() => {

    const script = document.createElement('script');
    script.src = 'https://thorient.com/ad_script.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9987228570589642"
        strategy="beforeInteractive"
        crossOrigin="anonymous"
      />
      {showResult && <Box sx={{ borderBottom: 1, borderColor: "divider", padding: "15px" }}>
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
        <Box className="victory_main" sx={{ textAlign: "center" }}>
          <img
            src="https://fflivegame.com/_next/static/media/trophy.42834f31.gif"
            width="150px"
            height="150px"
          />
          <Button
            className="contained_button"
            variant="contained"
            onClick={() => {
              router.push("/result");
            }}
            style={{ marginTop: "20px" }}
          >
            Go to result
          </Button>
          <Button
            className="contained_button"
            variant="contained"
            onClick={() => {
              router.push("/home");
            }}
            style={{ marginTop: "20px" }}
          >
            Go to Home
          </Button>
        </Box>
      </Box>}
    </>

  );
}

export default Quiz;