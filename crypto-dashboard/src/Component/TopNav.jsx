import { Button, Container, Flex, HStack, Heading, Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { FaRegUser } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
const TopNav = ({title,onOpen}) => {
  return (
    <HStack bg="white" height="64px" justify="space-between" px="32px">
      <Icon as={FaBars} onClick={onOpen} 
      display={{
         base:'block',
         lg:'none'
      }}/>  
      <Heading fontWeight="medium" fontSize="28px" fontFamily="ubuntu">{title}</Heading>

    <Menu>
  <MenuButton >
    <Icon as={FaRegUser} fontSize="20px"/>
  </MenuButton>
  <MenuList>
    <MenuItem>LogOut</MenuItem>
    <MenuItem>Support</MenuItem>
    
  </MenuList>
</Menu>
    </HStack>
  )
}

export default TopNav
