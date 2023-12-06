import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import image from '../assests/image.avif'
import { useSelector } from 'react-redux'
import axios from 'axios';

export default function Home() {
  let categories=useSelector((e)=>e.categories)

  useEffect(async ()=>{

    const url = 'https://wayfair.p.rapidapi.com/categories/list?caid=214970';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a92123b46dmshf1d366063e87eccp1764cfjsncb564a0cc294',
        'X-RapidAPI-Host': 'wayfair.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  },[])

  return (
    <Box>
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
    </Box>
  )
}
