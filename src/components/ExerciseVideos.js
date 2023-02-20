
import React from 'react'
import {Box, Stack, Typography} from "@mui/material"


const ExerciseVideos = ({exerciseVideos, name}) => {
  if(!exerciseVideos.length) return "Loading....";
  return (
    <Box sx={{marginTop:{lg:"200px", xs:"20px"}}} p="20px">
      <Typography variant="h3" mb="33px" fontFamily='Ubuntu'>
        Watch <span style={{color:"#FC5C04", textTransform:"capitalize"}}>{name}</span> exercise videos
      </Typography>
      <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center" fontFamily='Ubuntu' backgroundColor="#949C9C"
      sx={{
        flexDirection:{lg:"row"},
        gap:{lg:"110px", xs:"0"}
      }}>
        {exerciseVideos?.slice(0,6).map((item, index)=>(
          <a key={index} className="exercise-video" href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target="_blank" rel="noreferrer">
            <img src={item.video.thumbnails[0].url} alt={item.video.title}></img>
            <Box>
              <Typography variant="h5" color="white" fontFamily='Ubuntu' backgroundColor="black" borderRadius="10px" display="inline-block" paddingRight="10px" paddingLeft="10px" marginRight="10px">
                {item.video.title}
              </Typography>
              <Typography variant="h6" color="white" fontFamily='Ubuntu' backgroundColor="#F80404" borderRadius="10px" display="inline-block" paddingRight="10px" paddingLeft="10px">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos