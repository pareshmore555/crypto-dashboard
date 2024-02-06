import { HStack, Heading, Icon, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import { BiSolidDashboard } from "react-icons/bi";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const SideNav = () => {
    const navlink=[
        {
        icon:BiSolidDashboard,
        text:"Dashboard",
        link:"/"
    },
    {
        icon:GrTransaction,
        text:"Transactions",
        link:"/transactions"
    },
]
  return (
   <Stack
   boxShadow={{
    base:'none',
    lg:'lg'
   }}
   bg="white" maxWidth="16rem" height="100vh" gap="12px" pl="12px" justifyContent="space-between">
    <Box>
    <Heading textAlign="center" fontSize="20px" pt="54px" color="purple" as="h1">BITCOIN</Heading>
    {navlink.map((nav)=>(
        <Link to={nav.link} key={nav.text}>
        <HStack  gap="14px" 
        width="232px"
        height="40px"
        borderRadius="10px"
        _hover={{
            bg:"#EEEEF4",
            cursor:"pointer",
            color:"#171717"
        }}
        color="#797E82"
        >
        <Icon as={nav.icon}/>
        <Text fontSize="14px" fontWeight="medium">{nav.text}</Text>
        </HStack>
        </Link>
    ))}
    </Box>
   
   <Link to="/support">
   <HStack  gap="14px" 
        width="232px"
        height="40px"
        borderRadius="10px"
        _hover={{
            bg:"#EEEEF4",
            cursor:"pointer",
            color:"#171717"
        }}
        color="#797E82"
        mb="20px"
        
        >
        <Icon as={BiSupport}/>
        <Text fontSize="14px" fontWeight="medium">Support</Text>
        </HStack>
        </Link>
   </Stack>
  )
}

export default SideNav
