"use client";
import SearchAdModal from '@/component/SearchAd';
import useUser from '@/hooks/useUser';
import { SEARCH_API } from '@/utils/API';
import { Button } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const SearchComponent = () => {

    const [html, setHTML] = useState('');
    const [open, setOpen] = useState(false);
    const { isUserLoggedIn } = useUser();
    const router = useRouter();

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cse.google.com/cse.js?cx=6f8e5b21da051be88';
        script.async = true;
        document.body.appendChild(script);

        if (typeof window !== 'undefined') {
            const path = window.location.href;
            // const path = 'https://quiz.thorient.com/search#gsc.tab=0&gsc.q=High-coverage%20life%20insurance';
            (async () => {
                const res = await getSearchHTML(path);
                setHTML(res.data);
                setOpen(true);
            })()
        }

        return () => {
            document.body.removeChild(script);
        };
    }, [])


    const getSearchHTML = async (url: string) => {
        return axios.post(SEARCH_API.POST, { url: url })
    }

    const playNow = () => {
        const quiz_id = localStorage.getItem('quiz_id');
        if (isUserLoggedIn()) {
            router.push(`/quiz?id=${quiz_id}`);
        } else {
            router.push(`/play-quiz?id=${quiz_id}`);
        }
    }


    return (
        <>
            <div className="gcse-search"></div>
            <Button className='contained_button' style={{ width: '100%', height: '39px' }} variant='contained' onClick={playNow} autoFocus>
                Start Playing Now!
            </Button>
            <SearchAdModal open={open} close={setOpen} data={html} />
        </>
    )
}

export default SearchComponent