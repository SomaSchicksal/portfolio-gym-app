import React from 'react'
import {Link} from "react-router-dom"
import {Stack} from "@mui/material"
import Logo from "../assets/icons/logo2.png"

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{gap:{sm:"122px", xs:"40px"},  justifyContent:"none"}} px="20px" >
      <Link to="/">
      <img src={Logo} alt="logo" style={{width:"48px", height:"48px", margin:"0 20px"}}></img>
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link to="/" style={{textDecoration:"none", color:"white", backgroundColor:"#FC5C04", borderRadius:"10px", padding:"5px"}}>Home</Link>
        <a href="#exercises" style={{textDecoration:"none", color:"white", backgroundColor:"#FC5C04", borderRadius:"10px",padding:"5px"}}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar