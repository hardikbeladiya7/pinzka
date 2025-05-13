import useCoin from '@/hooks/useCoin';
import useUser from '@/hooks/useUser';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, Grid2, Typography } from '@mui/material'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const SearchAdModal = ({ open, close, data, noTime, id }: any): any => {

    const router = useRouter();
    const [timer, setTimer] = useState(5);
    const [htmlData, setHTMLData] = useState('');
    const { addCoin } = useCoin();
    const { isUserLoggedIn } = useUser();

    useEffect(() => {
        if (data) {
            setHTMLData(data)
        }
    }, [data])

    const closeModal = () => {
        // const quiz_id = localStorage.getItem('quiz_id');
        // if (isUserLoggedIn()) {
        //     router.push(`/quiz?id=${quiz_id}`);
        // } else {
        //     router.push(`/play-quiz?id=${quiz_id}`);
        // }
        // addCoin(200)
        close()
    }

    const addCoins = () => {
        const aTag = document.querySelector('#e1');
        if (aTag) {
            const link: any = aTag.querySelector('div a');
            if (link) {
                const url = link?.href;
                window.open(url, '_blank');
                window.focus();
            }
        }

        addCoin(200);

        const quiz_id = localStorage.getItem('quiz_id');
        if (isUserLoggedIn()) {
            router.push(`/quiz?id=${quiz_id}`);
        } else {
            router.push(`/play-quiz?id=${quiz_id}`);
        }
    };



    return <>
        <Dialog
            open={open}
            onClose={(e, reason) => {
                if (reason === 'backdropClick') {
                    return
                } else {
                    close()
                }
            }}
            aria-labelledby="responsive-dialog-title"
            // fullScreen
            sx={{ padding: 0, margin: 0 }}
        >
            <DialogContent >
                <DialogContentText padding={'20px'} style={{ color: '#000000', fontWeight: '600' }} display={'flex'} justifyContent={'space-between'}>
                    <Grid2>
                        <Typography fontSize={'12px'}>
                            Advertisement
                        </Typography>
                    </Grid2>
                </DialogContentText>
                <Box width={'100%'}>
                    <div dangerouslySetInnerHTML={{ __html: htmlData }} />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button className='contained_button' style={{ width: '100%', height: '39px' }} variant='contained' onClick={() => addCoins()} autoFocus>
                    Get 200 💰
                </Button>
                <Button className='contained_button' style={{ width: '100%', height: '39px' }} variant='contained' onClick={() => closeModal()} autoFocus>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    </>
}

export default SearchAdModal