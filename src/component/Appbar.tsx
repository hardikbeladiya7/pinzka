import React from 'react'
import { UserContext } from "@/context/UserContext";
import useCoin from "@/hooks/useCoin";
import coins from '@/image/coins.png';
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import QuizIcon from "@mui/icons-material/Quiz";
import { Grid2 } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState, useMemo } from "react";
import AnimatedCounter from "./AnimatedCounter";

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const Appbar = () => {
    const { coinClaimed }: any = useContext(UserContext);
    const [open, setOpen] = useState(false);

    const [coin, setCoin] = useState<number | null>(0);
    const { checkUser, getUserCoin } = useCoin();

    const router = useRouter();

    const memoizedCoinClaimed = useMemo(() => coinClaimed, [coinClaimed]);

    useEffect(() => {
        checkUser();
        setCoin(+getUserCoin());
    }, [router]);


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop: any) => prop !== "open",
    })<AppBarProps>(({ theme, open }: any) => ({
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: `${300}px`,
            transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));

    return (
        <AppBar position="fixed" open={open} style={{ backgroundColor: "#172031" }}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{ mr: 2, color: "#30d158" }}
                >
                    <MenuIcon />
                </IconButton>
                <Grid2 display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        style={{ color: "#30d158", fontWeight: "bold" }}
                    >
                        Thorient Quiz
                    </Typography>
                    <IconButton className='coin_header'>
                        <Image alt='' src={coins} width={30} height={30} />
                        <div style={{ color: 'white', fontSize: '14px' }}>
                            {memoizedCoinClaimed ? <AnimatedCounter targetNumber={coin} speed={100} /> : 0}
                        </div>
                    </IconButton>
                </Grid2>
            </Toolbar>
        </AppBar>
    )
}

export default Appbar