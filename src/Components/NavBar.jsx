import React from 'react'
import logo from "../img/pp.jpg";

import { Link, useNavigate } from "react-router-dom";
import { Menu, MenuItem, MenuButton, MenuList, InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { Flex, Image, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { IoSearch,IoAdd, IoLogOut } from 'react-icons/io5';

const NavBar = ({ user }) => {
    const { colorMode, toggleColorMode} = useColorMode();
    const bg = useColorModeValue("yellow.400","yellow.200");
    // console.log(user);

  return (
    <Flex 
    justifyContent={"space-between"}
    alignItem="center"
    width={"100vw"}
    p={4}
    >
        <Link to={"/"}>
            <Image src={colorMode == 'light' ? logo : logo} width={"60px"} height={"40px"}/>
        </Link>

        <InputGroup mx={6} width="60vw">
    <InputLeftElement
      pointerEvents='none'
      children={<IoSearch fontSize={25} />}
    />
    <Input type='text' placeholder='Search...' fontSize={18} fontWeight="medium" varient={"filled"} />
  </InputGroup>
    <Link to={'/create'}>
    <Flex justifyContent={"center"} alignItems="center" bg={bg} width={"40px"} height={"40px"}
    borderRadius="5px" mx={6} cursor="pointer" _hover={{shadow: "md"}} transition="ease-in-out" transitionDuration={"0.3s"}>
        <IoAdd fontSize={25} color={`${colorMode == 'dark'?'#f1f1f1':'#f1f1f1'}`}/>
    </Flex>
    </Link>
    <Menu>
  <MenuButton>
      
    <Image src={user?.photoURL} width="40px" height="40px" rounded="full"/>
  </MenuButton>
  <MenuList>
    <Link to={""}>
        <MenuItem>My Account</MenuItem>
    </Link>
    <MenuItem flexDirection={"row"} alignItems="center" gap={4}>Logout <IoLogOut fontSize={20}/></MenuItem>
  </MenuList>
</Menu>
    </Flex>
  )
}

export default NavBar