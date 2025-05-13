import axios from "axios";
// https://api.quiztwiz.com/api/question/?quiz=6328091fddcbffed00e765e0

// const baseURL = "https://api-thorient.belbytes.com/api/v1/quiz-service";
const baseURL = "https://api.quiztwiz.com/api";

const API = axios.create({
    baseURL: baseURL,
    headers: {
        'Referer': 'https://quiztwiz.com/'
    }
});

export default API;