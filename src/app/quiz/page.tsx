import { Suspense } from 'react';
import QuizComponent from './QuizComponent';
import { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  title: 'Play Quiz Game',
  description: 'Challenge yourself with our general knowledge quiz questions across various categories like Geography, Science, History, Food and Drink, Pop Culture, Sports, Animals, and Disney. Play quizzes online now and see how much you know!',
  openGraph: {
    type: 'website',
    url: 'https://quiz.thorient.com/',
    title: 'Quiz Game',
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
    title: 'Quiz Game | Play Fun Online Quizzes',
    description: 'Challenge yourself with our general knowledge quiz questions across various categories like Geography, Science, History, Food and Drink, Pop Culture, Sports, Animals, and Disney. Play quizzes online now and see how much you know!',
    images: [
      {
        url: 'https://bms.belbytes.com/images/quiz/1727865391.jpeg',
        alt: 'Quiz Game Banner',
      },
    ],
  },
};


export default function QuizPage() {
  return (
    <>
      <Suspense fallback={<div>Loading quiz...</div>}>
        <QuizComponent />
      </Suspense>
    </>
  );
}