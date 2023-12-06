import { Box, Heading, Image, Text,chakra } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'


export default function BestSelling() {
    let data=useSelector((e)=>e.categories)
    console.log(data)
  return (
  <chakra.div
  p={10}
 m={10}
  bg={'white'}
  borderRadius={10}
  >
    <Box>
        <Heading pb={10} size={'md'}>BEST SELLING CATEGORIES</Heading>
<Box 
  display={'flex'}
  alignItems={'center'}
  justifyContent={'space-between'}
  flexWrap={'wrap'}
  gap={2}
  >
        {
            data.slice(0,5).map((el,ind)=>{
                return <Box key={el.categoryId}
                w={'200px'}
                p={5}
                minH={'250px'}
                borderRadius={5}
                boxShadow={'md'}
                border={'1px solid grey'}
                >
                    <Image w={'100%'} margin={'auto'} bg={'white'} src='https://png.pngtree.com/png-clipart/20230310/ourmid/pngtree-fresh-fruit-png-image_6642661.png'/>
                    <Text noOfLines={1} w={'100%'} textAlign={'center'} fontWeight={'700'}>{el.displayName}</Text>

                </Box>
            })
        }
  </Box>
    </Box>
  </chakra.div>
  )
}
