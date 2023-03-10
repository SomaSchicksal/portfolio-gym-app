import React, {useEffect, useState} from 'react'
import {Box, TextField, Button, Stack, Typography} from "@mui/material"
import {fetchData, exerciseOptions} from "../utils/fetchData"
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch]=useState("")
  
  const [bodyParts, setBodyParts]=useState([])

  useEffect(()=>{
    const fetchExerciseData=async()=>{
      const bodyPartsData=await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exerciseOptions);

      setBodyParts(["all", ...bodyPartsData]);
    }
    fetchExerciseData();
  },[])

  const handleSearch= async ()=>{
    if (search) {
      const exerciseData=await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);
      const searchedExercises=exerciseData.filter(
        (exercise)=>exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercises)
    }
  }
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px" backgroundColor="#949C9C">
      <Typography fontWeight={700} sx={{fontSize:{lg:"44px", xs:"30px"}}} mb="50px" textAlign="center" fontFamily='Ubuntu'>
        Awesome exercises you <br/> should know about
      </Typography>
      <Box position="relative" mb="72px">
        <TextField 
        height="76px" 
        value={search} 
        onChange={(e)=>setSearch(e.target.value.toLowerCase())} 
        placeholder="Search Exercises" 
        type="text"
        sx={{
          input:{fontWeight:"700", border:"none", borderRadius:"4px"},
          width:{lg:"800px", xs:"350px"},
          backgroundColor:"#fff", borderRadius:"40px"
        }}></TextField>
        <Button className="search-btn"
        sx={{
          bgcolor:"#FC5C04",
          color:"#fff",
          textTransform:"none",
          width:{lg:"175px", xs:"80px"},
          fontSize:{lg:"20px", xs:"14px"},
          height:"56px",
          position:"absolute",
          right:"0"
        }}
        onClick={handleSearch}>Search</Button>
      </Box>
      <Box sx={{position:"relative", width:"100%", p:"20px"}}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts></HorizontalScrollbar>
      </Box>
    </Stack>
  )
}

export default SearchExercises