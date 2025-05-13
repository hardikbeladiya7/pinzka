"use client";
import useCoin from '@/hooks/useCoin';
import { Box, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const StartPage = () => {

  const router = useRouter();
  const { getUserCoin, setOldUser } = useCoin();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://thorient.com/ad_script.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);


  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider", padding: "15px" }}>
        <Box className="ad250">
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-9987228570589642"
            data-ad-slot="9890041426"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </Box>
        <Box className="victory_main start_card quiz_box" sx={{ textAlign: "center", backgroundColor: '#FFFFFF' }}>
          <img
            src="https://fflivegame.com/_next/static/media/winner.48cb95ac.gif"
            width="150px"
            height="150px"
          />
          <h2 style={{ fontSize: '20px', color:"#000000" }}>You have got <span style={{ color: '#30d158' }}>{getUserCoin()}</span> coins</h2>
          <Button
            className="contained_button"
            variant="contained"
            onClick={() => {
              setOldUser();
              router.push("/home");
            }}
            style={{ marginTop: "20px" }}
          >
            Play
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default StartPage