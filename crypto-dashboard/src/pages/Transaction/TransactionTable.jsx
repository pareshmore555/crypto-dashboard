import { Button, Stack, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

const TransactionTable = () => {
    const DataTable=[
        {
            id: "HD82NA2H",
            date: "2023-06-20",
            time: "07:00 AM",
            type: {
              name: "INR Deposit",
              tag: "E-Transfer",
            },
            amount: "+₹81,123",
            status: "pending",
          },
          {
            id: "HD82NA4H",
            date: "2023-06-18",
            time: "07:00 AM",
            type: {
              name: "INR Widthdraw",
              tag: "Wire Transfer",
            },
            amount: "-₹55,123",
            status: "processing",
          },
          {
            id: "HD82NA5H",
            date: "2023-06-18",
            time: "07:00 AM",
            type: {
              name: "Buy",
              tag: "BTC",
            },
            amount: "12.0554484 BTC",
            status: "cancelled",
          },
          {
            id: "HD82NA6H",
            date: "2023-06-18",
            time: "07:00 AM",
            type: {
              name: "Sell",
              tag: "BTC",
            },
            amount: "-2.0554484 BTC",
            status: "completed",
          },
          {
            id: "HD82NA7H",
            date: "2023-06-20",
            time: "07:00 AM",
            type: {
              name: "BTC Deposit",
            },
            amount: "+15.5000000",
            status: "pending",
          },
          {
            id: "HD82NA8H",
            date: "2023-06-18",
            time: "07:00 AM",
            type: {
              name: "BTC Widthdraw",
            },
            amount: "-5.05555544",
            status: "completed",
          },

]
  return (
    <TableContainer>
  <Table variant='simple'>
    
    <Thead >
      <Tr>
        <Th>ID</Th>
        <Th>Date & Time</Th>
        <Th >Type</Th>
        <Th >Amount</Th>
        <Th>Status</Th>
      </Tr>
    </Thead>
    <Tbody>
      {DataTable.map((data)=>{
        return(
            <Tr key={data.id} fontFamily="ubuntu">
            <Td >{data.id}</Td>
         <td>
            <Stack fontFamily="ubuntu">
                <Text>{data.date}</Text>
                <Text color="gray">{data.time}</Text>
            </Stack>
         </td>
         <td>
            <Stack fontFamily="ubuntu">
                <Text>{data.type.name}</Text>
                <Text color="gray">{data.type.tag}</Text>
            </Stack>
         </td>
         <Td>{data.amount}</Td>
         <Td>
            <Button height="30px" borderRadius="13px" fontFamily="ubuntu">{data.status}</Button>
            </Td>
        </Tr>
        )
        
      })}
    </Tbody>
    
  </Table>
</TableContainer>
  )
}

export default TransactionTable
