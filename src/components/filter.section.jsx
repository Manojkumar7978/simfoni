import React from 'react'
import {
  Button, Flex, IconButton, Input, InputGroup,
  InputRightElement, Menu, MenuButton, MenuItem, MenuList,
  StatDownArrow, chakra, useDisclosure
} from '@chakra-ui/react'
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
        <Box display={'flex'}
          justifyContent={'space-between'}
          rowGap={5}
          flexWrap={'wrap'}
          w={['100%', '100%', '70%']}
        >
          <Box
            position={'relative'}
            p={1}
            pl={5}
            variant={'outline'}
            _hover={{}}
            bg={'white'}
            _active={{}}
            w={['100%', '100%', '33%']}
            fontWeight={'500'}
            borderRadius={5}
          >Purchase organisation
            <StatDownArrow w={3}
              color={'black'}
              className='rightIcon'
              right={2}
            />
          </Box>
          <Box
            position={'relative'}
            p={1}
            pl={5}
            variant={'outline'}
            _hover={{}}
            bg={'white'}
            _active={{}}
            w={['45%', '45%', '33%']}
            fontWeight={'500'}
            borderRadius={5}
          >Company
            <StatDownArrow w={3}
              color={'black'}
              className='rightIcon'
              right={2}
            />
          </Box>
          <Box
            position={'relative'}
            p={1}
            pl={5}
            variant={'outline'}
            _hover={{}}
            bg={'white'}
            _active={{}}
            w={['45%', '45%', '33%']}
            fontWeight={'500'}
            borderRadius={5}
          >Plant
            <StatDownArrow w={3}
              color={'black'}
              className='rightIcon'
              right={2}
            />
          </Box>

        </Box>
        <Flex flexDirection={['column-reverse', 'column', 'column']} gap={5}>
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
            <Box display={['none', 'none', 'flex']} alignItems={'center'} gap={5}>
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
          <Box bg={'white'} borderRadius={5} pr={[2, 'auto', 'auto']}>
            {
              menuBtns.map((el, ind) => {
                return <Menu key={el}>
                  <MenuButton bg={'white'}
                    _hover={{}}
                    _active={{ borderBottom: '3px solid #188af4', color: '#188af4' }}
                    borderRadius={'0'}
                    as={Button}
                    display={ind !== 0 && ['none', 'inline', 'inline']}
                    w={['full', 'auto', 'auto']}
                    textAlign={'left'}
                  >
                    {el}
                    <FiChevronDown
                      className='rightIcon'
                    />
                  </MenuButton>
                  {
                    ind === 0 &&
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
                            as={Button} rightIcon={<GoChevronRight />}>Cleaning Supplies</MenuButton>
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
                            as={Button} rightIcon={<GoChevronRight />}>Food & Baverages</MenuButton>
                        </Menu>
                      </MenuItem>
                      <MenuItem pt={2} pb={2} borderBottom={'1px solid grey'}>Medical Equipment & Supplies</MenuItem>
                      <MenuItem p={0} >
                        <Menu>
                          <MenuButton
                            className='menubtn'
                            as={Button} rightIcon={<GoChevronRight />}>Office Supplies</MenuButton>
                        </Menu>
                      </MenuItem>
                    </MenuList>
                  }
                </Menu>
              })
            }

          </Box>
        </Flex>
      </chakra.div>

    </React.Fragment>

  )
}
