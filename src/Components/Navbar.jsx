import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Flex, IconButton, Menu, MenuButton, MenuItem ,MenuList, Spacer} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { HamburgerIcon } from '@chakra-ui/icons';
const Navbar = () => {
  const login = useSelector((data) => {
    return data.login;
  });
  const name = useSelector((data) => {
    return data.name;
  });
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({
      type: "LOGGED_OUT",
    });
  };

  return (
    <Flex
      // marginLeft="10%"
      align="center"
      justify={"space-between"}
      color={"white"}
      padding="1rem"
      bg=""
      width={"80%"}
      m="auto"
      
    >
      <Box display="flex" width="10%">
        <Button
          as={Link}
          to="/"
          variant="ghost"
          mx="0.2rem"
          colorScheme="white"
        >
          <h3>SAFARNAMA</h3>
        </Button>
      </Box>

{/* //-----------------------------------------------------------------> */}

<Box  >
     <Box display={{ base: 'flex', md: 'none' }} > 
        <Menu >
        <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
    bg="orange.300"
  />
          <MenuList color={"black"} bg="teal">
            <MenuItem as={Link} to="/">
              Home
            </MenuItem>
            <MenuItem as={Link} to="/blogs">
              Blogs
            </MenuItem>
            <MenuItem as={Link} to="/admin">
              Admin
            </MenuItem>
            {login ? (
              <MenuItem as={Button} onClick={handleLogout}>
                Logout
              </MenuItem>
            ) : (
              <MenuItem as={Link} to="/login">
                Login
              </MenuItem>
            )}
            {!login && (
              <MenuItem as={Link} to="/signup">
                Signup
              </MenuItem>
            )}
          </MenuList>
        </Menu>
        </Box>  
{/* //-----------------------------------------------------------------> */}
{/* margin="auto" */}
      <Box display={{ base: 'none', md: 'flex' }} margin="auto">
        <Button
          as={Link}
          to="/"
          colorScheme="teal"
          variant="ghost"
          mx="0.5rem"
          textDecoration={"none"}
        >
          Home
        </Button>
        <Button
          as={Link}
          to="/blogs"
          colorScheme="teal"
          variant="ghost"
          mx="0.5rem"
          textDecoration={"none"}
        >
          Blogs
        </Button>
        <Button
          as={Link}
          to="/admin"
          colorScheme="teal"
          variant="ghost"
          mx="0.5rem"
          textDecoration={"none"}
        >
          Admin
        </Button>
        <Button
          as={Link}
          to="/signup"
          colorScheme="teal"
          variant="ghost"
          mx="0.5rem"
          textDecoration={"none"}
        >
          Signup
        </Button>

        {login ? (
          <Button
            as={Link}
            to="/blogs"
            colorScheme="teal"
            variant="ghost"
            mx="0.5rem"
            textDecoration={"none"}
            onClick={handleLogout}
          >
            Logout
          </Button>
        ) : (
          <Button
            as={Link}
            to="/login"
            colorScheme="teal"
            variant="ghost"
            mx="0.5rem"
            textDecoration={"none"}
            
          >
            Login
          </Button>
        )}
         
      </Box>
        </Box>
        <Box display={{base:"none",md:"flex"}} width="10%" >
        <Button
          as={Link}
          to="#"
          variant="ghost"
          mx="0.2rem"
          colorScheme="white"
          >
          <h5>Hi ! {name}</h5>
        </Button>
      </Box>
     
    </Flex>
  );
};

export default Navbar;
