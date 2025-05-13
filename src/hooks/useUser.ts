import { USER_API } from '@/utils/API'
import API from '@/utils/webservice'
import { useRouter } from 'next/navigation'
import useCoin from './useCoin';

const useUser = () => {
    const router = useRouter();
    const { setUserCoinAfterLogin } = useCoin();

    const getUser = async (id: number) => {
        return await API.get(`${USER_API.GET}/${id}`);
    }

    const updateCoin = async (obj: any) => {
        return await API.put(USER_API.UPDATE_COIN, obj);
    }

    const login = async (obj: any) => {
        return await API.post(USER_API.LOGIN, obj);
    }

    const register = async (obj: any) => {
        return await API.post(USER_API.REGISTER, obj);
    }

    const contactUs = async (obj: any) => {
        return await API.post(USER_API.CONTACT_US, obj);
    }

    const isUserLoggedIn = () => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('isLoggedIn') === 'yes';
        }
    }

    const setUserLoggedIn = () => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('isLoggedIn', 'yes');
        }
    }

    const setUserInStorage = (user: any) => {
        if (typeof window !== 'undefined') {
            setUserCoinAfterLogin(user.coin)
            localStorage.setItem('user', JSON.stringify(user));
        }
    }

    const getUserFromStorage = () => {
        if (typeof window !== 'undefined') {
            localStorage.getItem('user');
        }
    }

    const manageRedirectionAfterAuth = (result: any) => {
        const quizId = localStorage.getItem('quiz_id');
        if (quizId) {
            localStorage.removeItem('quiz_id');
            setUserLoggedIn();
            setUserInStorage(result);
            router.push(`/quiz?id=${quizId}`);
        } else {
            setUserLoggedIn();
            setUserInStorage(result);
            router.push(`/home`);
        }
    }

    const logout = () => {
        if (typeof window !== 'undefined') {
            localStorage.clear();
            router.push(`/`);
        }
    }

    return {
        getUser,
        updateCoin,
        login,
        register,
        contactUs,
        isUserLoggedIn,
        setUserLoggedIn,
        setUserInStorage,
        getUserFromStorage,
        manageRedirectionAfterAuth,
        logout
    }
}

export default useUser