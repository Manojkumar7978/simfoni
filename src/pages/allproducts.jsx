import { Box, Heading } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CardElement from '../components/Card'
import MostSearching from '../components/MostSearching'

export default function Allproducts() {
    let title=useSelector((e)=>e.keyword)
    let data=useSelector((e)=>e.products)
    useEffect(()=>{
      
    },[])
  return (
    <Box
    p={5}
    bg={'#eef3f6ce'}
    >
       <Box p={10} bg={'white'} borderRadius={5}>
       <Heading size={'md'}>{title}</Heading>
      <Box h={'920px'}
      mt={10}
      className='scroll'
      overflowY={'auto'}>
      <Box
       display={'grid'}
       gridTemplateColumns={'repeat(5,1fr)'}
       
       justifyItems={'center'}
       rowGap={5}
       >
            {
                data.map((el,ind)=>{
                    return <CardElement el={el}/>
                })
            }
        </Box>
      </Box>
        </Box> 
        <MostSearching/>

      
    </Box>
  )
}
