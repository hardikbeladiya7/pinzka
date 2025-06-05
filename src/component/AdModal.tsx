import useCoin from '@/hooks/useCoin';
import useUser from '@/hooks/useUser';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, Grid2, Typography } from '@mui/material'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
const AdModal = ({ open, close, noTime, id }: any): any => {

    const router = useRouter();
    const [timer, setTimer] = useState(0);
    const { addCoin } = useCoin();
    const { isUserLoggedIn } = useUser();

    const closeModal = () => {
        // window.open('https://belbytes.com/belbytes-search/#gsc.tab=0&gsc.q=loans&gsc.sort=', '_blank');
        if (noTime) {
            if (isUserLoggedIn()) {
                router.push(`/quiz?id=${id}`);
            } else {
                router.push(`/play-quiz?id=${id}`);
            }
            close()
        } else {
            addCoin(200)
            close()
        }
    }

    useEffect(() => {
        if (open) {
            const t = setInterval(() => {
                setTimer((prevState) => prevState + 1)
            }, 1200);

            // const script = document.createElement('script');
            // script.src = 'https://cse.google.com/cse.js?cx=6f8e5b21da051be88';
            // script.async = true;
            // document.body.appendChild(script);

            const script1 = document.createElement('script');
            script1.src = '/ad_script.js';
            script1.async = true;
            document.body.appendChild(script1);

            return () => {
                // document.body.removeChild(script);
                document.body.removeChild(script1);
            };

        }
    }, [open])

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
            fullScreen
            sx={{ padding: 0, margin: 0 }}
        >
            <DialogContent >
                <DialogContentText padding={'20px'} style={{ color: '#000000', fontWeight: '600' }} display={'flex'} justifyContent={'space-between'}>
                    <Grid2>
                        {
                            noTime ? null :
                                <Typography fontSize={'12px'}>
                                    {`${10 - timer >= 0 ? `Close in ${10 - timer}` : `Now you can close ad`}`}
                                </Typography>
                        }
                    </Grid2>
                </DialogContentText>
                <Box width={'100%'}>
                    {/* <ins className="adsbygoogle"
                        style={{ display: 'block' }}
                        data-ad-client="ca-pub-9987228570589642"
                        data-ad-slot="3475177394"
                        data-ad-format="auto"
                        data-full-width-responsive="true">
                    </ins> */}

                    <ins className="adsbygoogle"
                        style={{ display: 'block' }}
                        data-ad-format="autorelaxed"
                        data-ad-client="ca-pub-4238460264484843"
                        data-ad-slot="6288805622"></ins>
                    {/* <div className="gcse-search"></div> */}
                </Box>
            </DialogContent>
            {noTime || timer >= 10 ? <DialogActions>
                <Button className='contained_button' style={{ width: '100%', height: '39px' }} variant='contained' onClick={() => closeModal()} autoFocus>
                    Close
                </Button>
            </DialogActions> : null}
        </Dialog>
    </>
}

export default AdModal