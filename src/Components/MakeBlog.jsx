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
import { useNavigate } from 'react-router-dom';

const MakeBlog = () => {
  const [blogData, setBlogData] = useState({
    heading: '',
    content: '',
    tag: '',
    image: '',
  });
const navigate=useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value });
  };
  const toast = useToast()
const token=localStorage.getItem("token")

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
    // Add more headers as needed
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform save logic (e.g., send data to server, save in database)
    console.log('Blog Data:', blogData);
    // Reset the form after saving

    axios.post("https://blog-backend-cl3f.onrender.com/admin/create",blogData, {
      headers: headers,
    })
    .then((res)=>{console.log(res.data);navigate("/admin");toast({
      title: 'Blog created.',
      description: "We've created your blog for you.",
      status: 'success',
      duration: 6000,
       position: "top",
      isClosable: true,
    })})
    .catch((err)=>{console.log(err)})

    setBlogData({
      heading: '',
      content: '',
      tag: '',
      price:0,
      image: '',
    });
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Create a Blog</Heading>
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

export default MakeBlog;

