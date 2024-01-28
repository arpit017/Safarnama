import React from 'react'
// import React from 'react'
import Footer from './Footer'
import { Box,Heading ,Card, CardHeader, CardBody, Button ,CardFooter,Text,Image, Grid } from '@chakra-ui/react'
import Grid8 from './Grid8'
import SearchBox from './SearchBox'
import Navbar from './Navbar'

export const UpperHome = () => {
  return (
    <Box 
      
    backgroundImage="url('https://images.pexels.com/photos/4476397/pexels-photo-4476397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
    backgroundSize="cover"
    backgroundPosition="center"
    minHeight="94vh"
   
    maxWidth={"90%"}
    margin="auto"
    borderBottomRadius="30%"
    display={"flex"}
    flexDirection="column"
>
  
  <Navbar/>
  
  <Heading size={"2xl"} marginTop={"37"}  color='white'>Travel Around The World</Heading >
  <Heading size={"lg"} marginTop={"5"}  color='white'>Enjoy Our Services For Your Trip Anywhere Anytime</Heading >
  {/* <Heading size={"2xl"} marginTop={"30"} marginBottom={"-40"} color='white'>Travel Around The World</Heading >
  <Heading size={"lg"} marginTop={"40"} marginBottom={"-60"} color='white'>Enjoy our services for your trip anywhere anytime</Heading > */}

  <SearchBox />
  <Grid8/>
  
  </Box>
  )
}
