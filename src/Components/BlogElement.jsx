import React from 'react'
import { Card, CardHeader, CardBody, CardFooter,Image,Stack,Heading,Button,Text,Divider,ButtonGroup,SimpleGrid, Flex, Badge } 
from '@chakra-ui/react'
import { Link } from 'react-router-dom'
export const BlogElement = ({ele}) => {



  return (
  
        
        <Card maxW='sm' height='100%' overflow={"hidden"}   bg="#fffaf0">
          <Heading size='lg'>{ele.heading}</Heading>
          <Flex  width='100%' justify={"center"} mt="1">
          <Text fontSize={"md"}>
    ~ by {ele.creatorName} 
  </Text>  &nbsp;
          <Text fontSize={"md"}>
       | {ele.tag}
  </Text>
  </Flex>
  <CardBody>
    <Image
    objectFit='cover'
    src={ele.image}
    alt='Green double couch with wooden legs'
    borderRadius='lg'
    height={"32vh"}
    mb="2"
   
    />
    <Stack   spacing='3'>
      <Text >
        {ele.content.substring(0,230)+"...."}
      </Text>
    </Stack>
  </CardBody>
      
  <Divider />
  <CardFooter >
  <Flex justify='space-between' width='100%'>
    <Link to={`/details/${ele._id}`}>
  <Button variant='solid' colorScheme='blue' >
        Read More
      </Button>
      </Link>
      <Text fontSize={"xl"}>
      ~:${ele.price}
  </Text>
      </Flex>
  </CardFooter>
</Card>

    
  )
}



