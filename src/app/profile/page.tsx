"use client";
import useCoin from "@/hooks/useCoin";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";
import React from "react";

export default function Profile() {
  const { getUserCoin } = useCoin();
  const router = useRouter();
  return (
    <>
      <div className="category_sec profile_section" style={{ overflow: "auto" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", padding: "15px" }}>
          <Box sx={{display:'flex', alignItems:'center', gap:'20px', flexWrap:'wrap'}}>
              <Box sx={{height:'120px', width:'120px', backgroundColor:'#1f2937', borderRadius:'50%'}}>
                  <img className="profile_user" src="https://playerstorage.b-cdn.net/quiztwiz/assets/user.png" alt="" />
              </Box>
              <p className="user_name_title" style={{fontSize:'30px', fontWeight:'600', color:'#ffffff'}}>User X</p>
          </Box>
          <Box sx={{border:'1px solid #ffffff', backgroundColor:'#f97316', margin:'32px auto', padding:'12px 16px', borderRadius:'50px', maxWidth:'150px', minWidth:'150px', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
              <p style={{fontSize:'14px', color:'#ffffff', fontWeight:'500'}}>Coins</p>
              <p style={{fontSize:'14px', color:'#ffffff', fontWeight:'500'}}>{getUserCoin()}</p>
          </Box>
          <Box sx={{textAlign:'center'}}>
            <Button sx={{backgroundColor:'#3957EA', border:'1px solid #3957EA', color:'#ffffff', fontSize:'15px', fontWeight:'600', borderRadius:'50px', maxWidth:'150px', minWidth:'150px', padding:'12px 16px',}} onClick={() => { router.push('/login'); }} >Join Now</Button>
          </Box> 
        </Box>
      </div>
    </>
  );
}
