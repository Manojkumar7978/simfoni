import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import CardElement from './Card'
import { useNavigate } from 'react-router-dom'
import Loder from './loder'

export default function AllItems() {
    let data=useSelector((e)=>e.products)
    const navigate=useNavigate()
  return (
    <Box
    p={10}
    m={[0,5,10]}
     bg={'white'}
     borderRadius={10}
    >
<Box display={'flex'} alignItems={'flex-end'} justifyContent={'space-between'} pb={10}>
<Heading  size={'md'}>ALL ITEMS</Heading>
<Heading color={'#4bafad'} cursor={'pointer'} size={'sm'}
onClick={()=>{
    navigate('/all/ALL ITEMS')
}}
>See More{'>'}</Heading>
</Box>
<Box
display={'grid'}
gridTemplateColumns={['repeat(2,1fr)','repeat(2,1fr)','repeat(5,1fr)']}
justifyItems={'center'}
rowGap={5}
>
    {
       data.length===0 ? <Loder/> : 
       data.slice(0,10).map((el,ind)=>{
        return <CardElement el={el}/>
    })
    }
</Box>

      
    </Box>

  )
}
