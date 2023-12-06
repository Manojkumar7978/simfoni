let initialState={
    products:[],
    searchhistory:[],
    categories:[],
    keyword:"ALL ITEMS"
}

const reducer=(state=initialState,action)=>{
    if(action.type==='CATEGORIES DATA'){
        return {
            ...state,
            categories:action.payload
        }
    }
    if(action.type==='ALL PRODUCT'){
        return {
            ...state,
            products:action.payload
        }
    }
    if(action.type==='keyword'){
        return {
            ...state,
            keyword:action.payload
        }
    }
    return state;
}

export default reducer