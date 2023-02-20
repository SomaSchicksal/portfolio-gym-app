import React from 'react'
import {Box, Stack, Typography, Button} from "@mui/material"
import HeroBannerImage from "../assets/images/banner4.jpg"

const HeroBanner = () => {
  return (
    <Box sx={{mt:{lg:"212px", xs:"70px"}, ml:{sm:"50px"}}} position="relative" p="20px" backgroundColor="#949C9C" borderRadius="10px">
      <Typography color="#FC5C04" fontWeight="600px" fontSize="26px" fontFamily='Ubuntu'>
        Fitness Club
      </Typography>
      <Typography fontWeight={700} sx={{fontSize:{lg:"44px", xs:"40px"}}} mb="23px" mt="30px" fontFamily='Ubuntu'>
        Blood, sweat and <br/> grind
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4} fontFamily='Ubuntu'>
        Check out the best exercises
      </Typography>
      <Button sx={{backgroundColor:"#FC5C04", padding:"10px"}} variant="contained" color="error" href="#exercises" className="explore-btn">Explore Exercises</Button>
      <Typography fontWeight={600} color="FC5C04" sx={{opacity:0.1, display:{lg:"block", xs:"none"}}} fontSize="200px">
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img"></img>
      
    </Box>
  )
}

export default HeroBanner