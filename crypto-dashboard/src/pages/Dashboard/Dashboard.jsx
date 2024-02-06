import React from 'react'
import DashboardLayout from '../../Component/DashboardLayout'
import PortfolioSection from './Component/PortfolioSection'
import PriceSection from './Component/PriceSection'
import { Grid, GridItem, HStack, Image } from '@chakra-ui/react'
import Transactions from './Component/Transactions'
const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
    <Grid gridTemplateColumns={{
      base:"repeat(1,1fr)",
      md:"repeat(2,1fr)",
    }}>
      <GridItem colSpan={2}>
      <PortfolioSection />
      </GridItem>
      <GridItem colSpan={1}>
      <PriceSection />
      </GridItem>
      <GridItem colSpan={1}>
      <Transactions/>
      </GridItem>
    
    </Grid>
    
    <HStack pl="170px" gap="40px" pt="30px">
        <Image src='/Loans.png'  />  
        <Image src='/Contact.png' />
    </HStack>
    </DashboardLayout>
    
  )
}

export default Dashboard
