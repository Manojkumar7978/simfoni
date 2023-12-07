import { Box, Heading } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardElement from '../components/Card'
import MostSearching from '../components/MostSearching'
import { searchProduct } from '../assests/data'
import Loder from '../components/loder'
import { useLocation, useParams } from 'react-router-dom'

export default function Allproducts() {
    let {id}=useParams()
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const filter = queryParams.get('filter')
    let data=useSelector((e)=>e.searchedProducts)
    if(filter==1){
      data=data.sort((a,b)=>{
        console.log(a,b)
        return a.name.toLowerCase()-b.name.toLowerCase()
      })
    }else if(filter==3){
      data=data.sort((a,b)=>{
        return b.sale_price-a.sale_price
      })
    }else if(filter==4){
      data=data.sort((a,b)=>{
        return a.sale_price-b.sale_price
      })
    }
  const dispatch=useDispatch()
  window.scrollTo({top: 0,behavior: 'smooth'})
    useEffect(()=>{
      dispatch({
        type:'SEARCH PRODUCT',
        payload:[] 
      })
      searchProduct(id)
      .then((res)=>{
        dispatch({
          type:'SEARCH PRODUCT',
          payload:res 
        })
      })
      .catch((err)=>{
        console.log(err)
      })
    },[id])

  return (
    <Box
    p={5}
    bg={'#eef3f6ce'}
    >
       <Box p={10} bg={'white'} borderRadius={5}>
       <Heading size={'md'}>{id}</Heading>
      <Box h={'920px'}
      mt={10}
      className='scroll'
      overflowY={'auto'}>
      <Box
       display={'grid'}
       gridTemplateColumns={['repeat(2,1fr)','repeat(3,1fr)','repeat(5,1fr)']}
       justifyItems={'center'}
       rowGap={5}
       >
            {
               data.length===0 ? <Loder/> :
               data.map((el,ind)=>{
                return <CardElement el={el}/>
            })
            }
        </Box>
      </Box>
        </Box> 
        <MostSearching/>

      
    </Box>
  )
}
