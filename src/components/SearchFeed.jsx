import { Box, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import {  Videos } from ".";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";



function SearchFeed() {

  const [videos, setVideos] = useState([])

  const {searchTerm} = useParams();

  useEffect(()=>{
fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data)=> setVideos(data.items))
  }, [searchTerm]) 
  return (
      <Box 
      p={2}
      sx={{
        overflowY: "auto",
        flex: "2",
        height: "90vh"
      }}
      >
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color: "white"}}>
          Search Results for: 
          <span style={{color: "#f31503"}}>{searchTerm} videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>

  );
}

export default SearchFeed;
