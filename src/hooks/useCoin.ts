import { UserContext } from '@/context/UserContext'
import React, { useCallback, useContext, useEffect, useState } from 'react'

const useCoin = () => {

    const { modal, setModal, setCoinClaimed, setCoins } = useContext<any>(UserContext);

    const checkUser = useCallback(() => {
        if (!isNewUser()) {
            setNewUser()
        } else {
            if (getUser() === 'no') {
                setCoinClaimed(true);
            }
        }
    }, [])

    const getUser = useCallback(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('newuser');
        }
    }, [])

    const isNewUser = useCallback(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('newuser');
        }
    }, [])

    const setNewUser = () => {
        if (typeof window !== 'undefined') {
            setTimeout(() => {
                setModal(true);
            }, 2500)
            localStorage.setItem('newuser', 'yes');
            // localStorage.setItem('coin', '3000');
        }
    }

    const setOldUser = () => {
        if (typeof window !== 'undefined') {
            setModal(false);
            setCoinClaimed(true);
            localStorage.setItem('newuser', 'no');
        }
    }

    const setUserCoinAfterLogin = (coin: number) => {
        if (typeof window !== 'undefined') {
            setCoins(coin);
            localStorage.setItem('coin', `${coin}`);
        }
    }

    const getUserCoin = () => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('coin') || 0;
        } else {
            return 0;
        }
    }

    const addCoin = (coin: number) => {
        if (typeof window !== 'undefined') {
            const userCoin = localStorage.getItem('coin');
            if (userCoin) {
                const newCoin = +userCoin + coin
                setCoins(newCoin);
                localStorage.setItem('coin', `${newCoin}`);
            } else {
                localStorage.setItem('coin', `${coin}`);
            }
        } else {
            return 0;
        }
    }

    const deductCoin = (coin: number) => {
        if (typeof window !== 'undefined') {
            const userCoin = localStorage.getItem('coin');
            if (userCoin) {
                const newCoin = +userCoin - coin
                setCoins(newCoin);
                localStorage.setItem('coin', `${newCoin}`);
            } else {
                localStorage.setItem('coin', `${-coin}`);
            }
        } else {
            return 0;
        }
    }

    return { isNewUser, checkUser, getUserCoin, setOldUser, addCoin, deductCoin, setUserCoinAfterLogin }
}


export default useCoin