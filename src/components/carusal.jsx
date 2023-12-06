import { Box, Button, Heading, Skeleton } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import CardElement from "./Card";
import ItemsCarousel from 'react-items-carousel';
import Loder from "./loder";

function Carusal({ heading, footerText }) {
  let data = useSelector((e) => e.products)
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  return (
    <Box
      m={10}
      p={10}
      bg={'white'}
      borderRadius={5}
    >
      <Heading pb={10} size={'md'}>{heading}</Heading>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={5}
        gutter={90}

        leftChevron={
          <Button boxShadow={'md'} bg={'white'} h={20} w={3} variant={'outline'}>{'<'}</Button>
        }
        rightChevron={<Button boxShadow={'md'} bg={'white'} h={20} w={3} variant={'outline'}>{'>'}</Button>}
      >
        {
          data.length === 0 ?  <Skeleton w={'100%'} h={'150px'}/>
            :
                data.map((el, ind) => {
                  return <CardElement footerText={footerText} el={el} />
                })
              
        }
      </ItemsCarousel>

    </Box>
  );
}

export default Carusal;
