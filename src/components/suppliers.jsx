import { Box,Heading, Image, Text,chakra } from '@chakra-ui/react'
import React from 'react'
import { bestSuppliers } from '../assests/data'

export default function Suppliers() {
const data=bestSuppliers
  return (
  <chakra.div
  p={10}
 m={10}
  bg={'white'}
  borderRadius={10}
  >
    <Box>
        <Heading pb={10} size={'md'}>BEST SUPPLIERS</Heading>
<Box 
  display={'flex'}
  alignItems={'center'}
  justifyContent={'space-between'}
  flexWrap={'wrap'}
  gap={2}
  >
        {
            data.slice(0,5).map((el,ind)=>{
                return <Box w="200px"
                h={'250px'}
                p={5} boxShadow={'md'}
                borderRadius={5}
                >
                    <Box position={'relative'}  h={'135px'} overflow="hidden">
                <Image
                position={'absolute'}
                top={'50%'}
                left={'50%'}
                transform={'translate(-50%,-50%)'}
                  src={el.url}
                  alt={el.name}
                />
              </Box>
              <Text mt={5} noOfLines={1} fontWeight={'700'}>{el.name}</Text>
                    <Box mt={5} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Text fontSize={'smaller'} fontWeight={'700'} color={'#4bafad'}>100% of 2347</Text>
                        <Text fontSize={'smaller'} fontWeight={'500'}>per 2 years</Text>
                    </Box>
                    </Box>
            })
        }
  </Box>
    </Box>
  </chakra.div>
  )
}
