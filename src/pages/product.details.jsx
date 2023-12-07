import {
  Box, Heading, Image,
  chakra,
  Stack, Text, ButtonGroup, Button
} from '@chakra-ui/react'
import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import MostSearching from '../components/MostSearching'

export default function Details() {
  let el = JSON.parse(localStorage.getItem('item'))
  window.scrollTo({top: 0,behavior: 'smooth'})

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
            src={`https://assets.wfcdn.com/im/63330616/resize-h800-w800%5Ecompr-r85/7186/${el.image_url}/Wayfair+Basics%C2%AE+Hinged+Furniture+Anti-Tip+Strap.jpg`} />
          <Image
            borderRadius={5}
            w={70}
            loading='lazy'
            src={`https://assets.wfcdn.com/im/63330616/resize-h800-w800%5Ecompr-r85/7186/${el.image_url}/Wayfair+Basics%C2%AE+Hinged+Furniture+Anti-Tip+Strap.jpg`} />
          <Image
            borderRadius={5}
            w={70}
            loading='lazy'
            src={`https://assets.wfcdn.com/im/63330616/resize-h800-w800%5Ecompr-r85/7186/${el.image_url}/Wayfair+Basics%C2%AE+Hinged+Furniture+Anti-Tip+Strap.jpg`} />
        </Stack >
        <Image
          w={400}
          borderRadius={5}
          src={`https://assets.wfcdn.com/im/63330616/resize-h800-w800%5Ecompr-r85/7186/${el.image_url}/Wayfair+Basics%C2%AE+Hinged+Furniture+Anti-Tip+Strap.jpg`} />
        <Box>
          <Heading size={'md'}>{el.name}</Heading>
          <Text color={'GrayText'}>SKU number {el.sku}</Text>
          <Text color='black' fontWeight={'700'} fontSize='2xl'>
            <chakra.span fontSize={'sm'} >Price: </chakra.span>
            ${el.sale_price}
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
            <Button w={'30%'} size='sm' color={'white'}
              bg={'#4bafad'}
              _hover={{}} _active={{}}
              variant={'outline'}><FaRegHeart size={20} /></Button>
          </ButtonGroup>
          <Stack mt={10}>
            <Heading size={'sm'} >Additional Infromation</Heading>
            <Text fontWeight={'900'}>Vendor Name: <chakra.span fontWeight={'400'} color={'gray'}>
              {'null'}
            </chakra.span></Text>
            <Text fontWeight={'900'}>Manufacturers Name:
              <chakra.span fontWeight={'400'} color={'gray'}>{el.manufacturer_name
              }</chakra.span>
            </Text>
            <Text fontWeight={'900'}>Brand Name:
            <chakra.span fontWeight={'400'} color={'gray'}>{el.manufacturer_name
              }</chakra.span>
            </Text>
            <Text fontWeight={'900'}>Days to deliver:
            <chakra.span fontWeight={'400'} color={'gray'}>{el.delivery_guarantee_text}</chakra.span>
            </Text>
            <Text fontWeight={'900'}>Country of origin:</Text>


          </Stack>
        </Box>
      </Box>
      <MostSearching/>
    </Box>
  )
}
