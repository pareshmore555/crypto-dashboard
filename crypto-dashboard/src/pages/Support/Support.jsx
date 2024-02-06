import React from 'react'
import DashboardLayout from '../../Component/DashboardLayout'
import { Alert, Box, Button, Card, Checkbox, Flex, HStack, Icon, Image, Stack, Text, Textarea } from '@chakra-ui/react'
import { IoMdMail } from "react-icons/io";
import { Input } from '@chakra-ui/react'
import { IoChatboxSharp } from "react-icons/io5";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Support = () => {
  function click(){
    Alert("message sent")
  }
  return (
    <DashboardLayout>
      <HStack display="flex" justify="space-around">
       <Box mt="20px" gap="20px">
       
       <Text fontSize="30px" fontFamily="ubuntu">Contact Us</Text>
       <p color='grey' fontFamily="ubuntu">Have a question or just want to know more? Feel free to reach out to us.</p>
      <Flex>
      <Icon as={IoMdMail} mt="5px"></Icon>
       <Text ml="10px">Bitcoin@gmial.com</Text>
       </Flex> 
       
       <Flex>
       <Icon as={FaPhoneSquareAlt} mt="5px"></Icon>
       <Text ml="10px">203423</Text>
       </Flex>
       
       </Box>
       <Stack mt="20px" >
        <Text color="green" fontFamily="ubuntu">You will receive response within 24 hours of time of submit.</Text>
        <HStack mt="10px" >
        <Input placeholder='Name' />
        <Input placeholder='SirName' />
        </HStack>
        <Input placeholder='Email' />
        <Textarea placeholder="Your Message"   />
        
          <Checkbox fontFamily="ubuntu">I agree with Terms & Conditions.</Checkbox>
        
         <Button bg="	#E5E4E2" onClick={click} fontFamily="ubuntu">Send a Message</Button>
         <Button  bg="	#E5E4E2" fontFamily="ubuntu">Book a Metting</Button>
        
       </Stack>
       
      </HStack>
      <HStack>
      <Flex mt="150px">
       <Image src='/chatbot.png'></Image>
       <Box ml="130px" bg="transperent" borderRadius="20px" alignItems="center">
        <Stack>
        <Icon as={IoChatboxSharp} color="purple" height="20px"></Icon>
        <Text fontFamily="ubuntu">Live Chat</Text>
        <Text fontFamily="ubuntu">Don’t have time to wait for the answer? Chat with us now.</Text>
        </Stack>
       </Box>
       </Flex>
      </HStack>
      
      
      
    </DashboardLayout>
  )
}

export default Support
