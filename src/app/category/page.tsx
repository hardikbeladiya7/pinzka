"use client";
import Box from "@mui/material/Box";
import React from "react";

export default function Category() {

  return (
    <>
      <div className="category_sec category_Section" style={{ overflow: "auto" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", padding: "15px" }}>
            <Box sx={{textAlign:'center'}}>
                <h2 style={{fontSize:'16px', fontWeight:'700', color:'#ffffff'}}>Select the Quiz category that you want to play</h2>
            </Box>
            <Box sx={{position:'relative'}}>
                <img className="search_icon" src="https://playerstorage.b-cdn.net/quiztwiz/assets/Search.svg" alt="" />
                <input type="text" placeholder="Search Quiz Category" />
            </Box>
            <Box className="category_card_section" sx={{justifyContent:'space-between', gap:'15px', alignItems:'center', marginTop:'25px'}}>
                <Box sx={{border:'1px solid #ffffff', borderRadius:'50px', padding:'8px', maxWidth:'200px', width:'100%'}}>
                    <Box sx={{display:'flex', gap:'20px', alignItems:'center'}}>
                        <img className="category_images" src="https://cdn.unibots.in/quiz/images/science.png" alt="" />
                        <p style={{fontSize:'14px', color:'#ffffff', fontWeight:'600', width:'100%', textAlign:'center'}}>Fun Science</p>
                    </Box>
                </Box>
                <Box sx={{border:'1px solid #ffffff', borderRadius:'50px', padding:'8px', maxWidth:'200px', width:'100%'}}>
                    <Box sx={{display:'flex', gap:'20px', alignItems:'center'}}>
                        <img className="category_images" src="https://cdn.unibots.in/quiz/images/science.png" alt="" />
                        <p style={{fontSize:'14px', color:'#ffffff', fontWeight:'600', width:'100%', textAlign:'center'}}>Vocabulary</p>
                    </Box>
                </Box>
                <Box sx={{border:'1px solid #ffffff', borderRadius:'50px', padding:'8px', maxWidth:'200px', width:'100%'}}>
                    <Box sx={{display:'flex', gap:'20px', alignItems:'center'}}>
                        <img className="category_images" src="https://cdn.unibots.in/quiz/images/science.png" alt="" />
                        <p style={{fontSize:'14px', color:'#ffffff', fontWeight:'600', width:'100%', textAlign:'center'}}>Sports</p>
                    </Box>
                </Box>
                <Box sx={{border:'1px solid #ffffff', borderRadius:'50px', padding:'8px', maxWidth:'200px', width:'100%'}}>
                    <Box sx={{display:'flex', gap:'20px', alignItems:'center'}}>
                        <img className="category_images" src="https://cdn.unibots.in/quiz/images/science.png" alt="" />
                        <p style={{fontSize:'14px', color:'#ffffff', fontWeight:'600', width:'100%', textAlign:'center'}}>Festivals</p>
                    </Box>
                </Box>
                <Box sx={{border:'1px solid #ffffff', borderRadius:'50px', padding:'8px', maxWidth:'200px', width:'100%'}}>
                    <Box sx={{display:'flex', gap:'20px', alignItems:'center'}}>
                        <img className="category_images" src="https://cdn.unibots.in/quiz/images/science.png" alt="" />
                        <p style={{fontSize:'14px', color:'#ffffff', fontWeight:'600', width:'100%', textAlign:'center'}}>Fun Maths</p>
                    </Box>
                </Box>
                <Box sx={{border:'1px solid #ffffff', borderRadius:'50px', padding:'8px', maxWidth:'200px', width:'100%'}}>
                    <Box sx={{display:'flex', gap:'20px', alignItems:'center'}}>
                        <img className="category_images" src="https://cdn.unibots.in/quiz/images/science.png" alt="" />
                        <p style={{fontSize:'14px', color:'#ffffff', fontWeight:'600', width:'100%', textAlign:'center'}}>English Grammar</p>
                    </Box>
                </Box>
                <Box sx={{border:'1px solid #ffffff', borderRadius:'50px', padding:'8px', maxWidth:'200px', width:'100%'}}>
                    <Box sx={{display:'flex', gap:'20px', alignItems:'center'}}>
                        <img className="category_images" src="https://cdn.unibots.in/quiz/images/science.png" alt="" />
                        <p style={{fontSize:'14px', color:'#ffffff', fontWeight:'600', width:'100%', textAlign:'center'}}>Monuments</p>
                    </Box>
                </Box>
                <Box sx={{border:'1px solid #ffffff', borderRadius:'50px', padding:'8px', maxWidth:'200px', width:'100%'}}>
                    <Box sx={{display:'flex', gap:'20px', alignItems:'center'}}>
                        <img className="category_images" src="https://cdn.unibots.in/quiz/images/science.png" alt="" />
                        <p style={{fontSize:'14px', color:'#ffffff', fontWeight:'600', width:'100%', textAlign:'center'}}>Food Brands</p>
                    </Box>
                </Box>
                <Box sx={{border:'1px solid #ffffff', borderRadius:'50px', padding:'8px', maxWidth:'200px', width:'100%'}}>
                    <Box sx={{display:'flex', gap:'20px', alignItems:'center'}}>
                        <img className="category_images" src="https://cdn.unibots.in/quiz/images/science.png" alt="" />
                        <p style={{fontSize:'14px', color:'#ffffff', fontWeight:'600', width:'100%', textAlign:'center'}}>Test Your Knowledge</p>
                    </Box>
                </Box>
                <Box sx={{border:'1px solid #ffffff', borderRadius:'50px', padding:'8px', maxWidth:'200px', width:'100%'}}>
                    <Box sx={{display:'flex', gap:'20px', alignItems:'center'}}>
                        <img className="category_images" src="https://cdn.unibots.in/quiz/images/science.png" alt="" />
                        <p style={{fontSize:'14px', color:'#ffffff', fontWeight:'600', width:'100%', textAlign:'center'}}>Entertainment</p>
                    </Box>
                </Box>
                <Box sx={{border:'1px solid #ffffff', borderRadius:'50px', padding:'8px', maxWidth:'200px', width:'100%'}}>
                    <Box sx={{display:'flex', gap:'20px', alignItems:'center'}}>
                        <img className="category_images" src="https://cdn.unibots.in/quiz/images/science.png" alt="" />
                        <p style={{fontSize:'14px', color:'#ffffff', fontWeight:'600', width:'100%', textAlign:'center'}}>General Trivia</p>
                    </Box>
                </Box>
                <Box sx={{border:'1px solid #ffffff', borderRadius:'50px', padding:'8px', maxWidth:'200px', width:'100%'}}>
                    <Box sx={{display:'flex', gap:'20px', alignItems:'center'}}>
                        <img className="category_images" src="https://cdn.unibots.in/quiz/images/science.png" alt="" />
                        <p style={{fontSize:'14px', color:'#ffffff', fontWeight:'600', width:'100%', textAlign:'center'}}>Automobiles</p>
                    </Box>
                </Box>
                <Box sx={{border:'1px solid #ffffff', borderRadius:'50px', padding:'8px', maxWidth:'200px', width:'100%'}}>
                    <Box sx={{display:'flex', gap:'20px', alignItems:'center'}}>
                        <img className="category_images" src="https://cdn.unibots.in/quiz/images/science.png" alt="" />
                        <p style={{fontSize:'14px', color:'#ffffff', fontWeight:'600', width:'100%', textAlign:'center'}}>Bollywood</p>
                    </Box>
                </Box>
                <Box sx={{border:'1px solid #ffffff', borderRadius:'50px', padding:'8px', maxWidth:'200px', width:'100%'}}>
                    <Box sx={{display:'flex', gap:'20px', alignItems:'center'}}>
                        <img className="category_images" src="https://cdn.unibots.in/quiz/images/science.png" alt="" />
                        <p style={{fontSize:'14px', color:'#ffffff', fontWeight:'600', width:'100%', textAlign:'center'}}>Birds And Animals</p>
                    </Box>
                </Box>
            </Box>
        </Box>
      </div>
    </>
  );
}
