import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import image from '../assests/image.avif'
import { useDispatch, useSelector } from 'react-redux'
import BestSelling from '../components/selling';
import Suppliers from '../components/suppliers';
import { fetchCategoriesData } from '../assests/data';
import MostSearching from '../components/MostSearching';


export default function Home() {
  let categories=useSelector((e)=>e.categories)
  const dispatch=useDispatch()

  useEffect(()=>{
    if(categories.length===0){
      fetchCategoriesData()
    .then((res)=>{
      dispatch({
        type:'CATEGORIES DATA',
        payload:res
      })
    })
    .catch((err)=>{
      console.log(err)
    })
    }

   
  },[categories.length,dispatch])

  return (
    <Box bg={'#eef3f6ce'}>
      {/* header image  */}
      <Box position={'relative'}>
        <Image w={'100%'} src={image} />
        <Box position={'absolute'}
        top={'10%'}
        left={'10%'}
        >
          <Heading fontSize={['20px','50px','70px']}
          color={'yellow'}
          w={'70%'}
          >BEST SELLING ITEMS</Heading>
          <Text
          color={'white'}
          w={'70%'}
          fontSize={['15px','20px','20px']}
          >Select the best product from out store!</Text>
        </Box>
      </Box>
    
     <BestSelling />
     <Suppliers/>
     <MostSearching />

    </Box>
  )
}
