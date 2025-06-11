"use client";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import DrawerSide from "./Drawer";
import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from '@mui/icons-material/Category';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const SetLayout = React.memo(({ children }: any) => {
  const pathname = usePathname();
  const router = useRouter();
  const Main = styled("main", {
    shouldForwardProp: (prop) => prop !== "open",
  })<{
    open?: boolean;
  }>(({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  }));

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.OneSignalDeferred = window.OneSignalDeferred || [];
      window.OneSignalDeferred.push(async (OneSignal: any) => {
        await OneSignal.init({
          appId: "e514530c-5e80-4ba3-9d86-dbf28ec1404a",
        });
      });
    }
  }, []);

  return (
    <Box sx={{ display: "flex", }}>
      {pathname !== '/' && pathname !== '/start' ?
        <DrawerSide />
        : null
      }
      <Main style={{ overflow: "auto", padding: "0px", height: pathname !== '/' && pathname !== '/start' ? '100vh' : '100vh', paddingTop: pathname !== '/' && pathname !== '/start' ? '60px' : '0px', paddingBottom: pathname !== '/' && pathname !== '/start' ? '70px' : '0px' }}>
        {children}
        <Box marginBottom={'25px'} />
        <Box className="fixed_bottom_button">
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <Box sx={{ textAlign: 'center', width:'100px' }} onClick={() => router.push('/category')} className={pathname === '/category' ? "active" : ""}>
              <CategoryIcon style={{ color: "#FFFFFF" }} />
              <p style={{ fontSize: '12px', color: '#ffffff', fontWeight: '600' }}>Category</p>
            </Box>
            <Box sx={{ textAlign: 'center', width:'100px' }} onClick={() => router.push('/home')} className={pathname === '/home' ? "active" : ""}>
              <HomeIcon style={{ color: "#FFFFFF" }} />
              <p style={{ fontSize: '12px', color: '#ffffff', fontWeight: '600' }}>Home</p>
            </Box>
            <Box sx={{ textAlign: 'center',  width:'100px' }} onClick={() => router.push('/profile')} className={pathname === '/profile' ? "active" : ""}>
              <AccountCircleIcon style={{ color: "#FFFFFF" }} />
              <p style={{ fontSize: '12px', color: '#ffffff', fontWeight: '600' }}>Profile</p>
            </Box>
          </Box>
          {/* <Button
                      className="contained_button"
                      variant="contained"
                      onClick={() => {
                        const randomQuiz: any = quizzes[Math.floor(Math.random() * quizzes.length)];
                        const randomId = randomQuiz.id;
                        router.push(`/quiz?id=${randomId}`);
                      }}
                    >
                      Go to random quiz
                    </Button> */}
        </Box>
      </Main>
    </Box>
  );
});

export default SetLayout;
