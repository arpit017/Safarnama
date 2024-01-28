import React from 'react'
import { UpperHome } from './UpperHome'
import Footer from './Footer'
import axios from "axios"
import { useState,useEffect } from 'react'
import {Button, SimpleGrid,Box, Spinner} from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import { Myblogelement } from './Myblogelement'
import { useDispatch, useSelector } from 'react-redux'

export const Admin = () => {

    const [data,setData]=useState([])
    const [del,setDel]=useState(false)
    const loading=useSelector((data)=>{
      return data.loading
    })
   const dispatch=useDispatch()
    let token =localStorage.getItem("token")

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
      // Add more headers as needed
    }
    
const getData=async()=>{
  axios.get("https://blog-backend-cl3f.onrender.com/admin",{
    headers: headers,
  }).then((res)=>{setData(res.data.my_Blogs);dispatch({type:"LOADED"})})  
}

    useEffect(()=>{
// axios.get("https://blog-backend-cl3f.onrender.com/admin",{
//   headers: headers,
// }).then((res)=>{setData(res.data.my_Blogs)})     
dispatch({type:"LOADING"})
setTimeout(()=>{
  getData()
},1000)

},[del])

  return (
    <div>
        <UpperHome/>
        <Link to="/createblog">
        <Button colorScheme="teal" mt="8">Create a Blog</Button>
        </Link>
        <Box px={{ base: 4, md: 8, lg: 14, xl: 16 }} py={8}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 4 }} spacing={4}>
        {
loading?<Spinner
thickness='4px'
speed='0.65s'
emptyColor='gray.200'
color='red.500'
size='xl'
ml="200%"
/>:data.length>0 && data.map((ele)=>{
  return <div>
    <Myblogelement ele={ele} setDel={setDel} del={del} />
  </div>
})
        }
        </SimpleGrid>
        </Box>
        <Footer/>
    </div>
  )
}
