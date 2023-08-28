import { Box, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Sidebar, Videos } from ".";
import { fetchFromAPI } from "../utils/fetchFromAPI";



function Feed() {


  const [selectedCategory, setSelectedCategoy] = useState('New')
  const [videos, setVideos] = useState([])

  useEffect(()=>{
fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data)=> setVideos(data.items))
  }, [selectedCategory]) 
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategoy} />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2022 jsm media
        </Typography>
      </Box>
      <Box 
      sx={{
        overflowY: "auto",
        flex: "2",
        height: "90vh"
      }}
      >
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color: "white"}}>
          {selectedCategory}
          <span style={{color: "#f31503"}}> videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  );
}

export default Feed;
