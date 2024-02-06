import { Box, Button, Card, Divider, Flex, Grid, HStack, Icon, Image, Stack, Text } from '@chakra-ui/react'
import React, { Fragment } from 'react'
import { LiaRupeeSignSolid } from "react-icons/lia";
import { SiBitcoinsv } from "react-icons/si";

const Transactions = () => {
    const transactions=[
        {
            id:"1",
            icon:LiaRupeeSignSolid,
            text:"INR Deposit",
            amount:"+ ₹81,123.10",
            timestamp:"2022-06-09 7:06 PM"
        },
        {
            id:"2",
            icon:SiBitcoinsv,
            text:"BTC Sell",
            amount:"- 12.48513391 BTC",
            timestamp:"2022-05-27 12:32 PM"
        },
        {
            id:"3",
            icon:LiaRupeeSignSolid,
            text:"INR Deposit",
            amount:"+ ₹81,123.10",
            timestamp:"2022-06-09 7:06 PM"
        }

]
  return (
    <>
    
    <Card mb="10px" width="448px" height="345px" ml="50px" mt="28px" borderRadius="16px">
       <Text fontSize="sm" color="black.80" pl="20px" pt="10px">Recent Transactions </Text>
       <Stack pl="20px" pt="20px" gap={3}>
        {transactions.map((transaction,i)=>(

            <Fragment  key={transaction.id}>
                {i!==0 && <Divider mt={3}/>}
                <Flex gap={4} >
                <Grid placeItems="center"   bg="#D3D3D3"  boxSize={10} borderRadius="full">
                   <Icon as={transaction.icon} />
                   
                </Grid>
                <Flex justify="space-between" w="full" pr="10px" >
                    <Stack spacing={0}>
                        <Text fontSize="sm" color="#000000">
                           {transaction.text}
                        </Text>
                        <Text fontSize="sm" color="gray">
                           {transaction.timestamp}
                        </Text>
                       
                    </Stack>
                    <Text fontSize="sm" fontWeight="bold" color="171717" pl="20px">
                           {transaction.amount}
                        </Text>
                </Flex>
            </Flex>
            </Fragment>
        ))}
        <Button bg="#D3D3D3" w="410px" color="black" mt="20px">View</Button>
       </Stack>
    </Card>
    
    
    </>
  )
}

export default Transactions
