import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Grid, GridItem, Heading, Image, Stack, Text ,chakra} from "@chakra-ui/react";
import React from "react";
import { FaRegHeart } from "react-icons/fa";

function CardElement({el}) {
console.log(el)
  return (
    <Card maxW='200px' 
    border={'1px solid gray'}
    h={'auto'}
    >
    <CardBody p={2} >
      <Image
        src={`https://assets.wfcdn.com/im/63330616/resize-h800-w800%5Ecompr-r85/7186/${el.leadImage.id    }/Wayfair+Basics%C2%AE+Hinged+Furniture+Anti-Tip+Strap.jpg`}
        alt={el.name}
        borderRadius={5}
      />
      <Stack mt='6' gap={0}>
        <Heading size='xs' noOfLines={3}
        h={'50px'}
        >{el.name}</Heading>
         <Text color={"gray"}>{el.leadImage.id} </Text>
       <Text color='black.700' fontSize='2xl'>
          ${el.pricing.customerPrice.unitPrice.value}
          <chakra.span color={'gray'}
          fontWeight={'bold'}
          fontSize={'sm'}>
            /each
          </chakra.span>
        </Text>
      </Stack>
    </CardBody>
    <CardFooter display={'grid'} p={2} pt={0} >
        <Stack gap={0} fontWeight={'bold'} fontSize={'small'}>
            <Text color={'#4bafad'}>Saving % 4.60</Text>
            <Text>Supplier: <chakra.span color={'gray'}>Supplier</chakra.span></Text>
            <Text>Delivery by: <chakra.span color={'gray'}>24-Jan-2022</chakra.span></Text>
        </Stack>
    <Box mt={2} mb={2} display={'flex'} gap={1}>
        <Button size={'sm'} w={'70%'}  variant={'outline'} leftIcon={'-'} rightIcon={'+'}>1</Button>
        <Button w={'30%'}  size='sm' color={'#4bafad'}
        colorScheme="#4bafad"
        variant={'outline'}><FaRegHeart size={20} /></Button>
    </Box>
    <Button size={'sm'} bg="#4bafad" 
    _hover={{}}
    _active={{}}
    color={'white'}>Add to Cart</Button>
    </CardFooter>
  </Card>
  );
}

export default CardElement;
