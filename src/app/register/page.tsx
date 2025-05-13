import { Metadata } from "next";
import Register from "./Register";

export const metadata: Metadata = {
  title: 'Register & Start Playing Fun Online Quizzes',
  description: 'Challenge yourself with our general knowledge quiz questions across various categories like Geography, Science, History, Food and Drink, Pop Culture, Sports, Animals, and Disney. Play quizzes online now and see how much you know!',
  openGraph: {
    type: 'website',
    url: 'https://quiz.thorient.com/login',
    title: 'Register & Start Playing Fun Online Quizzes',
    description: 'Challenge yourself with our general knowledge quiz questions across various categories like Geography, Science, History, Food and Drink, Pop Culture, Sports, Animals, and Disney. Play quizzes online now and see how much you know!',
    images: [
      {
        url: 'https://bms.belbytes.com/images/quiz/1727865391.jpeg',
        width: 800,
        height: 600,
        alt: 'Quiz Game Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Register & Start Playing Fun Online Quizzes',
    description: 'Challenge yourself with our general knowledge quiz questions across various categories like Geography, Science, History, Food and Drink, Pop Culture, Sports, Animals, and Disney. Play quizzes online now and see how much you know!',
    images: [
      {
        url: 'https://bms.belbytes.com/images/quiz/1727865391.jpeg',
        alt: 'Quiz Game Banner',
      },
    ],
  },
};

const RegisterPage = () => {

  return (
    <Register />
  );
};

export default RegisterPage;
