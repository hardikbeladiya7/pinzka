import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Typography } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions';
import Image from 'next/image';
import React from 'react'
import coin from '@/image/bank.gif'
import useCoin from '@/hooks/useCoin';

const WelcomeModal = ({ isOpen, onClose }: any) => {

    const { getUserCoin } = useCoin();

    const Transition = React.forwardRef(function Transition(
        props: TransitionProps & {
            children: React.ReactElement<any, any>;
        },
        ref: React.Ref<unknown>,
    ) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    return (
        <Dialog
            open={isOpen}
            TransitionComponent={Transition}
            keepMounted
            onClose={onClose}
            maxWidth="xs"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle textAlign={'center'} fontWeight={900} fontStyle={'italic'}>🎉 Congratulations, you're in!</DialogTitle>
            <DialogContent sx={{ textAlign: 'center' }}>
                <Image unoptimized src={coin} width={250} height={145} alt="" />
                <DialogContentText id="alert-dialog-slide-description">
                    <Typography marginTop={2} fontWeight={600} fontStyle={'italic'}>
                        You've just unlocked a special welcome bonus of <span style={{ fontSize: '18px' }}>{getUserCoin()}</span> coins! 💰✨
                    </Typography>
                    <Typography marginTop={2}>
                        Start exploring and make the most out of your rewards!
                    </Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button style={{ width: 'fit-content' }} className="contained_button" variant="contained" onClick={onClose}>Claim My Coins</Button>
            </DialogActions>
        </Dialog>
    )
}

export default WelcomeModal