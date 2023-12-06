import { Avatar, Box,
     Button, 
     Flex, 
     HStack, 
     Input, 
     InputGroup, 
     InputLeftAddon, 
     InputLeftElement, 
     InputRightAddon,
      InputRightElement, 
      StatDownArrow,
      chakra
     } from '@chakra-ui/react'
import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch, IoMdNotificationsOutline } from "react-icons/io";
import { LuWallet2 } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { color } from 'framer-motion';


export default function Nav() {
    let[active,setActive]=useState(1)

    const ActiveButton=(value)=>{
     setActive(value)
    }

    return (
<chakra.header p={5} boxShadow={'xs'}>
<React.Fragment>
            <Flex justifyContent={'space-between'} alignItems={'center'} mx={'auto'}>
                {/* left part  */}
                <HStack >
                    <RxHamburgerMenu size={25} />
                    <Box >
                        <Button bg={'white'} value={1} 
                        onClick={()=>{ActiveButton(1)}}
                        color={active===1 && '#00a69e'}
                        fontWeight={'700'} _hover={{ bg: 'white' }}>Catalog</Button>
                        <Button bg={'white'}
                        onClick={()=>{ActiveButton(2)}}
                        color={active===2 && '#00a69e'}
                        value={2} fontWeight={'700'} _hover={{ bg: 'white' }}>BuyDesk</Button>
                        <Button bg={'white'} value={3} fontWeight={'700'} _hover={{ bg: 'white' }} 
                        onClick={()=>{ActiveButton(3)}}
                        color={active===3 && '#00a69e'}
                        rightIcon={<StatDownArrow w={3} color={'black'} />}>History</Button>
                        <Button bg={'white'} 
                        onClick={()=>{ActiveButton(4)}}
                        color={active===4 && '#00a69e'}
                        value={4} fontWeight={'700'} _hover={{ bg: 'white' }}>Dashboard</Button>
                    </Box>

                </HStack>
                {/* right part  */}
                <HStack
                    display={'flex'}
                    alignItems={'center'}
                    gap={5}
                >
                    <Box
                        display={'flex'}
                        alignItems={'center'}
                        gap={3}
                    >
                        <InputGroup>
                            <InputLeftAddon children='PO' />
                            <Input type='text' placeholder='Search' />
                            <InputRightElement color='gray.400'>
                                <IoIosSearch size={25} />
                            </InputRightElement>
                        </InputGroup>
                        <Button variant={'outline'}
                         border={'3px solid #319795'}
                         _hover={{}}
                        _active={{}}
                         > Help</Button>
                    </Box>
                    <Box
                        display={'flex'}
                        alignItems={'center'}
                        gap={10}
                    >
                        <HStack gap={5}>
                            <LuWallet2 size={25} />
                            <FaRegHeart size={25} />
                            <IoCartOutline size={25} />
                            <IoMdNotificationsOutline size={25} />
                        </HStack>
                        <Button 
                        bg={'white'}
                        _hover={{}}
                        _active={{}}
                        leftIcon={<Avatar size={'sm'} name='Sara Green' />
                        } rightIcon={<StatDownArrow w={3} color={'black'}/>}>Sara Green</Button>                    </Box>

                </HStack>
            </Flex>

        </React.Fragment>
</chakra.header>

    )
}
