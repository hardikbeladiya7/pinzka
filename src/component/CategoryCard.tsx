"use client";
import useCoin from '@/hooks/useCoin';
import useUser from '@/hooks/useUser';
import coins from '@/image/coins.png';
import generateRandomURL from '@/utils/getRandomURL';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import Image from 'next/image';
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from 'react';
import AdModal from './AdModal';

const CategoryCard = ({ item, index }: any) => {
  const pathname = usePathname();
  const [userCoins, setUserCoins] = useState(0);
  const [open, setOpen] = useState(false);
  const [adPopup, setAdPopup] = useState(false);
  const [noTime, setNoTime] = useState(false);
  const [html, setHTML] = useState('');
  const { getUserCoin } = useCoin();
  const { isUserLoggedIn } = useUser();


  const router = useRouter()

  const handleClickOpen = async () => {
    const url = generateRandomURL()

    if (userCoins < item.entryFee) {
      // const res = await getSearchHTML(url);
      // console.log("🚀 ~ handleClickOpen ~ res:", res)
      // router.push(url);
      setOpen(true);
    } else {
      // localStorage.setItem('quiz_id', item.id);
      // router.push(url);
      setAdPopup(true);
      setNoTime(true)
    }
  };

  const handleClickOpenAdModal = () => {
    // if (isUserLoggedIn()) {
    //   router.push(`/quiz?id=${item.id}`);
    // } else {
    //   router.push(`/play-quiz?id=${item.id}`);
    // }
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (getUserCoin()) {
      setUserCoins(+getUserCoin())
    }

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
      {index === 2 || index === 8 ? <Box marginBottom={'15px'} borderRadius={'40px'}>
        <ins className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-format="fluid"
          data-ad-layout-key="-hz+f-r-4c+aj"
          data-ad-client="ca-pub-9987228570589642"
          data-ad-slot="3739703600"></ins>
      </Box> : null}
      <Box className='categoryCard'>
        <Box className='category_card'>
          <Box className='category_img'>
              <img className='category_img' src={item.img ?? 'https://cdn.unibots.in/quiz/images/grammar.png'} />
          </Box>
          <Box sx={{display:'flex', gap:'5px', textAlign:'end', alignItems:'center'}}>
            <Box>
              <Box className='category_title_main' sx={{ minWidth: '58%', }}>
                <p className='sports_title' >{item.category.name}&nbsp;|&nbsp;{item.title}</p>
                <p className='play_win_text'>Play & Win <img className='playerstorage-img' src="https://playerstorage.b-cdn.net/quiztwiz/assets/coin.svg" alt="" />{item.totalPrice}</p>
                <Box sx={{display:'flex', justifyContent:'end'}}>
                   <p className='entry_fee_text'>Entry fee<img className='playerstorage-img' src="https://playerstorage.b-cdn.net/quiztwiz/assets/coin.svg" alt="" />{item.entryFee}</p>
                </Box>
              </Box>
            </Box>
            <Button className='play_button' variant='contained' onClick={() => {
              handleClickOpen()
            }}
            // disabled={userCoins < item.coin}
            >
              <PlayArrowIcon />
            </Button>
          </Box>
        </Box>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogContent>
            <DialogContentText style={{ color: '#000000', fontWeight: '600' }}>
              You don't have enough coins to play this contest. Click on video ad to get 100 reward coins.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button className='coin_header' style={{ width: '150px', height: '39px', color: '#30d158', fontWeight: '700' }} variant='outlined' autoFocus onClick={handleClose}>
              Cancel
            </Button>
            <Button className='contained_button' style={{ width: '150px', height: '39px' }} variant='contained' onClick={() => { setAdPopup(true); handleClose(); }} autoFocus>
              Watch AD
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      <AdModal open={adPopup} close={setAdPopup} noTime={noTime} id={item._id} />
    </>
  )
}

export default CategoryCard
