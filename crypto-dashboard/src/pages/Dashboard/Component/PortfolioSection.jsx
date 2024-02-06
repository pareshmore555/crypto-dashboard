import { Box, HStack, Icon, Stack, Tag } from '@chakra-ui/react'
import React from 'react'
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Text } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { BiDownArrowCircle } from "react-icons/bi";
import { BiUpArrowCircle } from "react-icons/bi";
const PortfolioSection = () => {
  return (
    <HStack bg="white"borderRadius="xl" p="6" mt="20px" justify="space-between" 
    width={{lg:"960px",base:"700px"}} height={{lg:"106px",base:"250px"}} ml="170px" flexDir={{
      base:"column",
      lg:"row"
    }}>
     <Stack>
        <HStack fontFamily="ununtu" >
            <Text fontSize="14px" color="535D66">Total portfolio value</Text>
            <Icon as={IoMdInformationCircleOutline}></Icon>
        </HStack>
       
        <Text fontFamily='ubuntu'fontSize='24px' color="171717"fontWeight="bold"> ₹ 112,312.24</Text>
     </Stack>
     <Stack>
        <HStack fontFamily="ununtu" >
            <Text fontSize="14px" color="535D66">Wallet Balances</Text>
     
        </HStack>
        <HStack>
        <Text fontFamily='ubuntu'fontSize='24px' color="171717" fontWeight="bold"> 22.39401000</Text>
         <Tag>BTC</Tag>
         <HStack pl="30px">
        <Text fontFamily='ubuntu'fontSize='24px' color="171717" fontWeight="bold">₹ 1,300.00</Text>
         <Tag>INR</Tag>
        </HStack>
        </HStack>
        
        
     </Stack>
     <HStack gap="20px">
         <Button bg="purple" color="white"leftIcon={
          <Icon as={BiUpArrowCircle} />
         } >Deposit</Button>
        <Button bg="purple" color="white"leftIcon={
          <Icon as={BiDownArrowCircle}/>
         }>Withdrawal</Button>
     </HStack>
   
    </HStack>
  )
}

export default PortfolioSection
