import React from 'react'
import {Box, Stack, Typography} from "@mui/material"
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from "./Loader"

const SimilarExercises = ({targetMuscleExercises,equipmentExercises}) => {
  return (
    <Box sx={{mt:{lg:"100px", xs:"0"}}}>
      <Typography variant="h3" mb={5} fontFamily='Ubuntu'>Exercises that target the same muscle group</Typography>
      <Stack direction="row" sx={{p:"2", position:"relative"}}>
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises}></HorizontalScrollbar> : <Loader></Loader>}
      </Stack>

      <Typography variant="h3" mb={5} fontFamily='Ubuntu'>Exercises that use the same equipment</Typography>
      <Stack direction="row" sx={{p:"2", position:"relative"}}>
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises}></HorizontalScrollbar> : <Loader></Loader>}
      </Stack>
    </Box>
  )
}

export default SimilarExercises