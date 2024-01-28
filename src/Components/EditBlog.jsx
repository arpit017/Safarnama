import React, { useState } from 'react';
import {
  Box,
  Heading,
  Input,
  Textarea,
  Select,
  Button,
  FormLabel,
  FormControl,
  useToast,
} from '@chakra-ui/react';
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
const EditBlog = () => {
  const [blogData, setBlogData] = useState({
    heading: '',
    content: '',
    tag: '',
    price:'',
    image: ''
  });

  const toast = useToast()

  //-------------->expreminet

  useEffect(()=>{
axios.get(`https://blog-backend-cl3f.onrender.com/admin/${id}`,{
  headers: headers,
}).then((res)=>{setBlogData(res.data.required_Blog)})
  },[])

  //-------------->
const navigate=useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value });
  };

const token=localStorage.getItem("token")

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
    // Add more headers as needed
  };
 const {id}= useParams()

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform save logic (e.g., send data to server, save in database)
    console.log('Blog Data:', blogData);
    // Reset the form after saving
   
console.log(id)
    axios.patch(`https://blog-backend-cl3f.onrender.com/admin/edit/${id}`,blogData, {
      headers: headers,
    })
    .then((res)=>{console.log(res.data);toast({
      title: 'Blog Edited.',
      description: "We've edited your blog for you.",
    
      duration: 4000,
       position: "top",
      isClosable: true,
    })})
    .catch((err)=>{console.log(err)})

    setBlogData({
      heading: '',
      content: '',
      tag: '',
      price:'',
      image: ''
    });
   navigate("/admin")
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Edit your Blog</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>Heading</FormLabel>
          <Input
            type="text"
            name="heading"
            value={blogData.heading}
            onChange={handleChange}
            required="true"
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Content</FormLabel>
          <Textarea
            name="content"
            value={blogData.content}
            onChange={handleChange}
            required="true"
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Tag</FormLabel>
          <Select
            name="tag"
            value={blogData.tag}
            required="true"
            onChange={handleChange}
            placeholder="Select a tag"
          >
            <option value="Technology">Technology</option>
            <option value="Travel">Travel</option>
            <option value="Food">Food</option>
            {/* Add more options as needed */}
          </Select>
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Price </FormLabel>
          <Input
            type="number"
            name="price"
            value={blogData.price}
            onChange={handleChange}
            required="true"
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Image URL </FormLabel>
          <Input
            type="text"
            name="image"
            value={blogData.image}
            onChange={handleChange}
            required="true"
          />
        </FormControl>

        <Button colorScheme="teal" type="submit">
          Save Blog
        </Button>
      </form>
    </Box>
  );
};

export default EditBlog;

