import { Box, Button,  Heading, chakra } from '@chakra-ui/react'
import React from 'react'
import { mostSearching } from '../assests/data'
import { useNavigate } from 'react-router-dom'

export default function MostSearching() {
const data=mostSearching
const navigate=useNavigate()
  return (
  <chakra.div
  p={10}
 mt={10}
  bg={'white'}
  borderRadius={10}
  >
    <Box>
        <Heading pb={10} size={'md'}>PEPOLE SEARCHYING FOR</Heading>
<Box 
  display={'flex'}
  alignItems={'center'}
  flexWrap={'wrap'}
  gap={2}
  >
        {
            data.map((el,ind)=>{
                return <Box key={el}>
                    <Button color={'gray'} 
                    onClick={()=>{
                      navigate(`/all/${el}`)
                    }}
                    >{el}</Button>
                </Box>
            })
        }
  </Box>
    </Box>
  </chakra.div>
  )
}
