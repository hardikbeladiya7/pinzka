"use client";
import { Box, Button } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const PlayQuiz = () => {

    const searchParams = useSearchParams();
    const router = useRouter();
    const id: any = searchParams.get("id");

    useEffect(() => {

        const script = document.createElement('script');
        script.src = '/ad_script.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };

    }, []);

    const joinNow = () => {
        if (id) {
            localStorage.setItem('quiz_id', id);
            router.push('/login')
        }
    }

    return (
        <Box sx={{ borderBottom: 1, borderColor: "divider", padding: "15px" }}>
            <Box className="ad250">
                <ins className="adsbygoogle"
                    style={{ display: "block" }}
                    data-ad-client="ca-pub-4238460264484843"
                    data-ad-slot="9018076593"
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>
            </Box>
            <Box className="contact_us_bg">
                {/* <input placeholder="Email" />
                <input placeholder="Password" style={{ marginTop: "10px" }} /> */}
                <Button
                    className="contained_button"
                    variant="contained"
                    style={{ marginTop: '10px', width: '200px' }}
                    onClick={joinNow}
                >
                    Join Now
                </Button>
                <p style={{ fontSize: '16px', color: '#FFFFFF', marginTop: '10px' }}>Or</p>
                <Button
                    className="contained_button"
                    variant="contained"
                    style={{ marginTop: '10px', width: '200px' }}
                    onClick={() => {
                        router.push(`/quiz?id=${id}`);
                    }}
                >
                    Play as Guest
                </Button>
                <ul style={{ padding: '15px 0px 0px 15px', textAlign: 'left', color: '#FFFFFF' }}>
                    <li>You got 200 seconds to answer all questions</li>
                    <li>Answer as many questions as you can</li>
                    <li>For Every Correct answer you will get 100 points and will loose -50 points on every Incorrect answer</li>
                    <li>You can take help by using the lifelines present in the contest.</li>
                    <li>Lifelines can be used for free or by using a given amount of coins for each lifeline.</li>
                </ul>
            </Box>
        </Box>
    );
};

export default PlayQuiz;
