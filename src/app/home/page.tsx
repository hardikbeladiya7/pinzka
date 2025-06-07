import { Metadata } from 'next'
import Head from 'next/head'
import React, { Suspense } from 'react'
import Home from './HomePage';

export const metadata: Metadata = {
  title: 'Quiz Game | Play Fun Online Quizzes',
  description: 'Challenge yourself with our general knowledge quiz questions across various categories like Geography, Science, History, Food and Drink, Pop Culture, Sports, Animals, and Disney. Play quizzes online now and see how much you know!',
  openGraph: {
    type: 'website',
    url: 'https://quiz.thorient.com/',
    title: 'Quiz Game | Play Fun Online Quizzes',
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


const page = () => {
  return (
    <div>
      <Head>
        <link rel="canonical" href={`https://quiz.thorient.com`} />
      </Head>
      <Suspense fallback='Loading...'><Home /></Suspense>
    </div>
  )
}

export default page