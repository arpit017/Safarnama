import React, { useEffect } from 'react'
import { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Link,
  Text,
  useToast,
} from '@chakra-ui/react';
import Navbar from './Navbar';
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { UseSelector } from 'react-redux';
export const Login = () => {

  const [state,setState]=useState({
    
    email:"",
    password:""
    
  })
  const auth=useSelector((data)=>{
    return data.login
  })
  const toast = useToast()
  const dispatch=useDispatch()
  const navigate=useNavigate()
  


  const handleSubmit=(e)=>{
       e.preventDefault()
       axios.post("https://blog-backend-cl3f.onrender.com/users/login",state)
       .then((res)=>{
        if(res.data.token){

        console.log(res.data.msg)
        localStorage.setItem("token",res.data.token);
        
         dispatch({type:"LOGGED_IN",payload:res.data.msg}) ;
         navigate("/blogs");
         toast({
          title: `Hii ! ${res.data.msg}`,
          description: "You have been redirected to blogs page. Enjoy your read.",
          status: 'success',
          duration: 5000,
           position: "top",
          isClosable: true,
        })


        }
         
         else{
          alert("Invalid Credentials") 
        }
         })
       .catch((err)=>{console.log(err)})

      // let token= localStorage.getItem("token") 
      // console.log(token)
      // token && 
  }
  const handleChange=(event)=>{
    // event.preventDefault()
    setState({
      ...state,
      [event.target.name]:event.target.value
  })

  }
  return (
    <div style={{ backgroundImage: "url('https://images.pexels.com/photos/3473569/pexels-photo-3473569.jpeg?auto=compress&cs=tinysrgb&w=600')",color:"white" }}>
    <Navbar/>
    {
      (!auth) && <Text  fontWeight={"semibold"} > Login first to go to Admin</Text>
    }
    <Flex align="center" justify="center" height="100vh">
      <Box width="400px" p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
        <Heading mb={4}>Log In</Heading>
        <form onSubmit={handleSubmit}>
          <FormControl mb={4}>
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="Enter your email" name="email" required="true" onChange={handleChange} />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter your password" required="true" name="password" onChange={handleChange}/>
          </FormControl>

          <Button colorScheme="teal" type="submit" width="100%">
            Log In
          </Button>
        </form>

        <Text mt={4}>
          New here?{' '}
          <Link color="teal.500" href="/signup">
            Sign up
          </Link>
        </Text>
      </Box>
    </Flex>
    </div>
  );
}
