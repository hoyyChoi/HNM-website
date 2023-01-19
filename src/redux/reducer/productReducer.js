let initialState={
    productList:[]
}

function productReducer(state=initialState,action){
    if(action.type=="GET_PRODUCT"){
        return {...state,productList:action.payload.data}
    }
    return {...state}
}

export default productReducer