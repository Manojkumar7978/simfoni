import React from 'react'
import { Button, IconButton, Input, InputGroup, InputLeftAddon, InputRightElement, Menu, MenuButton, MenuItem, MenuList, StatDownArrow, chakra, useDisclosure } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { IoSearch } from "react-icons/io5";
import { menuBtns } from '../assests/data';
import { FiChevronDown } from "react-icons/fi";
import { GoChevronRight } from "react-icons/go";


export default function Filtersection() {
  const { isOpen, onOpen, onClose } = useDisclosure()




  return (
    <React.Fragment >
      <chakra.div display={'grid'} gap={5} p={5} bg={'#eef3f6ce'}>
        {/* 1st line elements */}
        <Box display={'flex'} gap={5} >
          <Button size={'sm'} rightIcon={<StatDownArrow w={3}
            color={'black'}
          />} variant={'outline'}
            _hover={{}}
            bg={'white'}
            _active={{}}
          //  boxShadow={'md'}
          >Purchase organisation</Button>
          <Button size={'sm'} rightIcon={<StatDownArrow ml={100} w={3}
            color={'black'}
          />} variant={'outline'}
            _hover={{}}
            bg={'white'}
            _active={{}}
          //  boxShadow={'md'}
          >Company</Button>
          <Button size={'sm'} rightIcon={<StatDownArrow ml={100} w={3}
            color={'black'}
          />} variant={'outline'}
            _hover={{}}
            bg={'white'}
            _active={{}}
          //  boxShadow={'md'}
          >Plant</Button>

        </Box>
        {/* 2nd line elements search input and filter and sort */}
        <Box display={'flex'} alignItems={'center'}
          gap={5}>
          <InputGroup maxW={'600px'}>
            <Input size={'sm'} bg={'white'} placeholder='Search' />
            <InputRightElement w={100} >
              <IconButton
                size={'sm'}
                mt={-2}
                _active={{}}
                _hover={{}}
                borderRadius={'0 5px 5px 0'}
                bg={'#00a69e'} w={100}>
                <IoSearch color='white' size={25} />

              </IconButton>
            </InputRightElement >
          </InputGroup>
          <Box display={'flex'} alignItems={'center'} gap={5}>
            <Button
              size={'sm'}
              variant={'outline'} border={'3px solid #319795'}>Upload</Button>
            <Button rightIcon={<StatDownArrow ml={100} w={3}
              color={'black'}
            />} variant={'outline'}
              _hover={{}}
              bg={'white'}
              _active={{}}
              size={'sm'}
            //  boxShadow={'md'}
            >Company</Button>
            <Button rightIcon={<StatDownArrow ml={100} w={3}
              color={'black'}
            />} variant={'outline'}
              _hover={{}}
              bg={'white'}
              _active={{}}
              //  boxShadow={'md'}
              size={'sm'}
            >Sort by</Button>
          </Box>
        </Box>
        {/* 3rd line elements all menus */}
        <Box bg={'white'} borderRadius={5}>
          {
            menuBtns.map((el, ind) => {
              return <Menu >
                <MenuButton  bg={'white'}
                _hover={{}}
                _active={{borderBottom:'3px solid #188af4',color:'#188af4'}}
                borderRadius={'0'}
                as={Button} rightIcon={<FiChevronDown />}>
                  {el}
                </MenuButton>
                {
                  ind===0 && 
                  <MenuList
                  mt={-2}
                  borderRadius={3}
                  p={0}
                  >
                  <MenuItem pb={2} borderBottom={'1px solid grey'}>Beverages</MenuItem>
                  <MenuItem p={0} borderBottom={'1px solid grey'}>
                    <Menu isOpen={isOpen}>
                      <MenuButton 
                      onMouseEnter={onOpen}
                     className='menubtn'
                      as={Button} rightIcon={<GoChevronRight/>}>Cleaning Supplies</MenuButton>
                   <MenuList onMouseEnter={onOpen} 
                   onMouseLeave={onClose}
                  position={'absolute'}
                  top={-50}
                  left={250}
                  w={300}
                  borderRadius={3}
                   >
                    <MenuItem borderBottom={'1px solid grey'}>ANCILLARIES</MenuItem>
                    <MenuItem borderBottom={'1px solid grey'}>CATERING & KITCHEN SUPPLIES</MenuItem>
                    <MenuItem borderBottom={'1px solid grey'}>FLOOR CARE MACHINES</MenuItem>
                    <MenuItem borderBottom={'1px solid grey'}>JANITORIAL & TOOLS</MenuItem>
                    <MenuItem>PAPER</MenuItem>
                   </MenuList>
                    </Menu>
                  </MenuItem>
                  <MenuItem p={0} borderBottom={'1px solid grey'}>
                 <Menu>
                 <MenuButton 
                     className='menubtn'
                      as={Button} rightIcon={<GoChevronRight/>}>Food & Baverages</MenuButton>
                 </Menu>
                    </MenuItem>
                  <MenuItem pt={2} pb={2} borderBottom={'1px solid grey'}>Medical Equipment & Supplies</MenuItem>
                  <MenuItem p={0} >
                  <Menu>
                 <MenuButton 
                     className='menubtn'
                      as={Button} rightIcon={<GoChevronRight/>}>Office Supplies</MenuButton>
                 </Menu>
                  </MenuItem>
                </MenuList>
                }
              </Menu>
            })
          }

        </Box>
      </chakra.div>

    </React.Fragment>

  )
}
