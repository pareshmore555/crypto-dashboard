import { Button, Card, Flex, HStack, Icon, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import { LuMinusCircle } from "react-icons/lu";
import { LuPlusCircle } from "react-icons/lu";
import { GoArrowUpRight } from "react-icons/go";
const PriceSection = () => {
    const timestamps=["7PM","7:30PM","8PM","8:30PM","9PM"];
  return (
    <Card width="448px" height="345px" ml="170px" mt="28px" borderRadius="16px"> 
    <Stack pl="20px" pt="15px" gap="5px" >
        <HStack fontFamily="ununtu" >
            <Text fontSize="14px" color="535D66">Current Price</Text>
     
        </HStack>
        <HStack>
        <Text fontFamily='ubuntu'fontSize='24px' color="171717" fontWeight="bold"> ₹26,670.25</Text>
       
         <HStack >
            <Icon as={GoArrowUpRight} color="green"></Icon>
        <Text fontFamily='ubuntu'fontSize='14px' color="green"  >0.04%</Text>
        
        </HStack>
        <HStack ml="30px">
            <Button bg="purple" color="white" leftIcon={
                <Icon as={LuMinusCircle}></Icon>
            }>BUY</Button>
            <Button bg="purple" color="white" leftIcon={
                <Icon as={LuPlusCircle}></Icon>
            }>SELL</Button>
        </HStack>
        </HStack>
        <Tabs variant='soft-rounded' colorScheme='green' mt="10px" >
            <Flex justify="end">
            <TabList fontSize="sm">
            <Tab >1HR</Tab>
              <Tab>1D</Tab>
              <Tab>1W</Tab>
              <Tab>1M</Tab>
          </TabList>
            </Flex>
         
     <TabPanels >
      <TabPanel>
      <Image src='/Vector 27.svg' width="100%" mt="48px"></Image>
        <HStack justify="space-around">
            {timestamps.map((timestamp)=>(
                <Text key={timestamp} fontSize="sm" color="black.80">{timestamp}</Text>
            ))} 
        </HStack>
     </TabPanel>
      <TabPanel>
        <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
       
        
     </Stack>
    </Card>
  
  )
}

export default PriceSection
