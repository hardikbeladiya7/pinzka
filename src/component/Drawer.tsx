import { UserContext } from "@/context/UserContext";
import useCoin from "@/hooks/useCoin";
import coins from '@/image/coins.png';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import QuizIcon from "@mui/icons-material/Quiz";
import { Box, Grid2 } from "@mui/material";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext, useEffect, useMemo, useState } from "react";
import AnimatedCounter from "./AnimatedCounter";
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import useUser from "@/hooks/useUser";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const DrawerSide = React.memo(() => {
    const pathname = usePathname();
    const [coin, setCoin] = useState<number | null>(0);
    const { checkUser, getUserCoin } = useCoin();
    const { isUserLoggedIn, logout } = useUser();
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const { coinClaimed, coins: userRemainCoins }: any = useContext(UserContext);
    const memoizedCoinClaimed = useMemo(() => coinClaimed, [coinClaimed]);

    useEffect(() => {
        checkUser();
        setCoin(+getUserCoin());
    }, [router, userRemainCoins]);

    const drawerWidth = 300;

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const DrawerHeader = styled("div")(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: "flex-end",
    }));

    return (
        <>
            <Box sx={{ position: 'fixed', display: 'flex',backgroundColor:'#191f31', zIndex:'1', justifyContent: 'space-between', width: '100%', padding: '10px 20px' }}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{ color: "#ffffff" }}
                >
                    <MenuIcon />
                </IconButton>
                <Grid2 display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        style={{ color: "#ffffff", fontWeight: "bold" }}
                    >
                        Play Quiz
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <Box sx={{ marginBottom: '3px' }}>
                                <img className="gif_icon" src="https://playerstorage.b-cdn.net/quiztwiz/assets/rewardg.gif" alt="" />
                            </Box>
                            <Typography
                                style={{ color: "#ffffff", fontWeight: "bold", fontSize: '12px' }}
                            >
                                Daily Reward
                            </Typography>
                        </Box>
                        <IconButton className="coin_header">
                            <Image alt='' src={coins} width={25} height={25} />
                            <div style={{ color: 'white', fontSize: '14px' }}>
                                {memoizedCoinClaimed ? <AnimatedCounter targetNumber={coin} speed={50} /> : 0}
                            </div>
                        </IconButton>
                    </Box>
                </Grid2>
            </Box>
            <Drawer
                className="drawer_section"
                sx={{
                    width: drawerWidth,
                    backgroundColor: "#4CAF50",
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                    position: "absolute",
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader sx={{ justifyContent: 'space-between', padding: '20px', position: 'relative' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Box>
                            <img className="user_round_images" src="https://quizwinz.com/_next/static/media/avtar.86e7ff46.webp" alt="" />
                        </Box>
                        <Box>
                            <h2 style={{ fontSize: '19px', fontWeight: '700', color: '#ffffff' }}>Guest</h2>
                            <p style={{ fontSize: '14px', fontWeight: '700', color: '#ffb540', paddingTop: '3px', marginBottom: '10px' }}>Play Quiz & earn coins</p>
                            {/* {!isUserLoggedIn() && <button className="sign-button" onClick={() => { router.push('/login') }}>SIGN IN</button>} */}
                        </Box>
                    </Box>
                    <IconButton onClick={handleDrawerClose} sx={{ position: 'absolute', right: '0', top: '0' }}>
                        <ChevronLeftIcon style={{ color: "#FFFFFF" }} />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {[
                        { route: "/home", name: "Home", show: true },
                        // { route: "/quiz", name: "Random Quiz", show: true },
                        { route: "/contact-us", name: "Contact US", show: true },
                        { route: "/contest-rules", name: "Contest Rules", show: true },
                        { route: "/login", name: "Login", show: !isUserLoggedIn() },
                    ].map((ele, index) => (
                        <ListItem
                            className={pathname === ele?.route ? "active" : ""}
                            key={ele.name}
                            disablePadding
                            onClick={() => {
                                if (ele.show) {
                                    router.push(ele.route);
                                    handleDrawerClose();
                                }
                            }}
                        >
                            <ListItemButton>
                                <ListItemIcon sx={{ display: 'block', minWidth: '40px' }}>
                                    {index === 0 ? (
                                        <HomeIcon style={{ color: "#FFFFFF" }} />
                                    ) : index === 1 ? (
                                        <QuizIcon style={{ color: "#FFFFFF" }} />
                                    ) : index === 2 ? (
                                        <ContactPageIcon style={{ color: "#FFFFFF" }} />
                                    ) : index === 3 ? (
                                        <EmojiEventsIcon style={{ color: "#FFFFFF" }} />
                                    ) : ele.show && (
                                        <LoginIcon style={{ color: "#FFFFFF" }} />
                                    )}
                                </ListItemIcon>
                                {ele.show && <ListItemText style={{ color: '#FFFFFF' }} color="#FFFFFF" primary={ele.name} />}
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                {isUserLoggedIn() && <List style={{ position: 'absolute', bottom: '20px', width: '100%' }}>
                    <ListItem
                        disablePadding
                        onClick={() => {
                            logout();
                            handleDrawerClose();
                        }}
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <LogoutIcon style={{ color: "#FFFFFF" }} />
                            </ListItemIcon>
                            <ListItemText style={{ color: '#FFFFFF' }} color="#FFFFFF" primary={"Logout"} />
                        </ListItemButton>
                    </ListItem>
                </List>}
            </Drawer>
        </>
    );
});

export default DrawerSide;
