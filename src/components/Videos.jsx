import { Stack, Box } from '@mui/material'
import React from 'react'
import {ChannelCard, VideoCard} from "."

const Videos = ({videos, direction}) => {
  
  if(!videos?.length) return "loading";

  return (
  <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
    <h1>this</h1>
    {videos.map((item, idx)=>(
      <Box key={idx}>
        {item.id.videoId && <VideoCard video={item} />}
        {item.id.channelId && <ChannelCard channelDetails={item} />}

      </Box>
    ))}

  </Stack>
  )
}

export default Videos
