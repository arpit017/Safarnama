import React from 'react'
import { Card, Flex, CardBody, CardFooter,Image,Stack,Heading,Button,Text,Divider,ButtonGroup,SimpleGrid, useToast } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import axios from "axios"

export const Myblogelement = ({ele,setDel,del}) => {

const token=localStorage.getItem("token")
const toast = useToast()


const handleDelete=()=>{

    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        // Add more headers as needed
      };

axios.delete(`https://blog-backend-cl3f.onrender.com/admin/delete/${ele._id}`,{
    headers: headers,
  })
.then((res)=>{console.log(res);setDel(!del);toast({
  title: 'Blog deleted.',
  description: "We've deleted your blog for you.",
  
  
  duration: 3000,
   position: "top",
  isClosable: true,
})})
.catch((err)=>{console.log(err)})
}

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
        {ele.content}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
  <Flex justify='space-between' width='100%'>
    
        <Link to={`/editblog/${ele._id}`} >
      <Button variant='solid'  bg="#FEB2B2"   >
       Edit
      </Button>
      </Link>
      <Button variant='ghost'  bg="#FEB2B2"onClick={handleDelete}>
        Delete
      </Button>
   
    </Flex>
  </CardFooter>
</Card>

    
  )
}
