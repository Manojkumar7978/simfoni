import axios from "axios";
import { useSelector } from "react-redux";

export const menuBtns=[
    'All Categories',
    'Baverages',
    'Clining Supplies',
    'Food & Baverages',
    'Medical Equipment & Supplies',
    'Office Supplies'
]

export const fetchCategoriesData=async ()=>{
    const url = 'https://wayfair.p.rapidapi.com/categories/list?caid=214970';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a92123b46dmshf1d366063e87eccp1764cfjsncb564a0cc294',
        'X-RapidAPI-Host': 'wayfair.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios(url, options);
      return response.data.response.categoryAppData.departmentCategories
    } catch (error) {
      console.error(error);
    }
  }

export const bestSuppliers=[
    {
        name:'Bechtel Corporation',
        url:'https://photos.prnewswire.com/prnfull/20130124/SF47758LOGO?max=200',

    },
    {
        name:'PCL Construction Enter...',
        url:'data:image/png;base64,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',
        
    },
    {
        name:'Fluor Corporation',
        url:'https://s201.q4cdn.com/930516572/files/doc_multimedia/FLUORlogo.jpg',
        
    },
    {
        name:'AECOM Corporation',
        url:'data:image/jpeg;base64,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',
        
    },
    {
        name:'Kiewit Corporation',
        url:'https://m.media-amazon.com/images/I/61fSkI8NNWL._AC_UF1000,1000_QL80_.jpg',
        
    }
]

export const mostSearching=[
  'Construction Helmet',
  'Saws',
  'Cider',
  'Apple Juice',
  'Construction Costume blue',
  'Tapes',
  'Construction suit',
  'Pullers',
  'Pickaxes and Crowbars',
  'Carrots',
  'Construction hammer',
  'Wrenches',
  'Screwdrives',
  'Construction Shovels',
  'Construction Costume blue',
  'Pullers',
  'Kinoa',
  'Banana'
]


export const searchProduct=async (q)=>{
const options = {
  method: 'GET',
  url: 'https://wayfair.p.rapidapi.com/products/search',
  params: {
    keyword: q,
    sortby: '0',
    curpage: '1',
    itemsperpage: '48'
  },
  headers: {
    'X-RapidAPI-Key': 'a92123b46dmshf1d366063e87eccp1764cfjsncb564a0cc294',
    'X-RapidAPI-Host': 'wayfair.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
  if(response.data.response.product_collection){
	return response.data.response.product_collection
  }else{
   return response.data.response.superbrowse_object.product_collection
  }
} catch (error) {
	return error
}
}