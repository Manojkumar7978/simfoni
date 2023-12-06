import { Box, Skeleton } from '@chakra-ui/react'
import React from 'react'

export default function Loder() {
  return (
    <Box display={'flex'} justifyContent={'space-between'} gap={10}>
        <Skeleton w={'200px'} h={'200px'}/>
        <Skeleton w={'200px'} h={'200px'}/>
        <Skeleton w={'200px'} h={'200px'}/>
        <Skeleton w={'200px'} h={'200px'}/>
        <Skeleton w={'200px'} h={'200px'}/>
    </Box>
  )
}
