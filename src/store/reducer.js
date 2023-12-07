let initialState={
    searchedProducts:[],
    products:[],
    searchhistory:[],
    categories:[],
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
            products:action.payload,
        }
    }

    if(action.type==='SEARCH PRODUCT'){
        return {
            ...initialState,
            searchedProducts:action.payload
        }
    }
    return state;
}

export default reducer