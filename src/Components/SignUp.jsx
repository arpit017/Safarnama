import React from "react";
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
} from "@chakra-ui/react";

import { useState } from "react";
import { UpperHome } from "./UpperHome";
import axios from "axios";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    age: 0,
  });
  const navigate = useNavigate();
  const toast = useToast();
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://blog-backend-cl3f.onrender.com/users/signup", state)
      .then((res) => {
        res.data === "email already in use"
          ? alert(res.data)
          : navigate("/login");
        res.data !== "email already in use" &&
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 3000,
            position: "top",
            isClosable: true,
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChange = (event) => {
    // event.preventDefault()
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/3473569/pexels-photo-3473569.jpeg?auto=compress&cs=tinysrgb&w=600')",
        color: "white",
      }}
    >
      <Navbar />
      <Flex align="center" justify="center" height="100vh">
        <Box
          width="400px"
          p={8}
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
        >
          <Heading mb={4}>Sign Up</Heading>
          <form onSubmit={handleSubmit}>
            <FormControl mb={4}>
              <FormLabel>Name</FormLabel>
              <Input
                type="String"
                placeholder="Enter your name"
                name="name"
                required="true"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                name="email"
                required="true"
                onChange={handleChange}
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                name="password"
                required="true"
                onChange={handleChange}
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Age</FormLabel>
              <Input
                type="Number"
                placeholder="Enter your age"
                name="age"
                required="true"
                onChange={handleChange}
              />
            </FormControl>

            <Button colorScheme="teal" type="submit" width="100%">
              Sign Up
            </Button>
          </form>

          <Text mt={4}>
            Already have an account?{" "}
            <Link color="teal.500" href="/login">
              Log in
            </Link>
          </Text>
        </Box>
      </Flex>
    </div>
  );
};
