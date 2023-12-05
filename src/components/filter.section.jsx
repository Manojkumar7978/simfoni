import React from 'react'
import {Button, IconButton, Input, InputGroup, InputLeftAddon, InputRightElement, StatDownArrow, chakra} from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { IoSearch } from "react-icons/io5";

export default function Filtersection() {
  return (
    <React.Fragment >
      <chakra.div p={5} bg={'#eef3f6ce'}>
        <Box display={'flex'} gap={5} >
          <Button rightIcon={<StatDownArrow w={3}
           color={'black'}
           />} variant={'outline'}
           _hover={{}}
           bg={'white'}
           _active={{}}
          //  boxShadow={'md'}
           >Purchase organisation</Button>
           <Button rightIcon={<StatDownArrow ml={100} w={3}
           color={'black'}
           />} variant={'outline'}
           _hover={{}}
           bg={'white'}
           _active={{}}
          //  boxShadow={'md'}
           >Company</Button>
           <Button rightIcon={<StatDownArrow ml={100} w={3}
           color={'black'}
           />} variant={'outline'}
           _hover={{}}
           bg={'white'}
           _active={{}}
          //  boxShadow={'md'}
           >Plant</Button>

        </Box>
        <Box>
        <InputGroup>
          <Input bg={'white'} placeholder='Search' />
          <InputRightElement  w={100} >
          <IconButton  w={100}>
          <IoSearch size={25 } />
       
          </IconButton>
          </InputRightElement >
          </InputGroup>
        </Box>
      </chakra.div>
        
    </React.Fragment>
    
  )
}
