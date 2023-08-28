import { Box } from '@mui/material'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import {VideoCard,Videos, ChannelCard} from "./"
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetails = () => {
  const {id} = useParams()

  const [channelDetails, setChannelDetails] = useState(null)
  const [videos, setVideos] = useState([])
console.log(channelDetails)

  useEffect(()=>{
fetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=> setChannelDetails(data?.items[0]))
  

fetchFromAPI(`search?&channelId=${id}&part=snippet&order=date`).then((data)=> setVideos(data?.items))
  }, [id])
  
  return (
    <Box minHeight={"95vh"}>
      <Box>
      <div style={{
        background: 'rgb(90,80,255)',
        background: "linear-gradient(162deg, rgba(90,80,255,1) 0%, rgba(94,96,186,1) 48%, rgba(0,212,255,1) 100%)",
        zIndex: 10,
        height: "300px",
      }}
      />
      <ChannelCard marginTop={"-110px"} channelDetails={channelDetails} />

      </Box>
<Box display={"flex"} p="2">

<Box sx={{mr: {sm: "100px"}}} />
<Videos videos={videos}/>



</Box>


    </Box>
  )
}

export default ChannelDetails
