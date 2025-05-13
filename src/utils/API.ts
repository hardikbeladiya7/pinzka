export const CATEGORY_API = {
    GET: '/question/categories'
}

export const QUIZZES_API = {
    GET_BY_CATEGORY: '/quiz/get-quizzies-by-category',
    GET_ALL: '/question/quizzes',
    GET_RANDOM: '/quiz/get-random-quizzies',
}

export const QUESTIONS_API = {
    GET_BY_QUIZ: '/question/'
}

export const USER_API = {
    GET: '/user/get-user',
    REGISTER: '/user/registration',
    LOGIN: '/user/login',
    CONTACT_US: '/user/contact',
    UPDATE_COIN: '/coin/update-coin'
}

export const SEARCH_API = {
    POST: 'https://search.belbytes.com'
}