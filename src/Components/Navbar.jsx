import React from 'react';
import { Link } from 'react-router-dom';
import {Box,Button,Flex} from "@chakra-ui/react"
import {  useSelector,useDispatch } from 'react-redux';


const Navbar = () => {

  const login=useSelector((data)=>{
    return data.login
  })
  const name=useSelector((data)=>{
    return data.name
  })
const dispatch=useDispatch()

const handleLogout=()=>{
  dispatch({
    type:"LOGGED_OUT"
  })
}

  return (
    <Flex   marginLeft="10%" align="center" justify="space-between" color={"white"} padding="1rem" bg="" width={"80%"} >
      <Box display ="flex" width="10%"  >
      <Button as={Link} to="/" variant="ghost" mx="0.2rem" colorScheme='white' >
      <h3>SAFARNAMA</h3>
        </Button>
   
        </Box>
        <Box margin={"auto"} >
        <Button as={Link} to="/" colorScheme='teal' variant="ghost" mx="0.5rem" textDecoration={"none"}>
        Home
        </Button>
        <Button as={Link} to="/blogs" colorScheme='teal' variant="ghost" mx="0.5rem" textDecoration={"none"}>
        Blogs
        </Button>
        <Button as={Link} to="/admin" colorScheme='teal' variant="ghost" mx="0.5rem" textDecoration={"none"}>
        Admin
        </Button>
        <Button as={Link} to="/signup" colorScheme='teal' variant="ghost" mx="0.5rem" textDecoration={"none"}>
          Signup
        </Button>

        {
          login?<Button as={Link} to="/blogs" colorScheme='teal' variant="ghost" mx="0.5rem" textDecoration={"none"} onClick={handleLogout}>
          Logout
        </Button>: <Button as={Link} to="/login" colorScheme='teal' variant="ghost" mx="0.5rem" textDecoration={"none"}>
          Login
        </Button>
        }
        
       
      </Box>
      <Box display ="flex" width="10%">
      <Button as={Link} to="#" variant="ghost" mx="0.2rem" colorScheme='white' >
      <h5>Hi ! {name}</h5>
        </Button>
       
       
        </Box>
    </Flex>
  );
};

export default Navbar;