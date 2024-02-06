import { Box, Flex, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import SideNav from './SideNav'
import TopNav from './TopNav'
import Sidedrawer from './Sidedrawer'
const DashboardLayout = ({title,children}) => {
    const{isOpen,onClose,onOpen}=useDisclosure();
  return (
    <div>
      <Flex>
        <Box display={{
          base:"none",
          lg:'flex'
         }} >
        <SideNav />
    </Box>
     
     <Sidedrawer isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>
      <Box flexGrow={1}>
      <TopNav title={title} onOpen={onOpen}/>
      <Box px="4" overflowX="hidden" overflowY="auto">
       {children}
      </Box>
      </Box>
     </Flex>
    </div>
  )
}

export default DashboardLayout
