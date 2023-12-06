import { Box, Heading, Image, 
    chakra,
    Stack, Text, ButtonGroup, Button } from '@chakra-ui/react'
import React from 'react'
import { FaRegHeart } from 'react-icons/fa'

export default function Details() {
    let el=JSON.parse(localStorage.getItem('item'))
    console.log(el)
  return (
    <Box
    p={5}
    bg={'#eef3f6ce'}
    >
       <Box p={5}
       borderRadius={5}
       bg={'white'}
       display={'flex'}
       gap={5}
       >
       <Stack gap={5}>
            <Image 
            borderRadius={5}
            w={70}
            loading='lazy'
            src={`https://assets.wfcdn.com/im/63330616/resize-h800-w800%5Ecompr-r85/7186/${el.leadImage.id}/Wayfair+Basics%C2%AE+Hinged+Furniture+Anti-Tip+Strap.jpg`}/>
            <Image 
            borderRadius={5}
            w={70}
            loading='lazy'
            src={`https://assets.wfcdn.com/im/63330616/resize-h800-w800%5Ecompr-r85/7186/${el.leadImage.id}/Wayfair+Basics%C2%AE+Hinged+Furniture+Anti-Tip+Strap.jpg`}/>
             <Image 
            borderRadius={5}
            w={70}
            loading='lazy'
            src={`https://assets.wfcdn.com/im/63330616/resize-h800-w800%5Ecompr-r85/7186/${el.leadImage.id}/Wayfair+Basics%C2%AE+Hinged+Furniture+Anti-Tip+Strap.jpg`}/>
        </Stack > 
        <Image 
        w={400}
        borderRadius={5}
        src={`https://assets.wfcdn.com/im/63330616/resize-h800-w800%5Ecompr-r85/7186/${el.leadImage.id}/Wayfair+Basics%C2%AE+Hinged+Furniture+Anti-Tip+Strap.jpg`}/>
       <Box>
        <Heading size={'md'}>{el.name}</Heading>
        <Text color={'GrayText'}>SKU number {el.sku}</Text>
        <Text color='black' fontWeight={'700'} fontSize='2xl'>
            <chakra.span fontSize={'sm'} >Price: </chakra.span>
          ${el.pricing.customerPrice.unitPrice.value}
          <chakra.span color={'gray'}
          fontWeight={'bold'}
          fontSize={'sm'}>
            /each
          </chakra.span>
        </Text>
        <ButtonGroup mt={5}>
            <Button size={'sm'} leftIcon={'-'} variant={'outline'} w={'100px'} rightIcon={'+'}>1</Button>
            <Button size={'sm'} bg="#4bafad" 
    _hover={{}}
    _active={{}}
    color={'white'}>Add to Cart</Button>
     <Button w={'30%'}  size='sm' color={'white'}
     bg={'#4bafad'}
     _hover={{}} _active={{}}
        variant={'outline'}><FaRegHeart size={20} /></Button>
        </ButtonGroup>
        <Stack mt={10}>
            <Heading size={'sm'} >Additional Infromation</Heading>
            <Text fontWeight={'900'}>Vendor Name:</Text>
            <Text fontWeight={'900'}>Manufacturers Name:</Text>
            <Text fontWeight={'900'}>Brand Name:</Text>
            <Text fontWeight={'900'}>Days to deliver:</Text>
            <Text fontWeight={'900'}>Country of origin:</Text>
            

        </Stack>
       </Box>
       </Box>
      
    </Box>
  )
}
