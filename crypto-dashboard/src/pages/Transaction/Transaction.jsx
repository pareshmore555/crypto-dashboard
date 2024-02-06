import React from 'react'
import DashboardLayout from '../../Component/DashboardLayout'
import { Card, Flex, Icon ,Button, Tabs, TabList, Tab, TabPanels, TabPanel, Tag} from '@chakra-ui/react'
import { IoMdCloudDownload } from "react-icons/io";
import TransactionTable from "./TransactionTable"
const Transaction = () => {
   const tabs=[
    {
       name:"All",
       count:349,
    },
    {
      name:"Deposite",
      count:22,
   },
   {
    name:"Withdrawal",
    count:332,
   },
   {
  name:"Trade",
  count:123,
   },

   ]

  return (
    <DashboardLayout>
      <Flex justify="end" mt="24px" mb="20px">
      <Button bg="purple" color="white" mr="20px"
      leftIcon={<Icon as={IoMdCloudDownload} />}
      inputMode="file"
      >Export Csv</Button>
      </Flex>
      
      <Card ml="170px" height="508px" mr="20px">
      <Tabs>
        <TabList>
          {
            tabs.map((tab)=>{
              return(
                <Tab key={tab.name}>{tab.name} <Tag borderRadius="40px" ml="5px">{tab.count}</Tag>
                </Tab>
              )
            })
          }
       </TabList>

     <TabPanels>
       <TabPanel>
       <TransactionTable />
      </TabPanel>
    <TabPanel>
      <p>Deposite</p>
    </TabPanel>
    <TabPanel>
      <p>Withdrawal</p>
    </TabPanel>
    <TabPanel>
      <p>Trade</p>
    </TabPanel>
  </TabPanels>
</Tabs>
      </Card>
    </DashboardLayout>
  )
}

export default Transaction
