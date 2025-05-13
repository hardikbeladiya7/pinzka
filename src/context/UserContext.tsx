import { createContext, useState, ReactNode } from 'react';

export interface UserContextType {
    questions: any;
    setQuestions: any;
    modal: boolean;
    setModal: any;
    coinClaimed: boolean
    setCoinClaimed: any;
    coins: number;
    setCoins: any;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [questions, setQuestions] = useState<{ name: string } | null>(null);
    const [modal, setModal] = useState<boolean>(false);
    const [coinClaimed, setCoinClaimed] = useState<boolean>(false);
    const [coins, setCoins] = useState<number>(0);

    return (
        <UserContext.Provider value={{
            questions,
            setQuestions,
            modal,
            setModal,
            coinClaimed,
            setCoinClaimed,
            coins,
            setCoins
        }}>
            {children}
        </UserContext.Provider>
    );
};
