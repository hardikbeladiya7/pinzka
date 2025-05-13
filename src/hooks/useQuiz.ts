import { CATEGORY_API, QUESTIONS_API, QUIZZES_API } from '@/utils/API';
import API from '@/utils/webservice'

const useQuiz = () => {

    const fetchCategories = async () => {
        return await API.get(`${CATEGORY_API.GET}?isActive=true`);
    }

    const fetchQuizByCategory = async (id: number) => {
        return await API.get(`${QUIZZES_API.GET_BY_CATEGORY}?category=${id}`);
    }

    const fetchQuizzes = async () => {
        return await API.get(`${QUIZZES_API.GET_ALL}?isActive=true`);
    }

    const fetchRandomQuizzes = async () => {
        return await API.get(QUIZZES_API.GET_RANDOM);
    }

    const fetchQuestions = async (id: number) => {
        return await API.get(`${QUESTIONS_API.GET_BY_QUIZ}?quiz=${id}`);
    }

    return {
        fetchCategories,
        fetchQuizzes,
        fetchQuestions,
        fetchQuizByCategory,
        fetchRandomQuizzes
    }
}

export default useQuiz