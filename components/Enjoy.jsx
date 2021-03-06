import React from 'react'
import { Box, Grid, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";


const player = {
   position:"absolute",
  marginBottom:"10px"

}


const Enjoy = () => {
  return (
    <>
        <Box
      sx={{
        height: "65vh",
        background: "black",
        borderBottom: "8px solid #222",
      }}
    >
      <Grid container>
      <Grid
          item
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            color:'#eee',
            flexDirection:'column',
            padding:'40px 120px'
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "800",
            //   textAlign: "center",
            }}
          >
         Enjoy on your TV.
          </Typography>
          <Typography variant="h5">
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
          </Typography>
          <br />

        </Grid>
        <Grid
          item
          md={6}
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt=""
             width="8000px"
            style={{
              height: "55vh",
              objectFit: "contain",
              objectPosition: "center",
              zIndex:"2"
            }}
          />
      

            <ReactPlayer
              // autoplay
              playing ="true"
              width="300px"
              height="170px"
              // url="vid.m4v"
              url="https://www.youtube.com/watch?v=IE8HIsIrq4o"
              // url="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
             style={player}
            />

      
    
        </Grid>
  
      </Grid>
    </Box>
    
    
    
    
    </>
  )
}

export default Enjoy