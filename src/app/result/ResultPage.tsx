"use client";
import { UserContext } from "@/context/UserContext";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const Result = () => {

  const router = useRouter();

  const { questions }: any = useContext(UserContext);

  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const result: any = localStorage.getItem('result');
      setResults(JSON.parse(result))
    }
  }, [])

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/ad_script.js';
    script.async = true;
    document.body.appendChild(script);

    const script1 = document.createElement('script');
    script1.innerHTML = `
      gtag('event', 'conversion', {'send_to': 'AW-868117832/6I9ZCPiiuYkZEMja-Z0D'});
    `;
    document.head.appendChild(script1);
    return () => {
      document.body.removeChild(script);
      document.head.removeChild(script1);
    };
  }, [])

  const getOptionClass = (item: any, i: number, option: string) => {
    if (results.length) {
      const userAnswer = results[i].option;
      const correctAnswer = results[i].correct_answer;
      const isCorrect = results[i].isCorrect;

      // if (isCorrect) {
      //   return 'option_button_correct';
      // }

      if (option === userAnswer) {
        if (isCorrect) {
          return 'option_button_correct';
        } else {
          return 'option_button_wrong';
        }
      }
      return 'view_option_button';
    }
  };



  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider", padding: "15px" }}>
        <Box className="ad250">
          <ins className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-4238460264484843"
            data-ad-slot="9018076593"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        </Box>
        {questions && questions.length && questions?.map((item: any, i: number) => (
          <Box className="quiz_box">
            <Box className="quiz_count">
              <p className="quiz_count_text">{i + 1}</p>
            </Box>
            <h1 className="qution">{item.question}</h1>
            <Box className="options">
              <Button
                className={getOptionClass(item, i, 'optionA')}
                variant="contained"
              >
                {item.answer[0]}
              </Button>


              <Button
                className={getOptionClass(item, i, 'optionB')}
                variant="contained"
              >
                {item.answer[1]}
              </Button>


              <Button
                className={getOptionClass(item, i, 'optionC')}
                variant="contained"
              >
                {item.answer[2]}
              </Button>


              <Button
                className={getOptionClass(item, i, 'optionD')}
                variant="contained"
              >
                {item.answer[3]}
              </Button>


            </Box>
          </Box>
        ))}

        <Button
          className="contained_button"
          variant="contained"
          onClick={() => {
            router.push("/home");
          }}
          style={{ marginTop: "20px" }}
        >
          Go to home
        </Button>
      </Box>
    </>
  );
};

export default Result;
