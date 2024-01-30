import React from 'react';
import { Image, Box, Heading } from '@chakra-ui/react';

const CustomCard = ({ imageUrl, title }) => {
  return (

    <Box
      
      display="flex"
      flexDirection={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      borderWidth="1px"
      borderRadius="md"
      bg="#dd6b20"
      color={"white"}
      width={{base:"80%",md:"100%"}}
      m="auto"
      // height={{base:"20vh",sm:"13vh"}}
    >
      <Image
        objectFit="cover"
       
        width={{ base: '100%', sm: '37%' }}
        // height={{base:"5vh",sm:"13vh"}}
        src={imageUrl}
        alt={title}
      />
      <Box p={4}>
        <Heading size="md">{title}</Heading>
      </Box>
    </Box>
  )
}

export default CustomCard