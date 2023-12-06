let initialState={
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
    return state;
}

export default reducer